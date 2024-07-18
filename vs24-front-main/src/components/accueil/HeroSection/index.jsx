import React, { useEffect, useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import rr from "../../../../public/images/rr.png";

import Video from "../../../videos/Bochra.mp4";
import { Button } from "../ButtonElement";
import { Trans } from "react-i18next";
import DemandeClients from "../../admin/demande/demandeClients";
import { Margin } from "@mui/icons-material";
import { Nav } from "../Navbar/NavbarElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById("scroll-image");
      const nav = document.getElementById("navbar");

      if (image && nav) {
        const imageBottom = image.getBoundingClientRect().bottom;
        const navHeight = nav.offsetHeight;

        if (imageBottom <= navHeight) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <Trans>
          <HeroContent>
           
            <HeroH1>EMBRACE THE FUTURE: AUTOMATE YOUR SERVICES</HeroH1>
            <HeroP>Sign up for new account</HeroP>
            
          </HeroContent>
        </Trans>
    
        {/* <img src={rr} alt="rr" style={{ width: '100%',marginBottom:'-500px',height: '50vw',background: 'none' ,zIndex: 10,height: '40vw',position: 'absolute'}} /> */}
       
      </HeroContainer>
    </>
  );
};

export default HeroSection;
