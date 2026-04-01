import React, { useEffect } from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function Wellsmith() {
  useEffect(() => {
    document.title = 'Wellsmith Healthcare App — Wes Jones, Lead Product Designer';
  }, []);

  return (
    <div className="page">
      <Header showBackButton={true} />

      <div>
        <h5 id="rcorners1">Case Study #3254</h5>
        <h1><strong>Wellsmith Web Portal & Mobile App</strong></h1>
        <h4>I designed this healthcare ecosystem to track the compliance levels of patients based on their medication, activity, nutrition and vitals. The web portal access allows clinicians to check-in on large numbers of patients at any time and offer on-the-spot expertise. Additionally, with individualized reminders and care plan baselines, this app provides a clear path for patients to reach their health and wellness goals.</h4>
      </div>

      <hr />

      <div style={{ marginBottom: '20px' }}>
        <h2><strong>Physician Portal</strong></h2>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <img src="/images/work/wellsmith-tablet1.png" alt="Wellsmith physician portal dashboard showing patient compliance overview across medication, activity, nutrition, and vitals" />
      </div>

      <div className="cols-3">
        <img src="/images/work/wellsmith-tablet2.png" alt="Wellsmith physician portal — individual patient detail view with compliance tracking and care plan progress" />
        <img src="/images/work/wellsmith-tablet3.png" alt="Wellsmith physician portal — clinician messaging and on-the-spot expertise delivery to remote patients" />
        <img src="/images/work/wellsmith-tablet4.png" alt="Wellsmith physician portal — care plan management and patient goal baseline configuration" />
      </div>

      <hr />

      <div style={{ marginBottom: '20px' }}>
        <h2><strong>Patient App</strong></h2>
      </div>

      <div className="cols-3">
        <img src="/images/work/wellsmith-mobile1.png" alt="Wellsmith patient mobile app — daily health check-in and medication tracking screen" />
        <img src="/images/work/wellsmith-mobile2.png" alt="Wellsmith patient mobile app — activity and nutrition logging screen with personalized reminders" />
        <img src="/images/work/wellsmith-mobile3.png" alt="Wellsmith patient mobile app — vitals tracking and care plan progress screen toward health and wellness goals" />
      </div>

      <hr />

      <NextCaseStudy title="CPay Sales Assistant Workshop" link="/cpay" />
    </div>
  );
}

export default Wellsmith;
