import React, { useEffect } from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function CPay() {
  useEffect(() => {
    document.title = 'CPay Sales Assistant Design Sprint — Wes Jones, Lead Product Designer';
  }, []);

  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #2214</h5>
          <h1><strong>CPay Sales Assistant Workshop</strong></h1>
        </div>

        <div className="large-12 cell">
          <h4>After several successful design sprints conducted in-house, word got around and other companies within our corporate umbrella wanted to take advantage of my team's capabilities.</h4>
          <h4>We hosted a group of sales team members from Central Payment Corporation — a merchant account provider — for a four day sprint to understand how to help their team members with prospecting and maintaining clients.</h4>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 cell">
          <h5><strong>Challenges to solve:</strong></h5>
          <ul className="a">
            <li className="special-item">Discover what would be useful to the sales team and how to best implement it in a practical way</li>
            <li className="special-item">Organize the tools needed for the sales team members into one simple tool</li>
            <li className="special-item">Rapidly develop the ideas into something tangible for testing</li>
          </ul>
        </div>

        <div className="large-6 cell">
          <h5><strong>My role:</strong></h5>
          <ul className="a">
            <li className="special-item">Facilitate the design sprint with two other colleagues</li>
            <li className="special-item">Act as the design lead</li>
            <li className="special-item">Collaborate with stakeholders to brainstorm ideas</li>
            <li className="special-item">Lead direction of UX and UI</li>
            <li className="special-item">Design and develop a high-fidelity prototype for later testing</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x" style={{ paddingBottom: '20px' }}>
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>A stack of solutions</strong></h2>
          <p>Following the <a href="https://www.gv.com/sprint/">Google Ventures Design Sprint methodology</a>, we were able to sketch ideas that emphasized critical thinking over artistry. (I do think these are beautiful though.) We then critiqued each solution and decided which ideas had the best chance of achieving the goal of assisting the sales member's needs.</p>
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch1.jpg" alt="CPay sales assistant design sprint sketch — hand-drawn ideation from Google Ventures Design Sprint methodology" />
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch2.jpg" alt="CPay sales assistant design sprint sketch — solution concept for sales prospecting workflow" />
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch3.jpg" alt="CPay sales assistant design sprint sketch — solution concept for client management workflow" />
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch4.jpg" alt="CPay sales assistant design sprint sketch — solution concept evaluated for client value and feasibility" />
        </div>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="auto cell">
          <img src="/images/work/sketch5.jpg" alt="CPay sales assistant design sprint sketch — dashboard concept for sales team daily workflow" />
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch6.jpg" alt="CPay sales assistant design sprint sketch — feature concept for prospect lookup and account details" />
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch7.jpg" alt="CPay sales assistant design sprint sketch — concept for sales pipeline and deal tracking" />
        </div>

        <div className="auto cell">
          <img src="/images/work/sketch8.jpg" alt="CPay sales assistant design sprint sketch — winning concept selected for storyboarding and prototype development" />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x" style={{ paddingBottom: '20px' }}>
        <div className="large-4 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>Storyboard</strong></h2>
          <p>I led the group to create a single storyboard, weaving all the winning scenes from our sketches into a step-by-step plan for our prototype.</p>
        </div>

        <div className="large-8 cell">
          <img src="/images/work/storyboard.jpg" alt="CPay sales assistant storyboard — step-by-step plan weaving winning sprint sketches into a prototype blueprint, created during the 4-day design sprint" />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>Time to shine</strong></h2>
          <p>Next, my job was to take all the collaboration and ideas and make a polished prototype that the client could take back with them and test. Using <a href="https://ionic.io">Ionic Platform</a> resources, I was able to quickly put together a clickable prototype. We were able to review the final product with the team before they flew home.</p>
        </div>

        <div className="large-3 medium-3 small-6 cell" style={{ paddingBottom: '20px' }}>
          <img src="/images/work/cpay_proto1.png" alt="CPay Sales Assistant high-fidelity prototype — home dashboard screen built with Ionic Platform" />
        </div>

        <div className="large-3 medium-3 small-6 cell">
          <img src="/images/work/cpay_proto2.png" alt="CPay Sales Assistant high-fidelity prototype — prospect search and account lookup screen" />
        </div>

        <div className="large-3 medium-3 small-6 cell">
          <img src="/images/work/cpay_proto3.png" alt="CPay Sales Assistant high-fidelity prototype — client detail and account management screen" />
        </div>

        <div className="large-3 medium-3 small-6 cell">
          <img src="/images/work/cpay_proto4.png" alt="CPay Sales Assistant high-fidelity prototype — sales pipeline and deal tracking screen" />
        </div>
      </div>

      <hr />

      <NextCaseStudy title="Fund Manager Workspace" link="/fund-manager" />
    </div>
  );
}

export default CPay;

