import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudyTile({ title, caseId, link, className = "bgimg" }) {
  return (
    <div className="large-4 medium-6 small-6 cell">
      <Link to={link}>
        <div className={`tile ${className}`}>
          <div className="csid">
            <p>#{caseId}</p>
          </div>
          <p>
            <strong className="show-for-small-only">
              <h1>{title}</h1>
            </strong>
            <strong className="hide-for-small-only">
              <h3><strong>{title}</strong></h3>
            </strong>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CaseStudyTile;

