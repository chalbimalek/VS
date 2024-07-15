// NavbarElement.js
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav= styled.nav`
  background:${({scrollNav})=>(scrollNav ? '#000':'#fff')};
  height: 80px;
  margin-top: -110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px)  {
    transition: 0.6s all ease;
  }
  

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); // Ajout de l'ombre en bas


`;

export const NavbarContainer = styled.div `
  display:flex;
  justify-content: space-between;
  height: 4px;
  z-index: 1;
  width: 100%;
  padding: 0 0;
  max-width: 1000px;

`;

export const NavLogo = styled(LinkR)`
  border-radius: 50px;
  justify-self: flex-start;
  cursor: pointer;
  display:flex;
  font-size: 1rem;
  align-items:center;
  margin-left:-200px;
  font-weight:bold;
  text-decoration: none;
  margin-top:20px
  
  

`;

export const MobileIcon = styled.div`

    display:none;
    @media screen and (max-width: 12205px){
        display:block;   
        position: absolute;
        top:0;
        right:0;
        transform :translate(-100%,60%);
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
  width: 60%;
  max-width: 1322px;
  gap: 4px;
  color: #000;
  font-weight: 400;
  justify-content: space-between;

    



  @media screen and (max-width: 1225px) {
    display:none;
    widhth: 50vw;
  }

`;

export  const NavItem = styled.li `
  height: 70px;

`;
export const NavDropDown=styled.li`
display: inline-flex;
margin-left:100px;

  @media screen and (max-width: 768px){
    display:inline-flex;
  }
`;

export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
  display: flex;
  text-decoration: none;
  margin-top:30px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

    font-family: Constantia, sans-serif;
  flex-grow: 1;

  &.active {
    border-bottom: 4px solid #8fd1e3;
  }
  &:hover{
    color: #fd5;
    transition:  0.3s ease-out;
  }

   align-self: start;
  display: flex;
  gap: 20px;
  font-size: 16px;
 

  
`;

export const NavBtn = styled.nav`
  display: inline-flex;
  align-items: center;
  margin-left: 80px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 6.111px;
  box-shadow: 0px 4.889px 4.889px 0px rgba(0, 0, 0, 0.25);
  background-color: #fd5;
  justify-content: center;
  padding: 7px 33px;
  font: 12px Constantia, sans-serif;
  text-decoration: none; // Supprimer le soulignement par défaut des liens
  color: #000; // Définir la couleur du texte
  display: flex;
  align-items: center;
  white-space: nowrap; // Empêcher le retour à la ligne
  min-width: 100px;

  &:hover {
    background-color: #ffc107; // Couleur de fond au survol
  }
`;
