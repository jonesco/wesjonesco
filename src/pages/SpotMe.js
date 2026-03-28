import React from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function SpotMe() {
  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #1259</h5>
          <h1><strong>SpotMe Lending Concept</strong></h1>
        </div>

        <div className="large-8 medium-6 cell">
          <h4>
            <p>Netspend partnered with <a href="https://www.ideo.com">IDEO</a> to evaluate our users and better identify opportunities for next-generation Netspend products and services. Through a series of ethnographic research, at-home interviews, and design thinking workshops with real Netspend users from across the country, we developed portraits of key user archetypes and personas. We heard from our users that loaning money to friends and family was a key use case going unaddressed.</p>
            <p>Our solution to this need was a system that could allow customers to loan money to friends and family using their Netspend account. This feature could allow the user to create more interactions with family and friends using the app as well.</p>
            <p>The research showed the more connections and ties the user had within the app (ex. Sending money to a friend or paying bills), the more likely they were to remain a long time user. We modeled our approach after the <a href="https://www.gv.com/sprint/">Google Ventures Design Sprint methodology</a>, and ultimately the goal was to evaluate the idea before launch.</p>
          </h4>
        </div>

        <div className="large-4 cell medium-6" id="">
          <img src="/images/work/sp-a.png" alt="SpotMe" />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 cell">
          <h5><strong>Challenges to solve:</strong></h5>
          <ul className="a">
            <li className="special-item">Concept and evaluate how the feature would work</li>
            <li className="special-item">Create a social component for the user to share with other users</li>
            <li className="special-item">Develop a testing plan in order to determine viability</li>
            <li className="special-item">Assess the validity and usefulness of the idea with users</li>
          </ul>
        </div>

        <div className="large-6 cell">
          <h5><strong>My role:</strong></h5>
          <ul className="a">
            <li className="special-item">Primary Netspend design liaison and lead</li>
            <li className="special-item">Collaborate with stakeholders to brainstorm ideas</li>
            <li className="special-item">Lead direction of UX and UI</li>
            <li className="special-item">Design and write testing materials</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>High-Speed Concepting</strong></h2>
          <p>First, the team collaborated with representatives from product, customer service, and business in a three-day design sprint to quickly come up with the system — essentially what loaning money and paying it back would look like. Then, we created a rough outline of the process. Next I had to think through the steps to bring it to life. It wasn't necessary to develop all the possible green, yellow or red paths, but we couldn't ignore necessary requirements that would be needed.</p>
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-1.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-2.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-3.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-4.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-5.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-6.png" alt="SpotMe screen" />
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell" style={{ marginBottom: '20px' }}>
          <h2><strong>Testing the ideas</strong></h2>
          <p>Instead of creating an actual user flow, we decided to test the idea first. Using the rough screens developed during the design sprint, I created an App Store-like experience that explained the idea, which we used to pressure test the idea among users.</p>
          <p>The results of the test determined that users did not find this product useful. We heard from multiple users that, "If they want to ask for money, I'd rather it be just between us." That said, the "failure" was truly a win on our part. Through brainstorming, concepting, and testing, the organization determined it would be best to not move forward with this concept. In the end, it saved the company thousands of dollars.</p>
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-b.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-c.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-d.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-e.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" style={{ marginBottom: '20px' }}>
          <img src="/images/work/sp-f.png" alt="SpotMe screen" />
        </div>

        <div className="large-2 medium-2 small-4 cell" id="">
          <img src="/images/work/sp-g.png" alt="SpotMe screen" />
        </div>
      </div>

      <hr />

      <NextCaseStudy title="Custom Debit Card Creator" link="/custom_card_creator" />
    </div>
  );
}

export default SpotMe;

