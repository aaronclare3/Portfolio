import React from "react";
import "./App.css";
import { IoRocketSharp } from "react-icons/io5";

const Projects = () => {
  return (
    <>
      <div className='project Project-One'>
        <div className='wrapper'>
          <h2>Clare Accounting</h2>
          <h5>HTML/CSS/jQuery/JS</h5>
          <a
            className='deploy'
            href='http://clareaccountinggroup.com/'
            target='_blank'
            rel='noreferrer'>
            <IoRocketSharp />
          </a>
          <a
            href='https://github.com/aaronclare3/aaronclare3.github.io'
            target='_blank'
            rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              className='bi bi-github'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
        </div>
      </div>
      <div className='project Project-Two'>
        <div className='wrapper'>
          <div>
            <div className='gitActivity'>Github Activity</div>
            <div>Always Improving</div>
            <img
              src='http://ghchart.rshah.org/aaronclare3'
              alt="Aaron's Github chart"
              target='_blank'
              rel='noreferrer'
            />
          </div>
        </div>
      </div>
      <div className='project Project-Three'>
        <div className='wrapper'>
          <h2>Color Pallete Picker</h2>
          <h5>React/Apollo/GraphQL</h5>
          <a
            className='deploy'
            href='https://fierce-beach-05292.herokuapp.com/'
            target='_blank'
            rel='noreferrer'>
            <IoRocketSharp />
          </a>
          <a
            href='https://www.github.com/aaronclare3/helpfulHumanChallenge'
            target='_blank'
            rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              className='bi bi-github'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
        </div>
      </div>
      <div className='project Project-Four'>
        <div className='wrapper'>
          <h2>Issue Tracker</h2>
          <h5>MERN Stack</h5>
          <a
            href='https://www.github.com/aaronclare3/issueTracker'
            target='_blank'
            rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              className='bi bi-github'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
          {/* <a href='' target='_blank' rel='noreferrer'>
            <IoRocketSharp />
          </a> */}
        </div>
      </div>
      <div className='project Project-Five'>
        <div className='wrapper'>
          <h2>Ecomm</h2>
          <h5>Built with the MERN stack</h5>
          <a
            className='deploy'
            href='https://desolate-chamber-46400.herokuapp.com/'
            target='_blank'
            rel='noreferrer'>
            <IoRocketSharp />
          </a>
          <a
            href='https://www.github.com/aaronclare3/ecomm-react-redux'
            target='_blank'
            rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              className='bi bi-github'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
