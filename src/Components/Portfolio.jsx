import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "LocationAccess App (2024)",
    description:
      "A secure React-based web app for real-time location sharing via token embedding. Features WebSocket updates, a React-Node.js stack, and MySQL for authentication and data storage.",

    url: "https://locationwithtoken.netlify.app/",
  },
  {
    title: "Docify (2024)",
    description:
      "Docify, built at the IIT Dhanbad ISM Hackathon, is an AI-powered medical assistant chatbot and food detection tool using image capture. Developed with Python (backend) and Streamlit (frontend) for real-world problem-solving.",
    url: "https://github.com/PratyushPoddar07/nutrinerds",
  },
  {
    title: "My Portfolio",
    description: "This is my portfolio where showing my all details",
    url: "https://github.com/kashyapanjali/portfolioPage",
  },
  {
    title: "WeatherApp (2023)",
    description:
      "A weather app providing real-time updates and forecasts using OpenWeatherMap API. Built with HTML, CSS, and JavaScript, it features location-based forecasts and user feedback collection.",
    url: "https://anjali-weather-app.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
