import React from 'react';
import { Link } from 'react-router-dom';

function Header({ showBackButton = false }) {
  return (
    <div className="grid-x grid-padding-x">
      <div className="large-12 cell">
        <div className="top-bar" style={{ paddingTop: '0px', paddingLeft: '0px', backgroundColor: 'white' }}>
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="name">
                <h1 style={{ marginBottom: '0rem' }}>
                  <Link to="/" style={{ paddingTop: '0px', paddingBottom: '0px', paddingLeft: '0px' }}>
                    <div>
                      <img src="/images/header2.png" style={{ padding: '0px', width: '300px' }} alt="Wes Jones" />
                    </div>
                  </Link>
                </h1>
              </li>
            </ul>
          </div>

          {showBackButton && (
            <div className="top-bar-right">
              <ul className="menu" style={{ margin: '0' }}>
                <li>
                  <Link to="/" style={{ paddingLeft: '0', paddingBottom: '20px' }}>
                    ← Back to main page
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

