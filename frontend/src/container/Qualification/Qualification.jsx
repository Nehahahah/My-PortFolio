import React, { useState } from "react";

import { AppWrap, MotionWrap } from '../../wrapper';
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { images } from '../../constants';

import './Qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <h2 className="head-text">MY <span>Qualification</span></h2>
      <section className="qualification section">
        <div className="qualification__container container">
          {/* Tabs */}
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <HiOutlineAcademicCap className="qualification__icon" />
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <HiOutlineBriefcase className="qualification__icon" />
              Experience
            </div>
          </div>

          {/* Sections */}
          <div className="qualification__sections">
            {/* Education */}
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bachelor of Technology (B.Tech) - CSE</h3>
                  <span className="qualification__subtitle">
                    VIT Bhopal University | <b>CGPA: 9.15</b>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2022 – 2026 (Ongoing)
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Higher Secondary (PCM)</h3>
                  <span className="qualification__subtitle">
                    Kendriya Vidyalaya No. 2 EME | <b>90.2%</b>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2021 – 2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Secondary School (10th)</h3>
                  <span className="qualification__subtitle">
                    Kendriya Vidyalaya No. 2 EME | <b>95.2%</b>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2019 – 2020
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Blockchain Intern</h3>
                  <span className="qualification__subtitle">
                    <a
                      href="https://www.vodafone.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      Vodafone Intelligent Solutions (VOIS)
                      <img
                        src={images.vodafone}
                        alt="Vodafone Logo"
                        className="logo"
                      />
                    </a>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    Jan 2025 – Feb 2025
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Data Analyst Intern</h3>
                  <span className="qualification__subtitle">
                    <a
                      href="https://plypicker.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      PlyPicker
                      <img
                        src={images.ply}
                        alt="PlyPicker Logo"
                        className="logo1"
                      />
                    </a>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    Apr 2024 – Jun 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Qualification, 'app__works'),
  'qualification',
  'app__primarybg',
);
