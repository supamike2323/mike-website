import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Internships = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="internships" />
    <div className="title">
      <h3>Professional Experience & Internships</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Internships.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Internships.defaultProps = {
  data: [],
};

export default Internships;