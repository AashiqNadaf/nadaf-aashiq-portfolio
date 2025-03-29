import { Button, Input, message } from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useReducer, useRef, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import MotionDivWrapper from './MotionDivWrapper';
import './Styles.scss';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const FullScreenDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 108px);
  box-sizing: border-box;
  padding: 0 128px;

  @media (max-width: 964px) {
    padding: 0 25px;
    height: auto !important;
  }
  @media (max-width: 768px) {
    padding: 35px;
    height: auto !important;
  }
`;

const initialState = {
  name: '',
  email: '',
  message: '',
};

interface State {
  name: string;
  email: string;
  message: string;
}

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_MESSAGE'; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const Contact = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  const [messageApi, contextHolder] = message.useMessage();
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [viewportMargin, setViewportMargin] = useState('-100px 0px -100px 0px');
  const [isValid, setIsValid] = useState({
    nameIsValid: true,
    emailIsValid: true,
    messageIsValid: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    const updateViewportMargin = () => {
      setViewportMargin(
        window.innerWidth < 768 ? '0px 0px 0px 0px' : '-100px 0px -100px 0px'
      );
    };

    window.addEventListener('scroll', updateScrollDirection);
    window.addEventListener('resize', updateViewportMargin);
    updateViewportMargin(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
      window.removeEventListener('resize', updateViewportMargin);
    };
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_NAME', payload: value });
    if (value) {
      setIsValid((prev) => ({ ...prev, nameIsValid: true }));
    } else {
      setIsValid((prev) => ({ ...prev, nameIsValid: false }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_EMAIL', payload: value });
    if (emailRegex.test(currentState.email)) {
      setIsValid((prev) => ({ ...prev, emailIsValid: true }));
    } else {
      setIsValid((prev) => ({ ...prev, emailIsValid: false }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_MESSAGE', payload: value });
    if (value) {
      setIsValid((prev) => ({ ...prev, messageIsValid: true }));
    } else {
      setIsValid((prev) => ({ ...prev, messageIsValid: false }));
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Check if all fields are valid after updating validation state
    if (currentState.name === '') {
      setIsValid((prev) => ({ ...prev, nameIsValid: false }));
      messageApi.open({
        type: 'error',
        content: 'Name cannot be empty!',
      });
      return;
    } else if (!emailRegex.test(currentState.email)) {
      setIsValid((prev) => ({ ...prev, emailIsValid: false }));
      messageApi.open({
        type: 'error',
        content: 'Invalid email!',
      });
      return;
    } else if (currentState.message === '') {
      setIsValid((prev) => ({ ...prev, messageIsValid: false }));
      messageApi.open({
        type: 'error',
        content: 'Message cannot be empty!',
      });
      return;
    } else {
      const templateParams = {
        from_name: currentState.name,
        to_name: 'Nadaf Aashiq',
        message: currentState.message,
        from_email: currentState.email,
      };

      emailjs
        .send(
          'service_e7f7btl',
          'template_9fhf6rt',
          templateParams,
          'O-P3IgpSyCA7niRy9'
        )
        .then(
          () => {
            // Reset form fields
            dispatch({ type: 'SET_NAME', payload: '' });
            dispatch({ type: 'SET_EMAIL', payload: '' });
            dispatch({ type: 'SET_MESSAGE', payload: '' });
            messageApi.open({
              type: 'success',
              content: 'Mail sent successfully!',
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
            messageApi.open({
              type: 'error',
              content: 'Something went wrong, Form didnt submitted!',
            });
          }
        );
    }
  };

  return (
    <FullScreenDiv id="contact">
      {contextHolder}
      <MotionDivWrapper>
        <p className="text-center w-full font-bold text-3xl text-[#4D7CF4] py-5 underline underline-offset-8">
          Contact Me!
        </p>
      </MotionDivWrapper>
      <div
        className="w-full flex justify-center items-center"
        style={{ height: 'calc(100vh - 184px)' }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <motion.form
            ref={ref}
            initial={{ opacity: 0, y: scrollDirection === 'down' ? 50 : -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, margin: viewportMargin }}
            onSubmit={onSubmitHandler}
            className="contact-me--form h-[350px] contact-us--card border-[1px] border-black rounded-md p-5 flex flex-col justify-center items-center gap-4 bg-[#4D7CF4]"
          >
            <Input
              type="text"
              name="Name"
              placeholder="Enter your name."
              value={currentState.name}
              style={{ height: '40px' }}
              onChange={handleNameChange}
              status={isValid.nameIsValid ? '' : 'error'}
            />
            <Input
              type="email"
              name="email"
              placeholder="Enter your email."
              value={currentState.email}
              style={{ height: '40px' }}
              onChange={handleEmailChange}
              status={isValid.emailIsValid ? '' : 'error'}
            />
            <TextArea
              showCount
              maxLength={200}
              onChange={handleMessageChange}
              placeholder="Enter your message."
              value={currentState.message}
              style={{ height: 120, resize: 'none' }}
              status={isValid.messageIsValid ? '' : 'error'}
            />
            <Button
              htmlType="submit"
              type="default"
              size="large"
              variant="solid"
              className="contact--button w-full mt-3"
              color={
                isValid.emailIsValid &&
                isValid.messageIsValid &&
                isValid.messageIsValid
                  ? 'default'
                  : 'danger'
              }
            >
              Send <i className="fa-solid fa-paper-plane"></i>
            </Button>
          </motion.form>
        </div>
      </div>
    </FullScreenDiv>
  );
};

export default Contact;
