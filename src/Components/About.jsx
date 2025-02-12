import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Full Stack Developer studying at DRIEMS University. I enjoy building scalable and efficient web applications.";
const skillsList = [
  "Web design",
  "Full Stack developer",
  "Api Testing",
  "Mern Stack",
  "User Interface",
  "Java with DSA",
];

const detailOrQuote =
  "I am passionate about building scalable and efficient web applications while solving complex problems with innovative solutions. With my full-stack development experience, I strive to create seamless user experiences and robust backend architectures to make technology more accessible and impactful.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
