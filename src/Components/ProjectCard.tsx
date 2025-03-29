import React from 'react';
import { ProjectDataType } from '../Utils/ProjectData';

interface ProjectCardPropType {
  projectData: ProjectDataType;
  onClickHandler: () => void;
}

const ProjectCard: React.FC<ProjectCardPropType> = ({
  projectData: { imageValue, title },
  onClickHandler,
}) => {
  return (
    <div
      className="group relative w-72 h-64 rounded-lg border-2 overflow-hidden cursor-pointer project-card"
      onClick={onClickHandler}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${imageValue})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div
        className="absolute inset-0 bg-black/80 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500"
        style={{
          filter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <h5 className="text-white font-light text-sm">Click to view more info!</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
