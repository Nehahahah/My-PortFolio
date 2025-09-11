import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Testimonial.scss';

const testimonialsData = [
  {
    name: "VIT Bhopal University",
    company: "B.Tech CSE (2022–2026)",
    feedback: "Currently pursuing Computer Science Engineering with a CGPA of 9.15.",
    img: images.vitlogo, // ✅ your vitlogo.jpg
  },
  {
    name: "Vodafone Intelligent Solutions (VOIS)",
    company: "Blockchain Intern",
    feedback: "Worked on blockchain-based solutions and contributed to enterprise projects.",
    img: images.vodafone, // ✅ vodafone.png
  },
  {
    name: "PlyPicker",
    company: "Data Analyst Intern",
    feedback: "Analyzed data pipelines and provided insights to optimize e-commerce workflows.",
    img: images.ply, // ✅ ply.png
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-text">Testimonials <span>Section</span></h2>

      <div className="app__testimonial-item app__flex">
        <img
          src={testimonialsData[currentIndex].img}
          alt={testimonialsData[currentIndex].name}
        />
        <div className="app__testimonial-content">
          <p className="p-text">{testimonialsData[currentIndex].feedback}</p>
          <div>
            <h4 className="bold-text">{testimonialsData[currentIndex].name}</h4>
            <h5 className="p-text">{testimonialsData[currentIndex].company}</h5>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="app__testimonial-btns app__flex">
        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === 0
                ? testimonialsData.length - 1
                : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>

        <div
          className="app__flex"
          onClick={() =>
            handleClick(
              currentIndex === testimonialsData.length - 1
                ? 0
                : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
