import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jiaming (Mike) Deng</h2>
        <p><a href="mailto:miked232@uw.edu">miked232@uw.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        My name is Mike Deng, and I am a third year Informatics Data Science Track
        Students @ the University of Washington. I take pleasure in utilizing my
        expertise in both technology and business to support and champion the
        interests of others. My background involves guiding collaborative teams in
        making data-informed decisions for product development, with a strong focus
        on promoting inclusion and enhancing user experiences. I am eager to take on
        intricate challenges, find creative solutions to meet customer demands, and
        maintain a commitment to continuous learning. Let&apos;s connect and explore
        opportunities together!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Jiaming Deng Adapted from{' '}
        <a href="https://github.com/mldangelo/personal-site">mldangelo/personal-site</a>
      </p>

    </section>
  </section>
);

export default SideBar;
