import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import PropTypes from "prop-types";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";

const ServiceCard = ({ icon, title, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-ld text-center">
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn(",", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leadin-[30px]"
      >
        I'm a versatile Frontend React JS Developer with a flair for crafting
        captivating digital experiences. With 2 years of expertise, I specialize
        in transforming Figma and XD designs into dynamic React websites,
        blending React, HTML, and Tailwind CSS for responsive, eye-catching
        interfaces.
        <br></br>
        My toolkit includes Javascript and Typescript, and I excel in frameworks
        like React JS, Node JS, and Express JS. I thrive on collaborating
        closely with clients, swiftly understanding their vision to create
        scalable, user-centric solutions that tackle real-world challenges.
        Let's synergize our skills to turn your ideas into seamless, innovative
        digital solutions. Reach out, and let's embark on a journey to redefine
        user experiences together! to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SectionWrapper(About, "about");
