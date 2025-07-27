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
        Welcome to my personal website! I'm Mike Deng, currently pursuing a Master's in Systems Engineering at the University of Pennsylvania. I'm passionate about using technology and data to solve real-world problems and support others in achieving their goals.
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
