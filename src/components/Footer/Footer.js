import React from 'react';
import {
   FaFacebook,
   FaInstagram,
   FaYoutube,
   FaTwitter,
   FaLinkedin
} from 'react-icons/fa';
import { Button } from '../../globalStyled';
import {
   FooterContainer,
   FooterSubscription,
   FooterSubheading,
   FooterSubText,
   Form,
   FormInput,
   FooterLinksContainer,
   FooterLinksWrapper,
   FooterLinksItems,
   FooterLinkTitle,
   FooterLink,
   SocialMedia,
   SocialMediaWrap,
   SocialLogo,
   SocialIcons,
   WebsiteRights,
   SocialIconLink,
   SocialIcon
} from './Footer.elements';

const Footer = () => {
   return (
      <FooterContainer>
         <FooterSubscription>
            <FooterSubheading>
               Join our exclusive membership to receive the latest news and trends
            </FooterSubheading>
            <FooterSubText>You can unsubscribe at any time.</FooterSubText>
            <Form>
               <FormInput name='email' type='email' placeholder='Your email' autoComplete='off' />
               <Button fontBig>Subscribe</Button>
            </Form>
         </FooterSubscription>
         <FooterLinksContainer>
            <FooterLinksWrapper>
               <FooterLinksItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to='/sign-up'>How it works</FooterLink>
                  <FooterLink to='/'>Testimonial</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Investors</FooterLink>
                  <FooterLink to='/'>Terms of Service</FooterLink>
               </FooterLinksItems>

               <FooterLinksItems>
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to='/sign-up'>How it works</FooterLink>
                  <FooterLink to='/'>Testimonial</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Investors</FooterLink>
                  <FooterLink to='/'>Terms of Service</FooterLink>
               </FooterLinksItems>

               <FooterLinksItems>
                  <FooterLinkTitle>Videos</FooterLinkTitle>
                  <FooterLink to='/sign-up'>How it works</FooterLink>
                  <FooterLink to='/'>Testimonial</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Investors</FooterLink>
                  <FooterLink to='/'>Terms of Service</FooterLink>
               </FooterLinksItems>

               <FooterLinksItems>
                  <FooterLinkTitle>Social Media</FooterLinkTitle>
                  <FooterLink to='/sign-up'>How it works</FooterLink>
                  <FooterLink to='/'>Testimonial</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Investors</FooterLink>
                  <FooterLink to='/'>Terms of Service</FooterLink>
               </FooterLinksItems>
            </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
            <SocialMediaWrap>
               <SocialLogo to='/'>
                  <SocialIcon />
                  ULTRA
               </SocialLogo>
               <WebsiteRights>ULTRA &copy; 2021</WebsiteRights>
               <SocialIcons>
                  <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                     <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                     <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                     <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                     <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                     <FaLinkedin />
                  </SocialIconLink>
               </SocialIcons>
            </SocialMediaWrap>
         </SocialMedia>
      </FooterContainer>
   )
}

export default Footer