import React from "react";
import "./Resume.css";
import resume from "../images/AaronClareResume.pdf";
import { FcDownload } from "react-icons/fc";

const Resume = () => {
  return (
    <div className='Resume'>
      {/* <div className='Resume-Top'>
        <div className='Resume-TopLeft'>
          <div className='Resume-TopExperience'>
            <div style={{ fontSize: "20px" }}>
              WORK EXPERIENCE
              <hr />
            </div>
            <div className='Resume-TopExperienceRole'>
              <h4>Mindtree (Contracted By Microsoft)</h4>
              <p style={{ fontWeight: "bold" }}>
                <i>Microsoft Azure Cloud Developer Support</i>
              </p>
              <p>
                {" "}
                - Communicating with software developers and engineers needing
                assistance with bugs/errors/code configuration/network related
                issues etc
              </p>
              <p>
                - Troubleshooting includes providing fixes, code review, backend
                metric analysis, recommending best practices
              </p>
              <p>
                - Consistently surpasses managerial goal metrics, including all
                5 star customer satisfaction last 5 months
              </p>
              <p>
                - Two time award winner of Mindtree Service Bus "Customer
                Support Engineer of the Month"
              </p>
              <p>- 9 months full time remote experience</p>
              <p>
                - Areas of Azure expertise include Service Bus, Event Hubs,
                Notification Hubs, and Event Grid
              </p>
            </div>
            <div className='Resume-TopExperienceRole'>
              <h4>Freelance</h4>
              <p style={{ fontWeight: "bold" }}>
                <i>Web Developer</i>
              </p>
              <p>
                - Fully responsive, client-facing website designed and
                implemented from scratch with mobile first design principles.
                HTML5, CSS3, Bootstrap grid, javascript, jQuery. Deployed using
                Microsoft Azure App Service.
              </p>
            </div>
          </div>
        </div>
        <div className='Resume-TopRight'>
          <div className='Resume-TopProjects'>
            <div style={{ fontSize: "20px" }}>
              PROJECTS
              <hr />
            </div>
            <div className='Resume-TopProject'>
              <h4>Issue Tracker</h4>
              <p style={{ fontWeight: "bold" }}>
                <i>React, Redux, Node, Express, MongoDB, JWT</i>
              </p>
              <p>
                - Bug tracking web app that I built and use to track my project
                bugs/to-do’s. Features include login/registration (using JSON
                Web Tokens + cookies), and form validation. Modern react hooks,
                Express/Node and MongoDB
              </p>
            </div>
            <div className='Resume-TopProject'>
              <h4>Ecomm</h4>
              <p style={{ fontWeight: "bold" }}>
                <i>React, Redux, Node, Express, MongoDB</i>
              </p>
              <p>
                - Maintained git workflow using branches for new features with
                clean commit messages and regular pushes. Backend served by
                Node/Express and data stored in MongoDB cluster.
              </p>
              <p>
                - E-Comm is created with mobile-first design principles using
                CSS Grid. React functional components are used throughout with
                modern hooks such as useState, useEffect, useDispatch, and
                useSelector
              </p>
              <p>
                - Features include sorting filters, search as you type, and
                caching for enhanced UX and performance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='Resume-Bottom'></div> */}

      <div className='Resume-Wrapper'>
        <a href={resume} download>
          <FcDownload className='download' />
        </a>
      </div>
    </div>
  );
};

export default Resume;
