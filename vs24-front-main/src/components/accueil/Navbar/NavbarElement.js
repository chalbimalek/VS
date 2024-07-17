// NavbarElement.js
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : '#fff')};
  height: 80px;
  display: flex;
  padding:50px
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%; /* Remplacer "auto" par "100%" */

  @media only screen and (max-width: 600px) {
    transition: 0.6s all ease;
  max-width: 100%; /* Remplacer "auto" par "100%" */

  }

  box-shadow: 1px 2px 4px rgba(0, 1, 0, 0.3); /* Ajout de l'ombre en bas */
`;

export const NavbarContainer = styled.div `
  display:flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 8 0;
  max-width: 100%;
  margin-right: 10px;
  margin-left: 30px;
@media only screen and (max-width: 600px) {
  margin-left: 10px;


}

`;

export const NavLogo = styled(LinkR)`
  border-radius: 50px;
  justify-self: flex-start;
  cursor: pointer;
  display:flex;
  font-size: 1rem;
  align-items:center;
  font-weight:bold;
  text-decoration: none;
  margin-top:20px
  
  @media only screen and (max-width: 600px) {
    height: 10%;
    width: 10%;
  }

`;

export const MobileIcon = styled.div`

    display:none;
    @media screen and (max-width: 600px){
        display:block;   
        position: absolute;
        top:0;
        right:0;
        transform :translate(-100%,80%);
        font-size: 1.8rem;
        cursor   :pointer;
        color: #fff;
    }
    
`;

export const NavMenu = styled.ul `
  display:flex;  
  align-items: center;
  list-style: none;
  text-align: center;

 display: flex;
  width: 100%;
  max-width: 100%;
  color: #000;
  justify-content: flex-end; /* Aligner tous les éléments à droite */
  gap: 40px; /* Add space between the NavItems */


  @media screen and (max-width:600px) {
      
  }

`;

export  const NavItem = styled.li `
  height: 70px;
@media screen and (max-width: 600px) {
    display: none;
  }
`;
export const NavDropDown=styled.li`
display: inline-flex;
margin-left:100px;

  @media screen and (max-width:300px) {
    display:inline-flex;
  }
`;

export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
  display: flex;
  text-decoration: none;
  margin-top:30px;
  height: 100%;
  cursor: pointer;
    font-family: Constantia, sans-serif;
  flex-grow: 1;

  &.active {
    border-bottom: 4px solid #8fd1e3;
  }
  &:hover{
    color: #9e0000;
    transition:  0.3s ease-out;
  }
   align-self: start;
  display: flex;
  font-size: 16px;
 
  @media screen and (max-width:600px) {
      display: none; 

  }
  
`;

export const NavBtn = styled.nav`
 
  
  margin-top: 20px;

  @media screen and (max-width:600px) {
    display: flex;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 6.111px;
  box-shadow: 0px 4.889px 4.889px 0px rgba(0, 0, 0, 0.25);
  background-color: #9e0000;
 
  padding: 6px 23px;
  font: 12px Constantia, sans-serif;
  text-decoration: none; // Supprimer le soulignement par défaut des liens
  color: #ffff; // Définir la couleur du texte
  align-items: center;
  white-space: nowrap; // Empêcher le retour à la ligne
  &:hover {
    background-color: #0000; // Couleur de fond au survol
    color: #9e0000; // Couleur du texte au survol
  }
  @media screen and (max-width:600px) {
    display: flex;
     justify-content: center;
       align-items: center;
       margin-left: -170px;
  }
`;
