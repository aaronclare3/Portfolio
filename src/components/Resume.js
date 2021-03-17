import React from "react";
import "./Resume.css";
import resume from "../images/AaronClareResume.pdf";
import { FcDownload } from "react-icons/fc";

const Resume = () => {
  return (
    <div className='Resume'>
      <div className='Resume-Wrapper'>
        <a href={resume} download>
          <FcDownload className='download' />
        </a>
      </div>
    </div>
  );
};

export default Resume;
