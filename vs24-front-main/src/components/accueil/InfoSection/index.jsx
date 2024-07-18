import React from 'react';
import { InfoContainer, ImgWrapA,InfoWrapper, VideoBg,InfoRow, Column1, Column2, ImgWrap, Img, Heading, TopLine, Subtitle, BtnWrap, TextWrapper, Vid, Bar } from './InfoElement';
import { Button } from '../ButtonElement';
import { Trans } from 'react-i18next'

import Video from "../../../videos/sectionBg.mp4";
import rr from "../../../../public/images/rr.png";



const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, dark, dark2, video, iframeSrc }) => {
  return (
    <>

      <InfoContainer lightBg={lightBg} id={id}>

      <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            <Trans>

        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column2>
              <TextWrapper>
                
                <TopLine style={{ fontFamily: 'Constantia , sans-serif', fontWeight: 'bold' }}>{topLine}</TopLine>
                <Heading style={{ fontFamily: 'Constantia , serif'}} lightText={lightText} >{headline}</Heading>
                <Subtitle style={{ fontFamily: 'Constantia , serif'}}  darkText={darkText} >{description}</Subtitle>
              
              </TextWrapper>
              
            </Column2>
          

            <Column1 className='col-md-6'>
              <ImgWrap>
                {video ? (
                  <Vid autoPlay loop muted src={video}>
                    
                  </Vid>
                ) : (
                  <Img src={img} alt={alt} />
                 
                )
                }
              </ImgWrap>
            </Column1>
          </InfoRow>
        </InfoWrapper>
        </Trans>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
