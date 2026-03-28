import React from 'react';
import Header from '../components/Header';
import CaseStudyTile from '../components/CaseStudyTile';

function Home() {
  return (
    <div className="grid-container">
      <Header showBackButton={false} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h3>
            <p>I am a <strong>Lead Product Designer</strong> with more than 20 years of experience leading and mentoring digital product teams across a wide range of industries. Lately, I've been focused on designing agentic systems and purpose-built interaction patterns that make it easier for people to work with AI and solve complex problems. My job is to empathize with the user, understand the challenges, concept solutions, build prototypes, test, iterate, and deliver. I do all of this to create thoughtful, effective experiences that meet real human needs and drive business outcomes.</p>
          </h3>
        </div>

        <div className="large-12 cell" style={{ marginTop: '10px' }}>
          <h3><p>My parents have no idea what I do.</p></h3>
        </div>
      </div>

      <hr className="block" />

      {/* Case Studies */}
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" id="header">
          <h1><strong>Selected case studies</strong></h1>
        </div>

        <CaseStudyTile 
          title="Fund Manager Workspace" 
          caseId="5487" 
          link="/fund-manager"
          className="image-rollover"
        />

        <CaseStudyTile 
          title="Netspend Pattern Library" 
          caseId="4324" 
          link="/ns_pattern_library"
        />

        <CaseStudyTile 
          title="Custom Debit Card Creator" 
          caseId="5214" 
          link="/custom_card_creator"
        />

        <CaseStudyTile 
          title="Wayblazer Search Engine" 
          caseId="2597" 
          link="/wayblazer"
        />

        <CaseStudyTile 
          title="MagicStaff POC" 
          caseId="1259" 
          link="/magicstaff"
        />

        <CaseStudyTile 
          title="CPay Sales Assistant Workshop" 
          caseId="2214" 
          link="/cpay"
        />
      </div>

      <hr />

      {/* Skills */}
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" id="header" style={{ paddingBottom: '40px' }}>
          <h1 style={{}}><strong>Essential skills</strong></h1>
        </div>

        <div className="large-1 medium-2 small-2 cell" id="icon">
          <img src="/images/visionary.png" alt="Visionary" />
        </div>

        <div className="large-11 medium-10 small-10 cell" id="processtile">
          <div><h5>As a <strong>Visionary</strong>, I use my insatiable curiosity to learn all aspects of the problem, decide which issues need to be fixed (and in what order) and then create bulletproof solutions.</h5></div>
        </div>

        <div className="large-1 medium-2 small-2 cell" id="icon">
          <img src="/images/creative.png" alt="Creative" />
        </div>

        <div className="large-11 medium-10 small-10 cell" id="processtile">
          <h5>As a <strong>Creative</strong>, I am skilled at finding the balance between imagination and logic, developing designs that delight and perform.</h5>
        </div>

        <div className="large-1 medium-2 small-2 cell" id="icon">
          <img src="/images/organizer.png" alt="Organizer" />
        </div>

        <div className="large-11 medium-10 small-10 cell" id="processtile">
          <h5>As an <strong>Organizer</strong>, I define design patterns and document components for consistency in both how the product looks and functions.</h5>
        </div>

        <div className="large-1 medium-2 small-2 cell" id="icon">
          <img src="/images/builder.png" alt="Builder" />
        </div>

        <div className="large-11 medium-10 small-10 cell" id="processtile">
          <h5>As a <strong>Builder</strong>, I create pixel-perfect designs and prototypes that allow for quick answers that identify unknown problems.</h5>
        </div>

        <div className="large-1 medium-2 small-2 cell" id="icon">
          <img src="/images/mentor.png" alt="Mentor" />
        </div>

        <div className="large-11 medium-10 small-10 cell" id="processtile">
          <h5>As a <strong>Mentor</strong>, I guide my team to challenge assumptions and sharpen their skill set in order to get the job done.</h5>
        </div>
      </div>

      <hr />

      {/* Contact */}
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h1><strong>Let&#8217;s talk</strong></h1>
        </div>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <div className="contactarea">
            <h5><strong>Wes Jones</strong></h5><br />
            <div className="contacts" style={{ paddingLeft: '0px' }}>
              <a href="mailto:wes@jonesco.com"><i className="fa fa-envelope" aria-hidden="true"></i>wes@jonesco.com</a><p></p>
              <i className="fa fa-phone-square" aria-hidden="true"></i>512-944-8513<p></p>
              <a href="/images/Wes_Jones_Resume.pdf" download><i className="fa fa-cloud-download" aria-hidden="true"></i>Download resumé</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

