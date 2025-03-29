import { Col, Collapse, Row } from 'antd';
import { FullScreenDiv } from '../Utils/Constants';
import { CaretRightOutlined } from '@ant-design/icons';
import './Styles.scss';
import { useState } from 'react';
import AccordionBody from './AccordionBody';
import MotionDivWrapper from './MotionDivWrapper';
import CloudImg from './CloudImg';

const Skills = () => {
  const [activeKey, setActiveKey] = useState<'0' | '1' | '2' | '3'>('0');
  return (
    <FullScreenDiv id="skills">
      <MotionDivWrapper>
        <p className="text-center w-full font-bold text-3xl text-[#4D7CF4] py-5 underline underline-offset-8">
          Skills
        </p>
      </MotionDivWrapper>
      <Row
        className="w-full h-[calc(100%-76px)]"
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
          <div className="skills-content--container">
            <div className="skills-text--container">
              <MotionDivWrapper>
                <Collapse
                  onChange={() => {
                    setActiveKey(
                      activeKey === '0'
                        ? '1'
                        : activeKey === '2' || activeKey === '3'
                        ? '1'
                        : '0'
                    );
                  }}
                  activeKey={activeKey}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  style={{ width: '90%' }}
                  items={[
                    {
                      key: '1',
                      label: 'Libraries',
                      children: (
                        <AccordionBody
                          items={[
                            'React JS.',
                            'Redux, Zustand.',
                            'Tailwind CSS, Bootstrap.',
                            'Material UI, Ant Design, Blade.',
                            'Recharts.',
                          ]}
                        />
                      ),
                    },
                  ]}
                />
              </MotionDivWrapper>
              <MotionDivWrapper>
                <Collapse
                  style={{ width: '90%' }}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  onChange={() => {
                    setActiveKey(
                      activeKey === '0'
                        ? '2'
                        : activeKey === '1' || activeKey === '3'
                        ? '2'
                        : '0'
                    );
                  }}
                  activeKey={activeKey}
                  items={[
                    {
                      key: '2',
                      label: 'Languages',
                      children: (
                        <AccordionBody
                          items={[
                            'JavaScript, TypeScript.',
                            'HTML, CSS, SASS.',
                            'Core Java.',
                          ]}
                        />
                      ),
                    },
                  ]}
                />
              </MotionDivWrapper>
              <MotionDivWrapper>
                <Collapse
                  style={{ width: '90%' }}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  onChange={() => {
                    setActiveKey(
                      activeKey === '0'
                        ? '3'
                        : activeKey === '1' || activeKey === '2'
                        ? '3'
                        : '0'
                    );
                  }}
                  activeKey={activeKey}
                  items={[
                    {
                      key: '3',
                      label: 'Deployment',
                      children: (
                        <AccordionBody
                          items={[
                            'Docker.',
                            'CI/CD, Github actions.',
                            'Spinnaker.',
                          ]}
                        />
                      ),
                    },
                  ]}
                />
              </MotionDivWrapper>
            </div>
          </div>
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
          <div className="skills-content--container" style={{ gap: '0px' }}>
            <MotionDivWrapper>
              <CloudImg className="skills-image" publidId="skills-image_chxa3y" />
            </MotionDivWrapper>
          </div>
        </Col>
      </Row>
    </FullScreenDiv>
  );
};

export default Skills;
