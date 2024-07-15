import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  flex-direction: column;
  margin-top:-10px;
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 50px 0;
  }
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


`;

export const NavButton = styled.button`
    background: none; /* Supprime l'arrière-plan */
  border: none;
  padding: 0; /* Supprime le padding pour ajuster la taille */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Ajoute une transition au changement d'échelle */
  margin: 10px; /* Ajoute un espace autour du bouton */

  &:hover {
    transform: scale(1.1); /* Agrandit légèrement l'image au survol */
  }
  
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%; /* Rend l'image circulaire */
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    padding: 0 200px;
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
  height: 600px; /* Set the height */
  padding: -150px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
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


`;
export const ServicesIconVs = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -10px;

`;
export const ServicesPVS = styled.p`
    font-size: 16px;
  color: #333;
  font-weight: normal;
  margin-top: 50px;


`;
export const ServicesDivVS = styled.div`
     display: grid;    
  margin-top: 88px;
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

  
`;
export const ServicesIcon = styled.img`
  width: 300px;
  height: 160px;
  display: flex;
  margin-bottom: 18px;
    margin-top: 58px;

`;
export const ServicesDiv = styled.div`
     display: flex;
  margin-top: 8px;
  align-items: center; // Changer "end" en "center" pour centrer verticalement
  justify-content: center; // Ajouter pour centrer horizontalement
  font-size: 48px;
  color: #000;
  font-weight: 400;
  text-align: center;
panding:20px
  flex-wrap: wrap;
  gap: 20px;
    grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);

  
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
  color: #000;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 80%;
    width: 100px; // Longueur de la ligne, ajustez selon vos besoins
    height: 1px;
    background-color: rgba(158, 158, 158, 1);
  }

  &::before {
    left: -120px; // Ajustez cette valeur pour positionner correctement la ligne à gauche
  }

  &::after {
    right: -120px; // Ajustez cette valeur pour positionner correctement la ligne à droite
  }


  @media screen and (max-width: 991px) {
    font-size: 20px;
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


`;
