/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { color, motion } from "framer-motion";

import { styles } from "../styles";
import { brower, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          spped: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover  rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="relative black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer group"
              >
                <img
                  src={brower}
                  alt="brower"
                  className="w-1/2 h-1/2 object-contain"
                />
                {/* Tooltip */}
                <span className="absolute top-full px-3 py-1 text-xs text-white bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  View Live
                </span>
              </div>
            )}

            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="relative black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer group"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
                {/* Tooltip */}
                <span className="absolute top-full px-3 py-1 text-xs text-white bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Source Code
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p
            className={`mt-2 text-secondary text-[14px] ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>
          {description.length > 150 && ( // Show "Read More" if description is long
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 mt-2 text-sm"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className={
              index === projects.length - 1
                ? "w-full flex justify-center"
                : "w-auto"
            }
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
