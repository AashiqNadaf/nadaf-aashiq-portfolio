import { Modal } from 'antd';
import { FullScreenDiv } from '../Utils/Constants';
import { projectData, ProjectDataType } from '../Utils/ProjectData';
import ProjectCard from './ProjectCard';
import './Styles.scss';
import { useEffect, useState } from 'react';
import MotionDivWrapper from './MotionDivWrapper';

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curentActiveProject, setCurentActiveProject] = useState<
    ProjectDataType | undefined
  >();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setCurentActiveProject(undefined);
    }
  }, [isModalOpen]);

  return (
    <FullScreenDiv id='work'>
      <MotionDivWrapper>
      <p className="text-center w-full font-bold text-3xl text-[#4D7CF4] py-5 underline underline-offset-8">
        Work
      </p>
      </MotionDivWrapper>
      <div className="w-full h-[calc(100%-76px)] flex flex-row p-7 gap-7 flex-wrap justify-center items-center">
        {projectData.map((ele) => (
          <MotionDivWrapper key={Math.random() * 10000}>
          <ProjectCard
            projectData={{ ...ele }}
            onClickHandler={() => {
              setCurentActiveProject(ele);
              setIsModalOpen(true);
            }}
          />
          </MotionDivWrapper>
        ))}
      </div>
      <Modal
        title={curentActiveProject?.title ?? ''}
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        closable
        footer={[]}
      >
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="grid grid-rows-[auto_auto] gap-5 col-span-3 description-section">
            <div className="bg-[#D5E7F3] w-full rounded-lg p-5">
              <div className="w-full work-org-span">
                <span className="font-semibold text-md">
                  <span className="font-bold text-md">Organisation:</span>{' '}
                  {curentActiveProject?.org ?? ''}
                </span>
                <span className="font-semibold text-md">
                  <span className="font-bold text-md">Project span:</span>{' '}
                  {curentActiveProject?.start ?? ''} -{' '}
                  {curentActiveProject?.end ?? ''}
                </span>
              </div>
              <p className="mt-2.5 w-full font-bold text-md">Description:</p>
              <div className="mt-1 flex flex-col gap-5">
                {curentActiveProject?.description?.map((ele, index) => (
                  <div
                    key={index}
                    className="h-auto w-full rounded-md project-card bg-[#10357B] pl-3.5 flex items-start gap-2.5 text-[#D5E7F3] font-semibold text-md p-2"
                  >
                    <i className="fa-solid fa-circle-dot mt-1.5"></i>
                    {ele}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#10357B] w-full rounded-lg p-5">
              <p className="font-bold text-md text-[#D5E7F3]">
                Roles & responsibilities:
              </p>
              <div className="mt-1.5 flex flex-col gap-5">
                {curentActiveProject?.role?.map((ele, index) => (
                  <div
                    key={index}
                    className="h-auto w-full rounded-md project-card bg-[#D5E7F3] pl-3.5 flex items-start gap-2.5 font-semibold text-md p-2"
                  >
                    <i className="fa-solid fa-circle-dot mt-1.5"></i>
                    {ele}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#73B3D9] rounded-lg flex flex-col gap-1 p-5 technology-section">
            <span className="font-bold text-md">Technologies:</span>
            <div className="flex flex-col gap-5">
              {curentActiveProject?.technology?.map((ele, index) => (
                <div
                  key={index}
                  className="h-auto w-full rounded-md project-card bg-[#D5E7F3] pl-3.5 flex items-start gap-2.5 font-semibold text-md p-2"
                >
                  <i className="fa-solid fa-microchip mt-1"></i>
                  {ele}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </FullScreenDiv>
  );
};

export default Work;
