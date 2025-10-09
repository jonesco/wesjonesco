import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Wellsmith() {
  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #3254</h5>
          <h1><strong>Wellsmith Web Portal & Mobile App</strong></h1>
        </div>

        <div className="large-12 cell">
          <h4>I designed this healthcare ecosystem to track the compliance levels of patients based on their medication, activity, nutrition and vitals. The web portal access allows clinicians to check-in on large numbers of patients at any time and offer on-the-spot expertise. Additionally, with individualized reminders and care plan baselines, this app provides a clear path for patients to reach their health and wellness goals.</h4>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>Physician Portal</strong></h2>
        </div>

        <div className="large-12 cell" style={{ marginBottom: '40px' }}>
          <img src="/images/work/wellsmith-tablet1.png" alt="wellsmith-tablet1" />
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wellsmith-tablet2.png" alt="wellsmith-tablet2" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell" id="">
          <img src="/images/work/wellsmith-tablet3.png" alt="wellsmith-tablet3" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell" id="">
          <img src="/images/work/wellsmith-tablet4.png" alt="wellsmith-tablet4" width=" " height=" " />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>Patient App</strong></h2>
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wellsmith-mobile1.png" alt="wellsmith-tablet1" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wellsmith-mobile2.png" alt="wellsmith-tablet2" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wellsmith-mobile3.png" alt="wellsmith-tablet3" width=" " height=" " />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x" style={{ marginBottom: '50px' }}>
        <div className="large-9 small-12 cell">
          <h4>Next case study &gt;</h4>
          <h3><Link to="/cpay"><strong>CPay Sales Assistant Workshop</strong></Link></h3>
        </div>
      </div>
    </div>
  );
}

export default Wellsmith;

