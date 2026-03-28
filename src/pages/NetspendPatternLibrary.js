import React from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function NetspendPatternLibrary() {
  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #4324</h5>
          <h1><strong>Netspend Pattern Library</strong></h1>
        </div>

        <div className="large-12 cell">
          <h4>During my time at Netspend — a financial company that provides prepaid debit, banking services, and paycard solutions to millions of customers — we began to see a problem with consistency in the user experience. Through internal evaluation and user research, it was clear the existing patterns and components (primarily based on <a href="https://material.io/design">Google's Material Design</a>), needed to be standardized and documented.</h4>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 cell">
          <h5><strong>Challenges to solve:</strong></h5>
          <ul className="a">
            <li className="special-item">Ensure the use of a consistent user interface</li>
            <li className="special-item">Facilitate reusability</li>
            <li className="special-item">Streamline the effort involved in updating and maintaining assets</li>
            <li className="special-item">Refine current patterns and identify any gaps</li>
            <li className="special-item">Identify redundant patterns</li>
            <li className="special-item">Remove the friction of sharing with third parties</li>
          </ul>
        </div>

        <div className="large-6 cell">
          <h5><strong>My role:</strong></h5>
          <ul className="a">
            <li className="special-item">Lead the design team in conceptualizing and defining content</li>
            <li className="special-item">Direct and approve final design</li>
            <li className="special-item">Collaborate with developers to answer their questions and document their needs</li>
            <li className="special-item">Present work to team members and other stakeholders</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="large-3 cell">
        <h2><strong>Figma first</strong></h2>
        <p>The final product was built in Figma, not an external website. This made it possible for the design team to use the inherent UI to organize and view the Pattern Library. It also gave us the ability to easily share with developers outside of the organization, as well as link to example prototypes, allowing the viewer to see the patterns in context. Updates to the Pattern Library were instantly cascaded down to the documentation level as well as all projects utilizing the library of components.</p>
        <p>I recommended creating a Pattern Library directly in Figma and saw it through from ideation to completion.</p>
      </div>

      <div className="large-9 cell">
        <img src="/images/work/NSPL1.png" alt="Netspend Pattern Library" />
      </div>

      <hr />

      <div className="grid-x grid-padding-x" style={{ backgroundColor: '#cccccc', marginLeft: '0px', paddingLeft: '10px', marginRight: '0px', paddingRight: '10px', paddingBottom: '25px', paddingTop: '20px', borderRadius: '10px' }}>
        <div className="large-12 cell" id="">
          <p><i>▼ Examples of component pages</i></p>
        </div>

        <div className="large-3 medium-3 small-3 cell" id="">
          <img src="/images/work/Illustrations.png" alt="Illustrations" width=" " height=" " />
        </div>

        <div className="large-3 medium-3 small-3 cell" id="">
          <img src="/images/work/Interrupt.png" alt="Interrupt" width=" " height=" " />
        </div>

        <div className="large-3 medium-3 small-3 cell" id="">
          <img src="/images/work/Layout.png" alt="Layout" width=" " height=" " />
        </div>

        <div className="large-3 medium-3 small-3 cell" id="">
          <img src="/images/work/Notifications.png" alt="Notifications" width=" " height=" " />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h2><strong>How the pattern groupings are organized</strong></h2>
          <p>The product team started by evaluating many existing Pattern Libraries. We wanted the tool to not just be a collection of user interface elements, but a way to learn and communicate how the design patterns are applied in real life situations. Fintech companies are heavily regulated so it is important to communicate the reasoning to the business and also share with the rest of the company. Ultimately we built a system that was based on <a href="https://medium.com/ge-design/ges-predix-design-system-8236d47b0891">GE's Predix Design System</a>, which was developed as they worked with the <a href="https://atomicdesign.bradfrost.com/chapter-2/">Atomic Design Methodology</a>.</p>
        </div>

        <div className="large-2 medium-2 small-1 cell" id="plgroups"></div>
        <div className="large-10 medium-10 small-11 cell" style={{ marginTop: '20px' }}>
          <p><strong>Principles</strong><br />as the name implies, are the guiding principles that designers should reference and respect when creating new design patterns.<br /><i className="hint">Ex. Colors, Messaging, Transitions, Typography</i></p>
        </div>

        <div className="large-2 medium-2 small-1 cell" id="plgroups"></div>
        <div className="large-10 medium-10 small-11 cell">
          <p><strong>Basics</strong><br />contain the design patterns that fall on the simple side of the spectrum.<br /><i className="hint">Ex. Buttons, Icons, Text Fields, Selection Controls</i></p>
        </div>

        <div className="large-2 medium-2 small-1 cell" id="plgroups"></div>
        <div className="large-10 medium-10 small-11 cell">
          <p><strong>Components</strong><br />contain the user interface patterns that fall on the moderately complex side of the spectrum.<br /><i className="hint">Ex. Alerts, App Bar, Lists, Menus</i></p>
        </div>

        <div className="large-2 medium-2 small-1 cell" id="plgroups"></div>
        <div className="large-10 medium-10 small-11 cell cell">
          <p><strong>Layouts</strong><br />are the documentation of a section or page<br /><i className="hint">Ex. Empty States, Errors, Interrupts, Card Selector</i></p>
        </div>

        <div className="llarge-2 medium-2 small-1 cell" id="plgroups"></div>
        <div className="large-10 medium-10 small-11 cell">
          <p><strong>Features</strong><br />are the flows/systems that, when working together, allow users to accomplish a task or solve a problem.<br /><i className="hint">Ex. Home Dashboard, Spend Tracker, Notifications, Disclosures</i></p>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 medium-6 small-12 cell" id="">
          <img src="/images/work/netspend_sticker_sheet.png" alt="Netspend Sticker Sheet Cover" width=" " height=" " />
        </div>

        <div className="large-6 medium-6 small-12 cell" id="">
          <h2><strong>The Sticker Sheet</strong></h2>
          <p>I personally engineered and developed the Netspend Sticker Sheet to serve as a component library for the entire team. The component library creates the management system that powers the pattern library. This made for easy updating and iteration – while keeping designers, developers and product teams on the same page.</p>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" id="spaceabove">
          <h2><strong>A common set of tools</strong></h2>
          <p>Another problem to solve in the Pattern Library was consistency in documentation. We needed to create a uniform set of tools that allowed us to quickly mark up and explain how patterns were constructed and performed. Having these redline components quick at hand made the team's tasks more consistent and efficient.</p>
        </div>

        <div className="large-12 cell" id="spacebelow">
          <img src="/images/work/PL_tools.png" alt="Netspend Sticker Sheet Cover" width=" " height=" " />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h2><strong>Key takeaway</strong></h2>
          <p>Developing and maintaining both the Pattern Library and Sticker Sheet was a game changer for productivity and consistency for the product design team. With these parts and pieces documented, it gave designers more time to zero in on the problem, instead of creating the interface. The tool empowered the team to test more, iterate, and focus on the user experience. It also made communicating with the product and development team so much easier.</p>
          <p>Netspend never had a comprehensive pattern library and set of components. When I came onboard, I was able to utilize my past experiences in developing design systems to help create a system to empower designers and get things done quicker and more consistently.</p>
        </div>
      </div>

      <hr />

      <NextCaseStudy title="Custom Debit Card Creator" link="/custom_card_creator" />
    </div>
  );
}

export default NetspendPatternLibrary;

