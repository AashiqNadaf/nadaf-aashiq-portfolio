import { Col, Row } from 'antd';
import { FullScreenDiv } from '../Utils/Constants';
import MotionDivWrapper from './MotionDivWrapper';

const About = () => {
  return (
    <FullScreenDiv id="about">
      <MotionDivWrapper>
        <p className="text-center w-full font-bold text-3xl text-[#4D7CF4] py-5 underline underline-offset-8">
          About
        </p>
      </MotionDivWrapper>
      <Row
        className="w-full row--container"
        gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      >
        <Col
          xs={{
            span: 24,
            order: 1,
          }}
          sm={{
            span: 24,
            order: 1,
          }}
          md={{
            span: 12,
            order: 1,
          }}
          lg={{
            span: 12,
            order: 1,
          }}
          xl={{
            span: 12,
            order: 1,
          }}
          xxl={{
            span: 12,
            order: 1,
          }}
        >
          <div className="about-content--container" style={{ gap: '0px' }}>
            <MotionDivWrapper>
              <img
                src="https://res.cloudinary.com/dfau0jssn/image/upload/q_50/v1743244614/about-image_h6xsqs.png"
                alt="My Image"
                loading="lazy"
                className="about-image"
              />
            </MotionDivWrapper>
          </div>
        </Col>
        <Col
          xs={{
            span: 24,
            order: 2,
          }}
          sm={{
            span: 24,
            order: 2,
          }}
          md={{
            span: 12,
            order: 2,
          }}
          lg={{
            span: 12,
            order: 2,
          }}
          xl={{
            span: 12,
            order: 2,
          }}
          xxl={{
            span: 12,
            order: 2,
          }}
        >
          <div className="about-content--container">
            <MotionDivWrapper>
              <div className="about-text--container">
                <p>
                  I am a <strong>Frontend Engineer</strong> with{' '}
                  <strong>3+ years of experience</strong> in building responsive
                  and high-performance web applications.
                </p>
                <p>
                  I specialize in{' '}
                  <strong>React, JavaScript, HTML, and CSS</strong>, focusing on
                  creating intuitive and efficient user interfaces.
                </p>
                <p>
                  I am passionate about frontend development, I enjoy{' '}
                  <strong>crafting seamless user experiences</strong> and
                  staying updated with modern web technologies.
                </p>
                <p>
                  <strong>Let’s connect and build something amazing! 🚀</strong>
                </p>
              </div>
            </MotionDivWrapper>
          </div>
        </Col>
      </Row>
    </FullScreenDiv>
  );
};

export default About;
