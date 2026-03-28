import React from 'react';
import { Link } from 'react-router-dom';

function NextCaseStudy({ title, link }) {
  return (
    <div className="grid-x grid-padding-x">
      <div className="large-12 cell">
        <Link to={link}>
          <div className="next">
            <h4 style={{ color: 'black' }}>Next case study &gt;</h4>
            <h3><strong>{title}</strong></h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NextCaseStudy;

