import styled from "styled-components";

export const ServicesContainer = styled.div`
 color: #fff;

  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  position: relative;

  z-index: 1;  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  flex-direction: column;
  margin-top:0px;
  @media only screen and (max-width: 600px) {
  padding: 5px 2px; /* Ajustement du padding pour mobile */
  height: 100%;
    width: 100%;
  }
`;

export const VideoBg = styled.video`

  width: 100%;

  height: 100%;

  position: absolute;

  top: 0;

  left: 0;

  object-fit: cover;

  z-index: -1;

`;
export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
    display: inline-block;
  text-align: center;
  position: absolute; /* Ajouté pour positionner les boutons */
  top: 100%;
  transform: translateY(-140%);
 @media only screen and (max-width: 600px) {
    margin:1100px 20px;
      width: 100%;

  }

`;

export const NavButton = styled.button`
    background: none; /* Supprime l'arrière-plan */
  border: none;
  padding: -80px; /* Supprime le padding pour ajuster la taille */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Ajoute une transition au changement d'échelle */
  margin: 20px; /* Ajoute un espace autour du bouton */

  &:hover {
    transform: scale(1.1); /* Agrandit légèrement l'image au survol */
  }
  
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%; /* Rend l'image circulaire */
  }
     @media only screen and (max-width: 600px) {
    height: 100%;
    margin: 600px 0px;
    padding: 20px; /* Supprime le padding pour ajuster la taille */
  display: inline-block;
  }
`;

export const ServicesWrapper = styled.div`
        max-width: 1000px;
        margin : 0 auto;
        display: flex;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        grid-gap: 16px;
        padding: 0 50px;
        justify-content: center; /* Centre horizontalement */
        align-items: center; /* Centre verticalement */
         position: relative; /* Ajouté pour positionner les boutons de navigation */


    @media only screen and (max-width: 600px)
 {
    grid-template-columns: 1fr;
    height: 100%;
    padding: 1px 0;
   width: 100%;

  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
   width: 672px;
  margin-top: 17px;
  max-width: 100%; /* Set the width */
  height: 500px; /* Set the height */
  padding: -150px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
 @media only screen and (max-width: 600px)
 {
    
    height: 500px;
    padding: 10px 0;
    width: 100%;
    margin-right: 10px;

  }

`;

export const ServicesCardVS = styled.div`
display:flex
width: 100%;
  max-width:500px;
  
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
 @media only screen and (max-width: 600px)
 {
    padding: 5px ;
    width: 100%;
    margin-right: 10px;
    margin-left: -10px;

  }

`;
export const ServicesIconVs = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -10px;
 @media only screen and (max-width: 600px)
 {
    padding: 5px ;
    width: 100%;

    }

`;
export const ServicesPVS = styled.p`
    font-size: 16px;
  color: #333;
  font-weight: normal;
  margin-top: 50px;


`;
export const ServicesDivVS = styled.div`
     display: grid;    
  margin-bottom: 88px;
 // Ajouter pour centrer horizontalement
  font-size: 88px;
  color: #000;
  font-weight: 500;
  text-align: center;
padding:10px
  flex-wrap: wrap;
  gap: 20px;
    grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);
 @media only screen and (max-width: 600px)
 {
    padding: 1px 30px;
  margin-bottom: 88px;
          width: 100%;
            margin-bottom: 110px;
  }
  
`;
export const ServicesIcon = styled.img`
  width: 200px;
  height: 160px;
  display: flex;
  margin-bottom: 18px;
    margin-top: 5px;
@media only screen and (max-width: 600px)
 {
         display: flex;
  width: 50%;
    margin-top: -10px;

    height: 20%;
  text-align: center;
  }
`;
export const ServicesDiv = styled.div`
     display: flex;
  margin-top: 8px;
  align-items: center; // Changer "end" en "center" pour centrer verticalement
  justify-content: center; // Ajouter pour centrer horizontalement
  font-size: 48px;
  color: #ffffffff;
  font-weight: 400;
  text-align: center;
panding:20px
  flex-wrap: wrap;
  gap: 20px;
    grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);

 @media only screen and (max-width: 600px)
 {
    
    padding: 0 200px;
    height: 100%;
    padding: 10px 0;
    width: 100%;

  }
  
`;


export const ServicesH1 = styled.h1`
  font-family: Constantia, sans-serif;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  text-align: center;
  font-size: 38px;
font-weight:200
    width: 100px; // Adjust the width as needed
     position: relative; // Nécessaire pour le positionnement des pseudo-éléments
    color: #fffffff;

    @media only screen and (max-width: 200px)
 {
         display: flex;
    height: 1;
  text-align: center;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  direction: rtl;
  text-align: center;


`;

export const ServicesP = styled.p`
  font-size: 1.6rem;
  text-align: center;
  direction: rtl;
  font-size:30px
  width: 100%;
  height:100%
      top: 80%;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    display: flex;
    width: 90%;
  }

`;
