import React, { useEffect } from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function Wayblazer() {
  useEffect(() => {
    document.title = 'Wayblazer AI Travel Search — Wes Jones, Lead Product Designer';
  }, []);

  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #2597</h5>
          <h1><strong>Wayblazer Search Platform</strong></h1>
        </div>
        <div className="large-12 cell">
          <h4>Working as a consultant, I helped Wayblazer create a smart search experience that navigates around the user's travel desires. Leveraging <a href="https://www.ibm.com/watson?utm_content=SRCWW&p1=Search&p4=43700050370936620&p5=e&gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KFMmJmPP29EwMvYaSFaliFOrrE-Sg8HvN7Rp7QUXyzgYkFhJCQmU20aAnRgEALw_wcB&gclsrc=aw.ds">IBM Watson</a> by incorporating a selection of API's into their technology platform, I designed this site with the ability to predict the type of trip — like a family versus a business trip — as well as suggest activities and features to enhance the user's visit. Plus, the ability to operate seamlessly inside third party sites with just a few CSS tweaks.</h4>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 cell">
          <h5><strong>Challenges to solve:</strong></h5>
          <ul className="a">
            <li className="special-item">Create a simple interface that implements travel search plus intuitive AI suggestions</li>
            <li className="special-item">Allow for easy whitelabeling options for third party integration</li>
            <li className="special-item">Create responsive layouts that keep necessary content visible and accessible on all form factors and device orientations</li>
          </ul>
        </div>

        <div className="large-6 cell">
          <h5><strong>My role:</strong></h5>
          <ul className="a">
            <li className="special-item">Research best-in-class travel search solutions as well as best practices</li>
            <li className="special-item">Collaborate with product stakeholders and owners to create the user experience</li>
            <li className="special-item">Art direct and guide visual design</li>
            <li className="special-item">Create user-flows and prototypes</li>
            <li className="special-item">Present to client and iterate based on feedback</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '40px' }}>
          <img src="/images/work/wayblazer_home1.png" alt="Wayblazer AI-powered travel search homepage — natural language search interface using IBM Watson to predict trip type and suggest tailored activities" />
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wayblazer_home2.png" alt="Wayblazer search results page showing AI-curated hotel and activity recommendations" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell" id="">
          <img src="/images/work/wayblazer_home3.png" alt="Wayblazer detail view showing AI-suggested activities and trip enhancements based on predicted traveler type" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell" id="">
          <img src="/images/work/wayblazer_home4.png" alt="Wayblazer white-label integration view demonstrating seamless embedding inside a third-party travel site" width=" " height=" " />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>Responsive Mobile</strong></h2>
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wayblazer_mobile1.png" alt="Wayblazer mobile responsive design — search interface on a smartphone" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wayblazer_mobile3.png" alt="Wayblazer mobile responsive design — results view on a smartphone" width=" " height=" " />
        </div>

        <div className="large-4 medium-4 small-4 cell">
          <img src="/images/work/wayblazer_mobile2.png" alt="Wayblazer mobile responsive design — activity detail view on a smartphone" width=" " height=" " />
        </div>
      </div>

      <hr />

      <NextCaseStudy title="MagicStaff POC" link="/magicstaff" />
    </div>
  );
}

export default Wayblazer;

