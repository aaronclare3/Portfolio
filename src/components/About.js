import React from "react";
import "./About.css";
import bioImg from "../images/github-profilepic.jpeg";
import { DiNodejs, DiMongodb, DiCss3 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import Tooltip from "@material-ui/core/Tooltip";

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
            <div className='About-LeftHeaderTitle'>Software Engineer</div>
          </div>
          <div className='About-LeftBottom'>
            <div className='About-LeftBottomInfo'>
              <div className='About-LeftBottomContact'>Get In Touch</div>
              <div>aaronclare88@gmail.com</div>
              <div>253-314-2238</div>
            </div>
          </div>
        </div>
        <div className='About-Main'>
          <div className='About-MainIAm'>
            <div className='AboutMainIAmHeader'>I am...</div>
            <div className='AboutMainIAmBody'>
              a hard working and dedicated software engineer who is constantly
              striving to improve. I try to get 1% better each day, pushing the
              boundaries of my knowledge. I learn best by doing, and am
              constantly working on a personal project to challenge and
              re-enforce my learning. In addition to learning by doing, I enjoy
              browsing CSS Tricks, r/ReactJS, r/learnprogramming, r/Frontend
              (reddit subs), and working on solving Leetcode problems.
            </div>
          </div>
          <div className='About-MainILove'>
            <div className='AboutMainILoveHeader'>I love...</div>
            <div className='AboutMainILoveBody'>
              my wife Josilyn, and 3 month old son Owen. I love my family,
              friends, and being outdoors. I love finally fixing that bug that
              you couldn't stop thinking about. I love finding a new VS Code
              keyboard shortcut. I love all sports, but especially watching
              football and playing golf. I love dominating my multiple fantasy
              football leagues every year by out-researching everyone and
              digging into the analytics. I love learning new technologies, and
              setting new goals for myself. I love travelling to new places, and
              experiencing new cultures. I love learning new things and meeting
              new people.
            </div>
          </div>
          <div className='About-MainILike'>
            <div className='AboutMainILikeHeader'>
              Technologies I like using...
            </div>
            <div className='AboutMainILikeBody1'>
              <Tooltip title='React' arrow>
                <div className='grid1 grid'>
                  <FaReact className='icon1' style={{ color: "#61DBFB" }} />
                </div>
              </Tooltip>
              <Tooltip title='Node' arrow>
                <div className='grid2 grid'>
                  <DiNodejs className='icon1' />
                </div>
              </Tooltip>

              <Tooltip title='MongoDB' arrow>
                <div className='grid3 grid'>
                  <DiMongodb className='icon1' style={{ color: "#13AA53" }} />
                </div>
              </Tooltip>

              <Tooltip title='GraphQL' arrow>
                <div className='grid4 grid'>
                  <GrGraphQl className='icon1' style={{ color: "#E00298" }} />
                </div>
              </Tooltip>
            </div>
            <div className='AboutMainILikeBody2'>
              <Tooltip title='Redux' arrow placement='top'>
                <div className='grid5 grid'>
                  <SiRedux className='icon2' style={{ color: "#774ABD" }} />
                </div>
              </Tooltip>

              <Tooltip title='Bootstrap' arrow placement='top'>
                <div className='grid6 grid'>
                  <BsBootstrap className='icon2' style={{ color: "#7953B2" }} />
                </div>
              </Tooltip>

              <Tooltip title='CSS3' arrow placement='top'>
                <div className='grid7 grid'>
                  <DiCss3 className='icon2' style={{ color: "#274DE4" }} />
                </div>
              </Tooltip>

              <Tooltip title='HTML5' arrow placement='top'>
                <div className='grid8 grid'>
                  <AiFillHtml5 className='icon2' style={{ color: "#DD4B26" }} />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
