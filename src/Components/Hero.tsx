import { Col, Row } from 'antd';
import './Styles.scss';
// import HeroImage from '../assets/hero-image.png';
import { FullScreenDiv } from '../Utils/Constants';
import MotionDivWrapper from './MotionDivWrapper';
import CloudImg from './CloudImg';
import ResumePdf from '../assets/Nadaf_Aashiq_Resume_2025.pdf';

const Hero = () => {
  const handleDownload = (): void => {
    const pdfUrl = ResumePdf; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Nadaf_Aashiq_Resume'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <FullScreenDiv
      className="mt-14 flex flex-row justify-center items-center"
      id="hero"
    >
      <Row
        className="w-full h-full"
        gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      >
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
          <MotionDivWrapper>
            <div className="hero-content--container">
              <div className="hero-text--container">
                <p className="font-bold">Hi,</p>

                <p className="font-bold">
                  I'am <span className="text-[#4D7CF4]">Nadaf Aashiq</span>
                </p>

                <p className="font-bold">{`<React developer />`}</p>
              </div>

              <button
                onClick={handleDownload}
                className="p-3 w-auto bg-[#4D7CF4] text-neutral-50 font-bold text-l rounded-md cursor-pointer contact--button"
              >
                Download resume
              </button>

              <div className="flex flex-row justify-between items-center gap-3 w-28 px-2">
                <a
                  href="https://www.linkedin.com/in/aashiq-nadaf-b9b035195/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a href="https://github.com/AashiqNadaf" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://www.instagram.com/the_invincible_16"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </MotionDivWrapper>
        </Col>
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
          <div className="hero-content--container" style={{ gap: '0px' }}>
            <MotionDivWrapper>
              {/* <img
                src={HeroImage}
                alt="My Image"
                loading="lazy"
                className="hero-image"
              /> */}
              <CloudImg className="hero-image" publidId="hero-image_x1euu4" />
            </MotionDivWrapper>
          </div>
        </Col>
      </Row>
    </FullScreenDiv>
  );
};

export default Hero;
