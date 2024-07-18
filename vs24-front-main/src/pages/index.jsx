import React, { useEffect, useState } from "react";
import Sidebar from "../components/accueil/SideBar";
import Navbar from "../components/accueil/Navbar";
import HeroSection from "../components/accueil/HeroSection";
import InfoSection from "../components/accueil/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFive,
} from "../components/accueil/InfoSection/Data";
import { homeObj } from "../components/accueil/Map/DataMAp";
import Services from "../components/accueil/Services";
import Footer from "../components/accueil/Footer";
import Map from "../components/accueil/Map/map";
import { Trans } from "react-i18next";
import DemandeClients from "../components/admin/demande/demandeClients";
import DemandePub from "../components/admin/demande/demandePub";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDemandeClients, setShowDemandeClients] = useState(false);
  const [showDemandePubs, setShowDemandePubs] = useState(false);

  //////////////////
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleScroll = () => {
    const infoSection = document.getElementById("info-section");
    const nav = document.getElementById("navbar");

    if (infoSection && nav) {
      const infoSectionTop = infoSection.getBoundingClientRect().top;

      if (infoSectionTop <= 0) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  ////////////////////
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showDemandeClientsHandler = () => {
    setShowDemandeClients(true);
    setShowDemandePubs(false);
  };

  const showDemandePubsHandler = () => {
    setShowDemandePubs(true);
    setShowDemandeClients(false);
  };

  return (
    <>
      {showDemandeClients && (
        <div
          className="col-12"
          style={{ position: "fixed", top: "100px", zIndex: 1000 }}
        >
          <DemandeClients setShowDemandeClients={setShowDemandeClients}/>
        </div>
      )}
      {showDemandePubs && (
        <div
          className="col-12"
          style={{ position: "fixed", top: "105px", zIndex: 1000, display:"flex"}}
        >
          <DemandePub setShowDemandePubs={setShowDemandePubs}/>
        </div>
      )}
      <Trans>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar id="navbar" isVisible={isNavVisible}
          toggle={toggle} 
          setShowDemandeClients={showDemandeClientsHandler}
          setShowDemandePubs={showDemandePubsHandler} 
        />

        <HeroSection />
        <InfoSection {...homeObjOne} id="info-section" />

        <Services />
      {/*  <InfoSection {...homeObjTwo} />
         <InfoSection {...homeObjThree} />

        <InfoSection {...homeObjFour}/> 
        <Map {...homeObj} />
        <InfoSection {...homeObjFive} />*/}

        <Footer />
      </Trans>
    </>
  );
};

export default Home;
