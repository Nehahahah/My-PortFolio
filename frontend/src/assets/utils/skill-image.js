// Languages
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import python from '/public/svg/skills/python.svg';
import sql from '/public/svg/skills/sql.svg';        // add sql.svg
import cplusplus from '/public/svg/skills/cplusplus.svg';

// Frontend
import react from '/public/svg/skills/react.svg';
import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import tailwind from '/public/svg/skills/tailwind.svg';

// Backend & Database
import node from '/public/svg/skills/node.svg';      // add node.svg
import express from '/public/svg/skills/express.svg';// add express.svg
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';

// Tools & Cloud
import git from '/public/svg/skills/git.svg';
import github from '/public/svg/skills/github.svg';  // add github.svg
import aws from '/public/svg/skills/aws.svg';
import powerbi from '/public/svg/skills/powerbi.svg';// add powerbi.svg
import excel from '/public/svg/skills/excel.svg';    // add excel.svg

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    // Languages
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'python':
      return python;
    case 'sql':
      return sql;
    case 'c++':
      return cplusplus;

    // Frontend
    case 'react':
      return react;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'bootstrap':
      return bootstrap;
    case 'tailwind':
      return tailwind;

    // Backend & Database
    case 'node':
    case 'node.js':
      return node;
    case 'express':
      return express;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;

    // Tools & Cloud
    case 'git':
      return git;
    case 'github':
      return github;
    case 'aws':
      return aws;
    case 'power bi':
      return powerbi;
    case 'excel':
      return excel;

    default:
      break;
  }
};
