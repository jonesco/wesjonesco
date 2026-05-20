import React from 'react';
import { Link } from 'react-router-dom';

function NextCaseStudy({ title, link }) {
  return (
    <Link to={link}>
      <div className="next">
        <h4 style={{ color: 'black' }}>Next case study &gt;</h4>
        <h3><strong>{title}</strong></h3>
      </div>
    </Link>
  );
}

export default NextCaseStudy;
