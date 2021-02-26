import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='Main'>
        <div className='Navbar'>
          <div className='Navbar-icon'>
            <a href='https://www.linkedin.com/in/aaron-clare-0a1b38156/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                fill='currentColor'
                class='bi bi-linkedin'
                viewBox='0 0 16 16'>
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>
          </div>
          <div>
            <ul>
              <li>Projects</li>
              <li>About Me</li>
              <li>Resume</li>
            </ul>
          </div>
        </div>
        <div className='Grid-container'>
          <div className='Project-One'>
            <div className='wrapper'>
              <h2>Ecomm</h2>
              <h5>Built with the MERN stack</h5>
            </div>
          </div>
          <div className='Project-Two'>
            <div className='wrapper'>
              <div>
                <div>My Activity</div>
                <img
                  src='http://ghchart.rshah.org/aaronclare3'
                  alt="Aaron's Github chart"
                />
              </div>
            </div>
          </div>
          <div className='Project-Three'>
            <div className='wrapper'>
              <h2>Color Pallete Picker</h2>
              <h5>React/Apollo/GraphQL</h5>
            </div>
          </div>
          <div className='Project-Four'>
            <div className='wrapper'>
              <h2>Issue Tracker</h2>
              <h5>MERN Stack</h5>
            </div>
          </div>
          <div className='Project-Five'>
            <div className='wrapper'>
              <h2>Clare Accounting Group</h2>
              <h5>HTML/CSS/jQuery/Vanilla JS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
