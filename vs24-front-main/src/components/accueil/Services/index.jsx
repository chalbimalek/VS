import React, { useState } from 'react'
import Icon1 from '../../../images/svg-10.svg';  
import Icon2 from '../../../images/svg-5.svg';  
import Icon3 from '../../../images/svg-8.svg';  
import prec from '../../../images/prec2.png';
import suiv from '../../../images/suiv1.png';
import un from '../../../images/1.png';
import deux from '../../../images/2.png';
import trois from '../../../images/3.png';
import quatre from '../../../images/4.png';
import inn from '../../../images/11.png';
import partage from '../../../images/partage.png';
import trans from '../../../images/transp.png';


import { ServicesContainer,ServicesCard 
,ServicesH1,ServicesH2,ServicesIcon,ServicesWrapper,ServicesDiv,NavButton,NavigationButtons,ServicesCardVS,ServicesIconVs,
ServicesPVS,ServicesDivVS,
ServicesP} from './ServicesElement'
import { Trans } from 'react-i18next';
const Services = () => {
    
    const [currentCard, setCurrentCard] = useState(0);
    const Vs=[
      {
        icon:un,
        description: `Prise en charge de l'ensemble du processus, de la conception à la production en série`,
      },
      {
        icon:deux,
        description: `Réutilisation responsable`,
      },
      {
        icon:trois,
        description: `Service après-vente disponible et à l'écoute 7/7`,
      },
      {
        icon:quatre,
        description: `Usage intensif et répété`,
      },
    ]
  
    const cards = [
      {
        icon: inn,
        title: 'Innovation',
        description: `En tant qu'entreprise spécialisée dans les solutions
  électriques, "Voltwise Solutions" pourrait valoriser l'innovation
  technologique en développant et en proposant des solutions
  novatrices pour répondre aux besoins changeants du marché de
  l'énergie électrique.`,
      },
      {
        icon: partage,
        title: 'Partage',
        description: `Les power banks peuvent être partagées
  entre plusieurs utilisateurs, ce qui permet à plusieurs personnes de
  bénéficier de l'énergie stockée pour recharger leurs appareils
  électroniques. Cela encourage le partage des ressources au sein
  de la communauté`,
      },
      {
        icon: trans,
        title: 'Transparence',
        description: `Adoptation d’une politique de transparence envers les
  utilisateurs concernant la manière dont leurs données sont
  collectées, utilisées et partagées.`,
      },
    ];
  
    const handlePrev = () => {
      setCurrentCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
    };
  
    const handleNext = () => {
      setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    };
  return (
    <ServicesContainer id="valeurs">
    <Trans>
      <ServicesDiv>
 <ServicesH1>NOS VALEURS</ServicesH1>
      </ServicesDiv>
    <ServicesWrapper>
        <ServicesCard>
        <ServicesIcon src={cards[currentCard].icon}/>

            <ServicesH2 style={{ fontFamily: 'Constantia, sans-serif', fontWeight: 'bold' }}>{cards[currentCard].title}</ServicesH2>
            <ServicesP style={{ fontFamily: 'Constantia ,sans-serif', fontWeight: 'normal', color: '#757575'}}>
            {cards[currentCard].description}
            </ServicesP>
            <NavigationButtons>
        <NavButton onClick={handlePrev}>
        <img src={prec} alt="prec" /> {/* Utiliser l'image pour le bouton prec */}

          </NavButton>
        <NavButton onClick={handleNext}>    
              <img src={suiv} alt="Suivant" /> {/* Utiliser l'image pour le bouton suivant */}
        </NavButton>
      </NavigationButtons>
              </ServicesCard>
    </ServicesWrapper>

    <div style={{marginTop:'200px' ,marginBottom:'300px' }}>
    <ServicesDiv >
 <ServicesH1 style={{marginTop:'100px' ,marginBottom:'30px' }}>Pourquoi voltwise Solutions ?</ServicesH1>
      </ServicesDiv>
    <div>
      <ServicesDivVS>
      {Vs.map((item, index) => (
        <ServicesCardVS key={index}>
          <ServicesIconVs  style={{  fontWeight: 'bold' }} src={item.icon} />
          <ServicesPVS>{item.description}</ServicesPVS>
        </ServicesCardVS>
      ))}
    </ServicesDivVS>
    </div>
            </div>
   
            </Trans>

   </ServicesContainer >
  )
}

export default Services
