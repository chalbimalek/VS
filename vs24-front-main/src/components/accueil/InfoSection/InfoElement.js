import styled from "styled-components";
// Assuming you have a way to determine the current language (e.g., 'en' for English, 'fr' for French, 'ar' for Arabic)
const currentLanguage = 'fr'; // Replace with your logic to get the language

const getDirection = (lang) => {
  return lang === 'ar' ? 'rtl' : 'ltr'; // Dynamic direction based on language
};
export const InfoContainer = styled.div`
  color: #fff;
  display: flex;

margin-top: 7px;
  width: 100%;
  max-width: 12242px;
  gap: 20px;
  display: flex;


  background: ${({ lightBg, video }) =>
    video ? `url(${video}) no-repeat center center/cover` : (lightBg ? '#fff' : '#010606')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;


 export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    max-width: 1100px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    align-items: center;
    justify-content: center;
    `;

    export const InfoRow = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column; /* Ajustement pour aligner les éléments en colonne */
  line-height: normal;
  margin-left: -100px;
  width: 100%;
  margin-top:20px
  flex-grow: 1;
  width: 100%;
  gap: 14px;
  flex-wrap: wrap;
`;

export const Column2 = styled.div`
   

display: flex;
  flex-direction: column; /* Alignement en colonne */
  max-width: 991px;
  color: #000;
  font-size: 20px;
  align-items: flex-start; /* Alignement à gauche */
  letter-spacing: 2px;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 15px;
  width: 100%;
  padding: 0 15px;
  grid-area: col2;
  flex-grow: 1; /* Pour occuper tout l'espace disponible */
  flex-basis: auto; /* Utilisation de la base automatique */
  margin: auto 0;
  position: relative; /* Ajout pour le positionnement de la barre */

  /* Ajout de la barre verticale à droite */
  &::after {
    content: "";
    position: absolute;
    top: 45px;
    right: 550px; /* Ajustez cette valeur en fonction de la largeur de la barre et de l'espacement souhaité */
    width: 0.5px; /* Largeur de la barre */
    height: 80%;
    background-color: #535353;} /* Couleur de la barre */
`;

  
export const TextWrapper = styled.div`
        max-width: 540px;
        padding-top: 0 ;
        padding-buttom: 60px;
        direction: ${getDirection(currentLanguage)}; // Conditional direction
        `;
export const TopLine = styled.p`
        color: #0070ad;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 1.4px;
        margin-bottom: 16px ;
        text-transform: uppercase;

`;

export const Heading = styled.h1`
 color: #000;
  align-self: end;
  margin: 213px 208px 0 0;
  font: 400 48px Constantia, sans-serif;
  font-size: 40px;
    margin: 40px 10px 0 0;
    max-width: 991px


  
    color: ${({lightText})=>( lightText ? '#000':'#010606')};
   
`;
export const Subtitle = styled.p`
  font-family: Constantia, sans-serif;
   /* Pour occuper tout l'espace disponible */
  flex-basis: auto; /* Utilisation de la base automatique */
  margin: auto 0; /* Marge automatique en haut et en bas */
  max-width: 120%; /* Maximiser la largeur */
  margin-bottom: 35px; /* Marge en bas */
  font-size: 18px;
  line-height: 24px;
  height: auto; /* Hauteur automatique */
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

        width: 190%;


  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;
export const ImgWrap = styled.div`
    max-width: 555px;
    height: auto;
      margin-top: 40px; /* Correspondant à la marge de l'image */


`;
export const Img = styled.img`
 width: 100%;
  height: auto; 
  margin: 0 0 60px 0;
  aspect-ratio: 2.33;
  object-fit: cover;
  object-position: center;
  max-width: 100%;
  margin-top: 4px;
   display: flex;
  flex-direction: column;
`;
export const Bar = styled.div`
 border-color: rgba(83, 83, 83, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #535353;
  width: 3px;
  height: 212px;
`;
export  const Vid = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
       border-radius:  20px;

    margin: 0 0 0 0;
`;
