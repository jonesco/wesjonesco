import React from 'react';
import Header from '../components/Header';
import NextCaseStudy from '../components/NextCaseStudy';

function MagicStaff() {
  return (
    <div className="grid-container">
      <Header showBackButton={true} />

      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h5 id="rcorners1">Case Study #5487</h5>
          <h1><strong>MagicStaff POC</strong></h1>
        </div>
      </div>

      <div>
        <h4>
          <img className="floaterleft" src="/images/work/mscap.png" alt="mscap" style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', borderRadius: '10px', width: '60px', height: '60px', marginRight: '16px', marginTop: '8px' }} />
          Built in just one month as a proof of concept, MagicStaff is a developer staffing solution designed for global teams. It uses Google OR Tools under the hood and connects seamlessly with third-party frameworks, making it both efficient and easy to use. The platform helps teams handle complex staffing needs worldwide by generating detailed, weighted results that account for multiple factors. Its flexibility allows it to adapt to the constantly changing demands of distributed teams, showing how quickly and effectively thoughtful design can solve challenges in global team management.
        </h4>

        <hr />

        <div className="grid-x grid-padding-x">
          <div className="large-6 cell">
            <h5><strong>Challenges to solve:</strong></h5>
            <ul className="a">
              <li className="special-item">Create a simple interface for a potentially complex scenarios.</li>
              <li className="special-item">Leverage the capabilities of an existing platform and minimize the need for new components and development</li>
              <li className="special-item">Allow for nuance and discretion based on the user's preferences and staffing variables</li>
            </ul>
          </div>

          <div className="large-6 cell">
            <h5><strong>My role:</strong></h5>
            <ul className="a">
              <li className="special-item">Interview users and synthesize user stories</li>
              <li className="special-item">Ideate solutions and create pixel-perfect prototypes</li>
              <li className="special-item">Conduct user testing and demonstrate the solution</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="grid-x grid-padding-x">
          <div className="large-12 cell" style={{ marginBottom: '0px' }}>
            <img src="/images/work/ms0.png" alt="home" />
          </div>
        </div>

        <hr />

        {/* large */}
        <div className="grid-x grid-margin-x show-for-large">
          {/* First Column */}
          <div className="cell large-4">
            {/* First Row in the First Column - Text */}
            <div className="grid-y">
              <div className="cell">
                <h3><strong>Balancing requirements with flexibility</strong></h3>
                <p>Powered by Google OR-Tools, our staffing solution harnesses this advanced suite's optimization capabilities. Known for tackling complex problems in routing, scheduling, and logistics, it's perfect for creating more than just rigid data points. It provides a nuanced view of workplace dynamics, considering the intricacies of fluctuating workloads, varying skill levels, and personal goals. Our system is thoughtfully crafted to balance these elements, ensuring adaptability and responsiveness. It's designed to cater effectively to both standard scenarios and unique edge cases, making it a robust tool for dynamic staffing solutions.</p>
              </div>

              {/* Second Row in the First Column - Image */}
              <div className="cell">
                <img src="/images/work/msmap.png" style={{ marginRight: '24px', padding: '24px' }} alt="Image Description" />
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="cell large-8">
            {/* Image in the Second Column */}
            <img src="/images/work/ms5.png" alt="Other Image Description" />
            <div>
              <p className="largehint" style={{ marginTop: '16px' }}>▲ Each project starts by specifying the work's duration, identifying precise staffing needs, and determining the necessary skills to successfully complete the project.</p>
            </div>
          </div>
        </div>
        {/* end large */}

        {/* for small */}
        <div className="grid-x grid-margin-x hide-for-large">
          <div className="medium-5 small-12 cell">
            <h3><strong>Requirements and Flexibility</strong></h3>
            <p>Powered by Google OR-Tools, our staffing solution harnesses this advanced suite's optimization capabilities. Known for tackling complex problems in routing, scheduling, and logistics, it's perfect for creating more than just rigid data points. It provides a nuanced view of workplace dynamics, considering the intricacies of fluctuating workloads, varying skill levels, and personal goals. Our system is thoughtfully crafted to balance these elements, ensuring adaptability and responsiveness. It's designed to cater effectively to both standard scenarios and unique edge cases, making it a robust tool for dynamic staffing solutions.</p>
          </div>

          <div className="medium-7 small-12 cell">
            <img src="/images/work/msmap.png" alt="mmmap" style={{ padding: '24px' }} />
          </div>

          <div className="cell small-12">
            <hr />
          </div>

          <div className="cell small-12">
            <div style={{ margin: '0px' }}>
              <img src="/images/work/ms5.png" alt="Other Image Description" />
            </div>
            <div>
              <p className="largehint" style={{ marginTop: '16px' }}>▲ Google OR Tools provides a collection of tools for optimization, encompassing operations research and mathematical programming techniques.</p>
            </div>
          </div>
        </div>
        {/* end small */}

        <hr />

        {/* grid of four screens */}
        <div className="grid-x grid-margin-x">
          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <img src="/images/work/ms1.png" alt="Image 1" />
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <p className="largehint" style={{ marginTop: '16px' }}>◀ A collection of quick presets is available to provide immediate insight into the employee's current challenges. These presets, designed to adapt over time, offer a swift method to capture the preferences and aspirations of the workforce. While these inputs may not always be directly accommodated, they are consistently considered in the decision-making process.</p>
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <img src="/images/work/ms3.png" alt="Image 1" />
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <p className="largehint" style={{ marginTop: '16px' }}>◀ Every employee profile features a unique 'skill tree', which neatly maps out their areas of expertise alongside skills they are actively working to improve. This concept of 'upskilling' not only fosters personal growth for the employee but also adds versatility to the staffing options.</p>
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <img src="/images/work/ms4.png" alt="Image 1" />
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <p className="largehint" style={{ marginTop: '16px' }}>◀ Administrators have the capability to add notes and comments to each employee's profile, offering a comprehensive view of the employee's current status in relation to ongoing projects and staffing requirements.</p>
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <img src="/images/work/ms7.png" alt="Image 1" />
            </div>
          </div>

          <div className="large-3 medium-6 small-6 cell" style={{ marginBottom: '32px' }}>
            <div>
              <p className="largehint" style={{ marginTop: '16px' }}>◀ Along with the tailored results, you'll get a friendly and detailed calendar view. This shows how different choices can influence staffing and projects company-wide. It even highlights hours that are over or under your planned allocations, making it super easy to see the bigger picture.</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="grid-x grid-padding-x">
          <div className="large-6 medium-12 small-12 cell" id="spaceabove">
            <h3><strong>Where the magic happens</strong></h3>
            <p>Upon entering all the essential details, including specifics about the workforce, our tool works its magic. It generates a list of assignment options, each with a scored ranking. These scores aren't just numbers; they're insights into how well each option fits your needs, explaining why they rank as they do. This feature allows you to evaluate the suitability of each assignment based on schedule, skill requirements, and worker preferences. It's a thoughtful approach that guarantees each job assignment transcends mere suitability on paper and becomes a pragmatic choice tailored to the specific demands of the project and the personnel involved.</p>
          </div>

          <div className="large-6 medium-12 small-12 cell" id="">
            <img src="/images/work/ms6.png" alt="Magic Staff" />
          </div>
        </div>

        <hr />

        <NextCaseStudy title="CPay Sales Assistant" link="/cpay" />
      </div>
    </div>
  );
}

export default MagicStaff;

