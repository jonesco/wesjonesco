import React from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function CustomCardCreator() {
  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #5214</h5>
          <h1><strong>Custom Debit Card Creator</strong></h1>
        </div>

        <div className="large-8 cell">
          <h4>
            <p>I had the privilege of visiting the Visa Innovation Studio in New York City. Among many takeaways from the experience, I came to understand the importance of personalization when it comes to connecting with customers.</p>
            <p>I came home excited to brainstorm ideas for the company. I just kept thinking, "What's an easy and fun way to let users customize their card art?" So I started stewing on it and before I knew it, I had some tangible results.</p>
          </h4>
        </div>

        <div className="large-4 cell">
          <span><img src="/images/work/cc5.jpg" style={{ borderRadius: '10px' }} alt="Custom Card" /></span>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-auto cell">
          <h5><strong>Challenges to solve:</strong></h5>
          <ul className="a">
            <li className="special-item">Differentiate our product in a crowded field of competitors</li>
            <li className="special-item">Engage users at acquisition to help customer retention</li>
            <li className="special-item">Create a system that is easy to manage for the business and low weight for development</li>
          </ul>
        </div>

        <div className="large-6 cell">
          <h5><strong>My role:</strong></h5>
          <ul className="a">
            <li className="special-item">Brainstorm the idea</li>
            <li className="special-item">Concept experience</li>
            <li className="special-item">Design the user interface</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 cell" id="spaceabove">
          <h2><strong>Keep it simple</strong></h2>
          <p>I started by creating a UI that borrowed heavily from popular social apps, since users are already fluent in these interfaces. Then, I chose imagery I knew the user could relate to — emojis.</p>
          <p>I structured it so that the user could simply select a card background plus an emoji (or several), then pinch, zoom and rotate the emojis to create customized card art.</p>
          <p>By creating an easy way for customers to be creative using emojis vs camera access or upload, the idea navigates around both privacy and business risks. Plus, by using artwork that lives in the public domain, it completely eliminates costs for any assets.</p>
          <p>So, by encouraging users to whip out their card more frequently and show it off, this simple customized card would be more than just a shiny new interactive piece — it's a direct benefit to the bottom line. Research shows that if Netspend can keep a customer active for two months they will remain a customer for at least a year.</p>
          <p>Besides, this would be way more fun than a flat, black rectangle. 😎</p>
        </div>

        <div className="large-6 cell" id="">
          <img src="/images/work/cc1.png" alt="" width=" " height=" " />
        </div>
      </div>

      <hr />

      <div className="large-12 cell" id="">
        <p><i>👇Examples of possible cards</i></p>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc2.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc3.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc4.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc5.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc6.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc7.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc8.png" alt="Card example" /></div>
        <div className="cell medium-3 large-3 small-4"><img src="/images/work/cc9.png" alt="Card example" /></div>
        <div className="show-for-small-only cell medium-3 large-3 small-4">
          <span className="show-for-small-only"><img src="/images/work/cc10.png" alt="Card example" /></span>
        </div>
      </div>

      <hr />

      <NextCaseStudy title="Wayblazer Search Platform" link="/wayblazer" />
    </div>
  );
}

export default CustomCardCreator;

