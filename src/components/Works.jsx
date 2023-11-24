import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="data:image/png;base64,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"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
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
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
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
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
