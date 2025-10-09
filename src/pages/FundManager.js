import React from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function FundManager() {
  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #5487</h5>
          <h1><strong>Fund Manager Workspace</strong></h1>
        </div>
        <div className="large-12 cell">
          <h4>I modernized and united a disparate group of applications into a unified platform for one of the world's top investment banks that manages over $11 trillion in assets. As the sole product designer, I collaborated with the business team and subject matter experts to redesign features, enhancing efficiency in cash allocation, asset rebalancing, and trade recommendations at an Agile pace.</h4>
        </div>
      </div>

      <hr />

      <div className="grid-x grid-padding-x">
        <div className="large-6 cell">
          <h5><strong>Challenges to solve:</strong></h5>
          <ul className="a">
            <li className="special-item">Allow for faster completion of tasks by creating more efficient workflows, reducing manual and repetitive tasks</li>
            <li className="special-item">Increase accuracy and outcomes with smarter, dynamic, and automated interfaces that can be customized to enhance user performance</li>
            <li className="special-item">Facilitate better collaboration with transparent communication between the system and teammates</li>
            <li className="special-item">Design more intuitive and easy-to-use software that combines business procedures across teams for clarity of responsibility and reduced duplication of work</li>
          </ul>
        </div>

        <div className="large-6 cell">
          <h5><strong>My role:</strong></h5>
          <ul className="a">
            <li className="special-item">Conduct weekly workshops with the business to gain an understanding of requirements and pain points</li>
            <li className="special-item">Develop low-fidelity sketches that evolve into polished prototypes for evaluating and testing solutions</li>
            <li className="special-item">Build a well-documented pattern library as the foundation for current and future iterations</li>
            <li className="special-item">Present to the client and iterate based on business & user feedback</li>
            <li className="special-item">Create production-ready files for development to adhere to the Agile schedule</li>
          </ul>
        </div>
      </div>

      <hr />

      <div>
        <div className="large-12 cell" style={{ marginBottom: '0px' }}>
          <img src="/images/work/f0.png" alt="home" />
          <p className="largehint" style={{ marginTop: '16px' }}>▲ A newly tailored dashboard view integrates data from four diverse systems, automating previously manual and time-consuming tasks. This refinement ensures a clearer depiction of the system's status while also facilitating the efficient assignment and audit of tasks within the platform.</p>
        </div>

        <hr />

        <div className="large-12 cell">
          <h2><strong>Building Bullet-proof Features</strong></h2>
          <p>I designed over a dozen robust features tailored to a distinct and specialized set of workflows, employing a user-centric approach. Streamlining the interface and refining the established business processes, I crafted an environment that empowers the user to achieve their objectives with precision and efficiency. This involved reducing clicks, minimizing repetitive actions, and providing dynamic feedback, ensuring users have quick access to actionable data. The result is a user experience that is not only intuitive but optimally efficient.</p>
        </div>

        <hr />

        {/* grid of four screens */}
        <div className="grid-x grid-margin-x">
          <div className="large-6 medium-6 small-12 cell" style={{ marginBottom: '32px' }}>
            <div>
              <img src="/images/work/f2.png" alt="Image 1" className="shadowed-div" />
              <p className="largehint" style={{ marginTop: '16px' }}>▲ Complex workflows were transformed into user-friendly interfaces, promoting swift and precise interactions. The designs efficiently accommodate multi-step processes with clear indications of progress and status.</p>
            </div>
          </div>
          <div className="large-6 medium-6 small-12 cell">
            <div>
              <img src="/images/work/f3.png" alt="Image 1" className="shadowed-div" />
              <p className="largehint" style={{ marginTop: '16px' }}>▲ Simplified yet powerful globally applied patterns not only equip users with the tools to manipulate large amounts of data but also ensure that elements are intuitively placed where they are both anticipated and expected.</p>
            </div>
          </div>
          <div className="large-6 medium-6 small-12 cell">
            <div>
              <img src="/images/work/f4.png" alt="Image 2" className="shadowed-div" />
              <p className="largehint" style={{ marginTop: '16px' }}>▲ Key concepts, such as fetching data, saving time and preventing manual errors. Dynamic warnings appear and expected fields are highlighted to inform the user.</p>
            </div>
          </div>
          <div className="large-6 medium-6 small-12 cell">
            <div>
              <img src="/images/work/f5.png" alt="Image 2" className="shadowed-div" />
              <p className="largehint" style={{ marginTop: '16px' }}>▲ The application's design prioritizes accuracy and efficiency, crucial for business success. By promoting transparency and communication, especially in vital approval processes, it facilitates collaboration across the entire team.</p>
            </div>
          </div>
        </div>


        <hr />

        <NextCaseStudy title="Netspend Pattern Library" link="/ns_pattern_library" />
      </div>
    </div>
  );
}

export default FundManager;

