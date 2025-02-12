import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/socials/imagelogo.jpg";

const imageAltText = "A image of logo where showing my dedication towards the Tech Stack ";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: "6rem",
          left: "2rem",
          width: "26rem",
          color: "pink",
        }}
      >
        <h1>{name}</h1>
        <h2 style={{ fontWeight: "bold" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
