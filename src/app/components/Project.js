"use client";
import React, { useState, useRef } from "react";
import Projectcard from "./Projectcard";
import { projectdata } from "./Data";
import { motion, useInView } from "framer-motion";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projectdata
      : projectdata.filter((project) => project.tag.includes(selectedCategory));
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-5 py-6">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`rounded-full border-2 ${
            selectedCategory === "All"
              ? "border-purple-500"
              : "border-slate-600"
          } hover:border-white px-6 py-3 text-xl cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Web")}
          className={`rounded-full border-2 ${
            selectedCategory === "Web"
              ? "border-purple-500"
              : "border-slate-600"
          } hover:border-white px-6 py-3 text-xl cursor-pointer`}
        >
          Web
        </button>
        <button
          onClick={() => setSelectedCategory("App")}
          className={`rounded-full border-2 ${
            selectedCategory === "App"
              ? "border-purple-500"
              : "border-slate-600"
          } hover:border-white px-6 py-3 text-xl cursor-pointer`}
        >
          App
        </button>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-9 md:gap-12 mt-5">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Projectcard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Project;
