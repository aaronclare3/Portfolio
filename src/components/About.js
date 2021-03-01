import React from "react";
import "./About.css";
import bioImg from "../images/github-profilepic.jpeg";

const About = () => {
  return (
    <>
      <div className='About'>
        <div className='About-Left'>
          <div className='About-LeftHeader'>
            <div className='About-LeftHeaderImage'>
              <img src={bioImg} alt='' />
            </div>
            <div className='About-LeftHeaderName'>Aaron Clare</div>
            <div className='About-LeftHeaderTitle'>
              Full Stack Software Engineer
            </div>
          </div>
          <div className='About-LeftBottom'>
            <div className='About-LeftBottomContact'>Get In Touch</div>
            <div className='About-LeftBottomInfo'>
              <div>aaronclare88@gmail.com</div>
              <div>253-314-2238</div>
            </div>
          </div>
        </div>
        <div className='About-Main'></div>
      </div>
    </>
  );
};

export default About;
