"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import { skills } from "./Data";
import { motion } from "framer-motion";

function About() {
  const [tab, setTab] = useState("Skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <section className="text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-10 items-center py-8 px-4 xl:gap-10 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/aboutimg.jpg"
          width={500}
          height={500}
          alt="Developer Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, HTML, CSS,
            and Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8 justify-evenly">
            <span
              onClick={() => handleTabChange("Skills")}
              className={`font-semibold cursor-pointer ${
                tab === "Skills"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-[#ADB7BE] hover:text-white"
              }`}
            >
              Skills
            </span>
            <span
              onClick={() => handleTabChange("Education")}
              className={`font-semibold cursor-pointer ${
                tab === "Education"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-[#ADB7BE] hover:text-white"
              }`}
            >
              Education
            </span>

            <span
              onClick={() => handleTabChange("Certifications")}
              className={`font-semibold cursor-pointer ${
                tab === "Certifications"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-[#ADB7BE] hover:text-white"
              }`}
            >
              Certifications
            </span>
          </div>
          <div className="mt-8">
            {tab === "Skills" && (
              <ul className="list-disc list-inside">
                {Array.isArray(skills) &&
                  skills.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                  ))}
              </ul>
            )}
            {tab === "Education" && (
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <p className="text-xl">
                    Trinity College Of Engineering and Research, Pune{" "}
                  </p>
                  <p className="">
                    Bachelor of Engineering in Electronics and Telecommunication
                    | CGPA: 8.10 ,2024{" "}
                  </p>
                </div>
                <div>
                  <p className="text-xl">
                    Maharashtra Institute of Technology (MIT),Pune{" "}
                  </p>
                  <p>
                    Diploma in Information Technology | Percentage : 82.81
                    %,2020{" "}
                  </p>
                </div>
              </div>
            )}

            {tab === "Certifications" && (
              <ul className="list-disc pl-2">
                <li>Python [IBM Developer Skills Network – 2023]</li>
                <li>JavaScript [Great Learning Academy-2024 ]</li>
                <li>React.JS Essential- [NSDC ( Lets Upgrade)-2024]</li>
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
