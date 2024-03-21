import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/twitter-clone.png";
import IMG2 from "../../assets/Airbnb-clone.png";
import IMG3 from "../../assets/E-commerce.png";
import IMG4 from "../../assets/UniveristyWebsite.png";
import IMG5 from "../../assets/KuRentLogin.png";
import IMG6 from "../../assets/Airbnb-clone.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Twitter Clone using Next.js, Firebase, Tailwind, Recoil",
    github: "https://github.com/NotSugat/twitter-clone-final",
    demo: "https://twitter-clone-bruh.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "AirBnB Clone using Next.js, Firebase, Tailwind",
    github: "https://github.com/NotSugat/airbnb-clone",
    demo: "https://airbnb-clone-nine-snowy.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "E-commerce Website using HTML/CSS/JavaScript",
    github: "https://github.com/NotSugat/project-6-final",
    demo: "https://notsugat.github.io/project-6-final/",
  },
  {
    id: 4,
    image: IMG4,
    title: "University Site using HTML/CSS/JavaScript",
    github: "https://github.com",
    demo: "https://notsugat.github.io/project5/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Vehicle Renting Application using Qt, Qml, C++, SQlite",
    github: "https://github.com/NotSugat/kuRentQt5",
  },
  {
    id: 6,
    image: IMG6,
    title: "Demo",
    github: "https://github.com",
    demo: "https://twitter-clone-bruh.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
