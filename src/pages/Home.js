import React, { useEffect } from 'react';
import Header from '../components/Header';
import CaseStudyTile from '../components/CaseStudyTile';

function Home() {
  useEffect(() => {
    document.title = 'Wes Jones — Lead Product Designer';
  }, []);

  return (
    <div className="page">
      <Header showBackButton={false} />

      <div className="bio">
        <p className="bio-text">I am a <strong>Lead Product Designer</strong> with 20+ years of experience leading and mentoring digital product teams across a wide range of industries. Lately, I've been focused on designing agentic systems and purpose-built interaction patterns that make it easier for people to work with AI and solve complex problems. My job is to empathize with the user, understand the challenges, concept solutions, build prototypes, test, iterate, and deliver. I do all of this to create thoughtful, effective experiences that meet real human needs and drive business outcomes.</p>
        <p className="bio-text">My parents have no idea what I do.</p>
      </div>

      {/* What I Bring */}
      <div className="dark-band">
        <div className="dark-band-inner">
          <div className="section-header skills-header">
            <h1>What I bring</h1>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="icon-cell"><img src="/images/visionary.png" alt="Visionary" /></div>
            <div className="processtile"><p><strong>Visionary</strong></p><p>Intentional thinking before fast doing. I define what's actually being solved, in what order, what the team is missing, and what emerging capabilities might change the approach entirely, so the work that follows goes in the right direction from the start.</p></div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="icon-cell"><img src="/images/creative.png" alt="Creative" /></div>
            <div className="processtile"><p><strong>Creative</strong></p><p>Deliver work that's both beautiful and functional. Imagination without logic ships pretty things that don't work. Logic without imagination ships things nobody wants to use. I don't compromise either.</p></div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="icon-cell"><img src="/images/organizer.png" alt="Organizer" /></div>
            <div className="processtile"><p><strong>Organizer</strong></p><p>Build the foundations that keep teams fast. Design patterns, component libraries, and documentation that eliminate redundant decisions and let teams focus on harder problems.</p></div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="icon-cell"><img src="/images/builder.png" alt="Builder" /></div>
            <div className="processtile"><p><strong>Builder</strong></p><p>Reduce risk before engineering starts. High-fidelity prototypes built with the best tools available — including the latest generative AI techniques — that answer the hard questions early: interaction, edge cases, and feasibility, before a single line of code is written.</p></div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="icon-cell"><img src="/images/mentor.png" alt="Mentor" /></div>
            <div className="processtile"><p><strong>Mentor</strong></p><p>Raise the team's ceiling, not just my own output. I train and upskill designers to challenge assumptions, think more rigorously, and ship work they're proud of.</p></div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="icon-cell"><img src="/images/earlyadopter.png" alt="Early Adopter" /></div>
            <div className="processtile"><p><strong>Early Adopter</strong></p><p>Always the first to change the way I work when something better comes along. I constantly experiment with new AI tools and techniques, adopt what makes me sharper and faster, and bring that forward-leaning mindset directly into my practice and my team.</p></div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="section-header">
        <h1>Selected case studies</h1>
      </div>

      <div className="tile-grid">
        <CaseStudyTile title="Fund Manager Workspace" caseId="5487" link="/fund-manager" image="/images/work/f0.png" description="One platform to replace them all — built for one of the world's top investment banks managing $11 trillion in assets." />
        <CaseStudyTile title="Netspend Pattern Library" caseId="4324" link="/ns_pattern_library" image="/images/work/nspl-thumb.png" description="A living design system that keeps teams moving fast and products looking consistent across the Netspend ecosystem." />
        <CaseStudyTile title="Custom Debit Card Creator" caseId="5214" link="/custom_card_creator" image="/images/work/cc-thumb.png" description="A simple, fun way for customers to personalize their card — and a reason to pull it out more often." />
        <CaseStudyTile title="Wayblazer Search Engine" caseId="2597" link="/wayblazer" image="/images/work/wayblazer_home1.png" description="Smart travel search that reads between the lines, using AI to predict what kind of trip you're planning before you know yourself." />
        <CaseStudyTile title="MagicStaff POC" caseId="1259" link="/magicstaff" image="/images/work/ms-thumb.png" description="Staffing optimization that handles the complexity of global teams so managers can focus on the work that matters." />
        <CaseStudyTile title="CPay Sales Assistant Workshop" caseId="2214" link="/cpay" image="/images/work/cpay-thumb.png" description="Four days, one sprint, one prototype — helping a sales team go from scattered tools to a single assistant they actually want to use." />
      </div>

      {/* Contact */}
      <div className="dark-band">
        <div className="dark-band-inner">
          <div className="section-header contact-header">
            <h1>Let&#8217;s talk</h1>
          </div>
          <div className="contactarea">
            <h5><strong>Wes Jones</strong></h5><br />
            <div className="contacts">
              <a href="mailto:wes@jonesco.com"><i className="fa fa-envelope" aria-hidden="true"></i>wes@jonesco.com</a><p></p>
              <a href="tel:5129448513"><i className="fa fa-phone-square" aria-hidden="true"></i>512-944-8513</a><p></p>
              <a href="https://www.linkedin.com/in/wes-jones-a0914312/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</a><p></p>
              <a href="/images/Wes_Jones_Resume.pdf" download><i className="fa fa-cloud-download" aria-hidden="true"></i>Download resumé</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
