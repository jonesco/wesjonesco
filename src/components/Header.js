import React from 'react';
import { Link } from 'react-router-dom';

function Header({ showBackButton = false }) {
  return (
    <nav className="site-nav">
      <Link to="/" className="site-logo">
        <img src="/images/header2.png" style={{ width: '300px' }} alt="Wes Jones — Lead Product Designer" />
      </Link>
      {showBackButton && (
        <Link to="/" className="back-link">← Back to main page</Link>
      )}
    </nav>
  );
}

export default Header;
