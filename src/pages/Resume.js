import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Internships from '../components/Resume/Internships';
import Research from '../components/Resume/Research';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import internships from '../data/resume/internships';
import research from '../data/resume/research';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Internships: () => <Internships data={internships} />,
  Research: () => <Research data={research} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
