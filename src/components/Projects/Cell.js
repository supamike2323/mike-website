import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><Link to={`/projects/${data.id}`}>{data.title}</Link></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <Link to={`/projects/${data.id}`} className="image">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} style={{ width: '400px', height: 'auto' }} />
      </Link>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;