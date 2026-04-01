import React, { useEffect } from 'react';
import Header from '../components/Header';
import CaseStudyTile from '../components/CaseStudyTile';

function Home() {
  useEffect(() => {
    document.title = 'Wes Jones — Lead Product Designer';
  }, []);

  return (
    <div className="grid-container">
      <Header showBackButton={false} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell bio">
          <p className="bio-text">I am a <strong>Lead Product Designer</strong> with 20+ years of experience leading and mentoring digital product teams across a wide range of industries. Lately, I've been focused on designing agentic systems and purpose-built interaction patterns that make it easier for people to work with AI and solve complex problems. My job is to empathize with the user, understand the challenges, concept solutions, build prototypes, test, iterate, and deliver. I do all of this to create thoughtful, effective experiences that meet real human needs and drive business outcomes.</p>
        </div>

        <div className="large-12 cell" style={{ marginTop: '10px' }}>
          <p className="bio-text">My parents have no idea what I do.</p>
        </div>
      </div>

      <div className="dark-band">
        <div className="dark-band-inner">
        {/* Case Studies */}
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell section-header">
            <h1><strong>Selected case studies</strong></h1>
          </div>

          <CaseStudyTile
            title="Fund Manager Workspace"
            caseId="5487"
            link="/fund-manager"
            image="/images/work/f0.png"
          />

          <CaseStudyTile
            title="Netspend Pattern Library"
            caseId="4324"
            link="/ns_pattern_library"
            image="/images/work/NSPL1.png"
          />

          <CaseStudyTile
            title="Custom Debit Card Creator"
            caseId="5214"
            link="/custom_card_creator"
            image="/images/work/cc1.png"
          />

          <CaseStudyTile
            title="Wayblazer Search Engine"
            caseId="2597"
            link="/wayblazer"
            image="/images/work/wayblazer_home1.png"
          />

          <CaseStudyTile
            title="MagicStaff POC"
            caseId="1259"
            link="/magicstaff"
            image="/images/work/ms0.png"
          />

          <CaseStudyTile
            title="CPay Sales Assistant Workshop"
            caseId="2214"
            link="/cpay"
            image="/images/work/cpay_proto1.png"
          />
        </div>
        </div>
      </div>

      {/* Skills */}
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell section-header" style={{ paddingBottom: '40px' }}>
          <h1 style={{}}><strong>Essential skills</strong></h1>
        </div>

        <div className="large-1 medium-2 small-2 cell icon-cell">
          <img src="/images/visionary.png" alt="Visionary" />
        </div>

        <div className="large-11 medium-10 small-10 cell processtile">
          <div><p><strong>Visionary</strong> — Full problem first, design second. What actually needs solving, in what order, and what everyone else is missing.</p></div>
        </div>

        <div className="large-1 medium-2 small-2 cell icon-cell">
          <img src="/images/creative.png" alt="Creative" />
        </div>

        <div className="large-11 medium-10 small-10 cell processtile">
          <p><strong>Creative</strong> — Imagination balanced with logic. The work has to be beautiful and it has to work — never one without the other.</p>
        </div>

        <div className="large-1 medium-2 small-2 cell icon-cell">
          <img src="/images/organizer.png" alt="Organizer" />
        </div>

        <div className="large-11 medium-10 small-10 cell processtile">
          <p><strong>Organizer</strong> — Design patterns, component libraries, documentation. The foundations that keep teams fast and products consistent as they grow.</p>
        </div>

        <div className="large-1 medium-2 small-2 cell icon-cell">
          <img src="/images/builder.png" alt="Builder" />
        </div>

        <div className="large-11 medium-10 small-10 cell processtile">
          <p><strong>Builder</strong> — Pixel-perfect mockups and high-fidelity prototypes that answer hard questions before anyone writes a line of code.</p>
        </div>

        <div className="large-1 medium-2 small-2 cell icon-cell">
          <img src="/images/mentor.png" alt="Mentor" />
        </div>

        <div className="large-11 medium-10 small-10 cell processtile">
          <p><strong>Mentor</strong> — Teams that challenge assumptions, think more rigorously, and ship work they're proud of.</p>
        </div>
      </div>

      <div className="dark-band">
        <div className="dark-band-inner">
        {/* Contact */}
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell section-header">
            <h1><strong>Let&#8217;s talk</strong></h1>
          </div>
        </div>

        <div className="grid-x grid-padding-x">
          <div className="large-12 cell">
            <div className="contactarea">
              <h5><strong>Wes Jones</strong></h5><br />
              <div className="contacts" style={{ paddingLeft: '0px' }}>
                <a href="mailto:wes@jonesco.com"><i className="fa fa-envelope" aria-hidden="true"></i>wes@jonesco.com</a><p></p>
                <a href="tel:5129448513"><i className="fa fa-phone-square" aria-hidden="true"></i>512-944-8513</a><p></p>
                <a href="https://www.linkedin.com/in/wes-jones-a0914312/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</a><p></p>
                <a href="/images/Wes_Jones_Resume.pdf" download><i className="fa fa-cloud-download" aria-hidden="true"></i>Download resumé</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

