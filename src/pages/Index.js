import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mike Deng's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This is my personal website, feel free to check around!
          </p>
        </div>
      </header>
      <p>
        My name is Mike Deng, and I am a third year Informatics Data Science Track Students @ the
        University of Washington. I take pleasure in utilizing my expertise in both technology and
        business to support and champion the interests of others. My background involves guiding
        collaborative teams in making data-informed decisions for product development, with a strong
        focus on promoting inclusion and enhancing user experiences. I am eager to take on intricate
        challenges, find creative solutions to meet customer demands, and maintain a commitment to
        continuous learning. Let&apos;s connect and explore opportunities together!
      </p>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        You can also connect me via <a href="https://www.linkedin.com/in/jiaming-deng-mike/">Linkedin</a> as well.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
