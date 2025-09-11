import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">

      {/* Experience Box */}
      <div className="about__box">
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Major Internships</span>
      </div>

      {/* Projects Box */}
      <div className="about__box">
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>

      {/* Hackathons Box */}
      <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">Hackathons</h3>
        <span className="about__subtitle">10+ Participated</span>
      </div>

    </div>
  );
}

export default Info;
