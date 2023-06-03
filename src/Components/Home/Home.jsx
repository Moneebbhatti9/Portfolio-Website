import React from "react";
import "./css/Home.css";
import Logo from "../Assets/Logo/Logo.png";

const Home = () => {
  return (
    <div className="body">
      {/* nav bar */}

      <nav className="navbar navbar-ligt">
        <div className="container">
          <div>
            <img src={Logo} alt="" className="nav-logo" />
          </div>
          <div className="d-flex justify-content-around">
            <div className="nav-item">
              <li className="nav-links">About Me</li>
              <li className="nav-links">Skills</li>
              <li className="nav-links">Projects</li>
              <li className="nav-links">Contact Me</li>
            </div>
          </div>
        </div>
      </nav>

      {/* nav bar */}

      <div className="row row-margin">
        <div className="col-lg-6" style={{ padding: "5rem" }}>
          <p className="heading-welcome"> Welcome to my Portfolio</p>
          <h4 className="Intro" style={{ marginBottom: "1rem" }}>
            HI! I’m Moneeb<br></br> MERN Stack
            <span className="developer-style">Developer</span>
          </h4>
          <p className="skill-highlight">
            Software Developer with expertise in{" "}
            <span className="MERN"> MERN STACK</span>|
            <span className="javascript"> JavaScript</span> |
            <span className="html">HTML </span> |
            <span className="css">CSS</span> |
            <span className="react">React.js</span> |
            <span className="node"> NODE.js</span> |{" "}
            <span className="express"> Express</span> |{" "}
            <span className="mongo"> MongoDB</span> . Passionate about
            real-world projects & enhancing UX. Pursuing BS in Comp Sci. Looking
            for opportunities to learn and grow
          </p>
        </div>
        <div className="col-lg-6 bg-danger ">PIC</div>
      </div>
    </div>
  );
};

export default Home;
