import React from 'react';
import { useParams } from 'react-router-dom';
import Main from '../layouts/Main';
import data from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderProjectContent = () => {
    switch (project.id) {
        case 'NBA-Dataset':
          return (
            <>
              <p>{project.desc}</p>
              <p>Our reserach questions were: would age affect the performance of a NBA player? would the dominant NBA stars significantly affect the overall performace of their teams? and how can we better visualize the performance of an individual player?</p>
              <p>We have also made a website with R, and it can be accessed <a href="https://miked232.shinyapps.io/final-project-info201/">here</a>, and here is a snapshot below.</p>
              <img className="project-image" src="/images/projects/NBA-snapshot.png" alt="NBA Dataset website snapshot" />
            </>
          );
          case 'story-tree':
            return (
              <>
                <p>{project.desc}</p>
                <p>What is Storytree? Storytree is a collaborative writing platform allowing for people to write stories together. Create the first chapter of a story and have others build off of it in future chapters. Then browse the creations built upon by other people. Want to see a different interpretation? Look at different paths and upvote your favorite ones. Don't like the direction of a story? Branch it off and write your own ending!</p>
                <p>Used Javascript, React, Fuse.io to complete this website. </p>
                <p>You can visit the website <a href="https://storytree-5fd56.web.app/">here</a>.</p>
                <p>Here's a snapshot of the website:</p>
                <img className="project-image" src="/images/projects/storytree-snap.png" alt="Storytree website snapshot" />
              </>
            );
      default:
        return null;
    }
  };

  return (
    <Main>
      <article className="portfolio-details">
        <div className="title-container">
          <h1>{project.title}</h1>
          <span>{project.subtitle}</span>
        </div>
        <div className="project-info">
          <div className="image-container">
            <img className="project-image" src={project.image} alt={project.title} />
          </div>
          <div className="details-container">{renderProjectContent()}</div>
        </div>
      </article>
    </Main>
  );
};

export default ProjectDetails;