import styled from 'styled-components';
import {Link}  from "react-router-dom";
const currentLanguage = 'fr'; // Replace with your logic to get the language

export  const FooterContainer = styled.footer`
    background:#fffff;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3); /* Inversez l'ombre pour la mettre en haut */

  
`;
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100%;
margin: 0 auto;
margin-top :100px
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3); /* Inversez l'ombre pour la mettre en haut */

`;
export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content: center;
    @media screen and (max-width : 820px){
    padding-top: 32px;

    }
`;
export const FooterLinksWrapper= styled.div`
    display:flex;
    @media screen and (max-width : 820px) {
        flex-direction: column;
    }
`;
export const FooterLinkTitle = styled.h1`
font-size:14px;
margin-bottom:16px;
`;
export  const FooterLinkItems = styled.div`
    display:flex;
    flex-direction: column; 
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    direction: ${currentLanguage === 'fr' ? 'auto' : 'ltr'}; // RTL for French if needed

    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width : 420px) {
        width: 100px;
        margin: 0;
        padding: 10px;
    }
    

`;
export   const FooterLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #2a2559;
       transition:  0.3s ease-out;

    }

`;
export const SocialMedia=styled.section`
display: flex;
  margin-top: 59px;
  width: 100%;
  max-width: 1038px;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  justify-content: space-between;

`;
export  const SocialMediaWrap=styled.div`
 

    display: flex;
  margin-top: 1px;
  width: 100%;
  max-width: 1038px;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  justify-content: space-between;


}
    `;
    export  const SocialLogo=styled(Link)`
        color: #fff;
        justify-self: start;
        cursor: pointer;
        text-decoration: none;
        font-size: 1.5rem;
        display: flex;
        margin-top: auto;
        align-items: center;
        margin-bottom: 16px;
        font-weight: bold;
    `;
    export  const WebsiteRights = styled.small`
         color: #000;
  font-family: Constantia, sans-serif;
    `;
    export const SocialIcons=styled.div`
       display: flex;
  margin-top: 89px;
  width: 100%;
  max-width: 1438px;
  gap: 450px;
  font-size: 16px;
  font-weight: 400;
  justify-content: space-between;
   max-width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
    `;
    export const SocialIcons1=styled.div`
   color: #000;
  font-family: Constantia, sans-serif;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
    white-space: nowrap;


`;
export const Num=styled.div`
    color: #757575;
  font-family: Constantia, sans-serif;
  margin-top: 0; // Supprimer l'espace entre les éléments
white-space: nowrap;

`;
    export  const SocialIconLink=styled.a`
     color: #757575;
  font-family: Constantia, sans-serif;
  margin-top: 0; // Supprimer l'espace entre les éléments
 text-decoration: none; // Supprimer le soulignement par défaut des liens
  white-space: nowrap;

  &:hover {
    color: #8fd1e3; // Couleur du texte au survol (facultatif)
  }
    }
    `;


