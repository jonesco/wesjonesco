import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudyTile({ title, caseId, link, image }) {
  return (
    <div className="large-4 medium-6 small-12 cell">
      <Link to={link}>
        <div className="tile-card">
          <div className="tile-image">
            {image
              ? <img src={image} alt={title} />
              : <div className="tile-image-placeholder" />
            }
          </div>
          <div className="tile-label">
            <div className="csid"><p>#{caseId}</p></div>
            <h2><strong>{title}</strong></h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CaseStudyTile;
