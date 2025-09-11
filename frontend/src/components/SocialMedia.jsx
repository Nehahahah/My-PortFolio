import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si'; // new icon for LeetCode

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://github.com/Nehahahah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>

    <div>
      <a
        href="https://www.linkedin.com/in/neha-pal-student"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a
        href="https://leetcode.com/u/_Neha_Pal_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  </div>
);

export default SocialMedia;

