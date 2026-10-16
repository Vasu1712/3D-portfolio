import React from 'react';
import ProjectTextMesh from './ProjectsTextMesh';
import AchievementTextMesh from './AchievementsTextMesh';

const SpringMeshes = ({ scrollProgress, type, count }) => {
  return (
    <>
      {type === 'projects' &&
        Array.from({ length: count }).map((_, index) => (
          <ProjectTextMesh key={index} scrollProgress={scrollProgress} index={index} visible />
        ))}
      {type === 'achievements' &&
        Array.from({ length: count }).map((_, index) => (
          <AchievementTextMesh key={index} scrollProgress={scrollProgress} index={index} visible />
        ))}
    </>
  );
};

export default SpringMeshes;
