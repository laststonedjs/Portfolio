import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../high_order_comp";
// styles
import { styles } from "../styles";
// constants
import { services } from "../constants";
// utils
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-2">
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am extremely hard working, committed to efficiency and results.
        Successfully identified, diagnosed and fixed website issues. Resolved
        web app issues based on external and internal reports. Help to achieve a
        consistent look and visual theme across the website by building modern &
        contemporary UI solutions, finding creative functional solutions for
        clients through analysis and recognition issues in development. Personal
        growth and learning is one of my core driving forces. My greatest love &
        passion was and will remain for JavaScript, in general technologies
        related to JS, but the desire to progress and learn new techs is also a
        card I play.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
