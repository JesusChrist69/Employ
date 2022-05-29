import React, {useEffect, useState} from "react";
import Background from "./Components/images/BackgroundImage.png";
import SearchBar from "./Components/SearchBar.js";
import { Link } from "react-router-dom";
import Abouts from "./Components/images/about.png";
import Contacts from "./Components/images/contact.png";
import Local from "./Components/images/local.png";
import Mode from "./Components/Mode.tsx";
import {getJobs} from "./database/db_connection";

function Home() {
  return ( 
    <header>
      <div className="size">  
      <div className="container"></div>
          <div className="login">
            <Link to="/login">LOGIN</Link>
          </div>
      <div>
        <div className="rect">
          <div className="about">
            <Link to="/about"><img className="abt" src={Abouts} alt="about"></img></Link>
          </div>
          <div className="contact">
            <Link to="/contact"><img className="abt" src={Contacts} alt="contact"></img></Link>
          </div>
          <div className="local">
            <Link to="/locality"><img className="abt" src={Local} alt="contact"></img></Link>
          </div>
          <div className="mode">
          <Mode/>
          </div>
        </div>
        <img className="backimg" src={Background} alt="background"/>
        <div className="centered">JOBSIDE</div>
        <p className="cont">The right job for you</p>
        <div className="bar">
          <SearchBar 
              placeholder="choose a job"
              data={infodata}
          />
        </div>                                                                
      </div>
      <div className="rctngl"></div> 
      </div>    
    </header>
  );
  }
export default Home;

  // const jobs = {
  //       title: "Shop Assistant",
  //       link: "Shopper\n"
  //     },
  //     {
  //       title: "Salesman",
  //       link: "Salesman\n"
  //     },
  //     {
  //       title: "Builder",
  //       link: "Builder\n"
  //     },
  //     {
  //       title: "Assistant",
  //       link: "Assistant\n"
  //     },
  //     {
  //       title: "Busdriver",
  //       link: "Busdriver\n"
  //     }]

  const infodata = getJobs();

function ScreenSize() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  return (
    <div>
      <p>Width: <strong>{windowDimenion.winWidth}</strong></p>
      <p>Height: <strong>{windowDimenion.winHeight}</strong></p>
    </div>
  )
}