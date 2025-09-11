import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const [repos, setRepos] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // ⭐ Pinned projects (VedVachan & Shiniti)
  const pinnedProjects = [
    {
      name: "VedVachan",
      description: "A spiritual full-stack app built with React, Node.js, and MongoDB.",
      html_url: "https://github.com/Nehahahah/VedVachan",
      homepage: "https://vedvachan.netlify.app/", // add if deployed
      language: "Full Stack",
      img: "https://opengraph.githubassets.com/1/Nehahahah/VedVachan",
    }
  ];

  // Fetch other repos
  useEffect(() => {
    fetch("https://api.github.com/users/Nehahahah/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) =>
            repo.name.toLowerCase() !== "vedvachan" &&
            repo.name.toLowerCase() !== "shiniti" &&
            !repo.name.toLowerCase().includes("dsa") &&
            !repo.name.toLowerCase().includes("sheet")
        );

        const sorted = filtered.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        setRepos(sorted.slice(0, 4)); // show 4 more after pinned
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  // Render project card
  const renderProject = (project, index) => (
    <div className="app__work-item app__flex" key={index}>
      <div className="app__work-img app__flex">
        <img src={project.img} alt={project.name} />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <a href={project.html_url} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillGithub />
            </motion.div>
          </a>

          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
          )}
        </motion.div>
      </div>

      <div className="app__work-content app__flex">
        <h4 className="bold-text">{project.name}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {project.description
            ? project.description
            : "A project from my GitHub portfolio."}
        </p>

        <div className="app__work-tag app__flex">
          <p className="p-text">
            {project.language ? project.language : "Multiple Languages"}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Projects</span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* Pinned first */}
        {pinnedProjects.map((project, index) =>
          renderProject(project, `pinned-${index}`)
        )}

        {/* Other repos */}
        {repos.map((repo, index) =>
          renderProject(
            {
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              language: repo.language,
              img: `https://opengraph.githubassets.com/1/${repo.full_name}`,
            },
            index
          )
        )}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);

