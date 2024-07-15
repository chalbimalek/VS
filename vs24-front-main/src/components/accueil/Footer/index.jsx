import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import {
    FooterContainer, FooterLink, FooterLinkItems
    , FooterLinksContainer, FooterWrap, FooterLinksWrapper
    , FooterLinkTitle, SocialIconLink, SocialIcons, SocialLogo
    , SocialMedia, SocialMediaWrap, WebsiteRights,SocialIcons1,Num
} from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Trans } from 'react-i18next';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
                <FooterContainer>
                    <FooterWrap>
                        <FooterLinksContainer>
                            {/* Ajoutez vos liens ici */}
                        </FooterLinksContainer>
                        <SocialMedia>
                            <SocialMediaWrap>
                            {/*  <SocialLogo to='/' onClick={toggleHome}>
                                    <img src="../../images/RemoteHub.png" height="70" alt="RemoteHub Logo" loading="lazy" />
                                </SocialLogo>*/}
                                <SocialIcons >
                                    
                                    <SocialIcons1 >
                                    Contacts :
                                    <SocialIconLink href="https://mail.google.com/mail/u/0/#search/voltwisesolutions%40gmail.com?compose=new"  target="_blank"  >

                                    E-mail: Voltwisesolutions@gmail.com
                                    </SocialIconLink>
                                    <Num>
                                    Tél: +216 54 479 625
                                    </Num>
                                    </SocialIcons1>
                                    <SocialIcons1 >
                                        <div>Adresse :</div>
                                    <SocialIconLink href='https://www.google.com/maps/place/P%C3%A9pini%C3%A8re+de+Technop%C3%B4le+El+Ghazela,+Rue+IBN+HAMDOUN/@36.894049,10.1858932,17.4z/data=!4m15!1m8!3m7!1s0x12e2cb7254b0ee4f:0x7e87e33674451f9e!2sEl+Ghazala!3b1!8m2!3d36.8950951!4d10.188536!16s%2Fg%2F1ptvwdcx4!3m5!1s0x12e2cb7173d7cd7f:0x1ec59d1fe9ec5b54!8m2!3d36.8945506!4d10.186172!16s%2Fg%2F11byl57xvw?entry=ttu' target="_blank">
                                    3e Étage, Pépinière Technopole Al Ghazella.
                                    </SocialIconLink>
                                    </SocialIcons1>
                                
                                </SocialIcons>
                            </SocialMediaWrap>
                        </SocialMedia>
                    </FooterWrap>
                </FooterContainer>
            </>
        );
}

export default Footer;
