import styled from 'styled-components';

export const InfoSec = styled.div`
   color: var(--white);
   padding: 160px 0;
   background: ${({lightBg}) => (lightBg ? 'var(--white);':'var(--black);')};
`;
export const InfoRow = styled.div`
   display: flex;
   margin: 0 15px -15px -15px;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse':'row')};
`;

export const InfoColumn = styled.div`
   margin-bottom: 15px;
   padding-right: 15px;
   padding-left: 15px;
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px){
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;

   }
`

export const TextWrapper = styled.div`
   max-width: 540px;
   padding-top: 0;
   padding-bottom: 3.5rem;

   @media screen and (max-width: 768px){
      padding-bottom: 4rem;

   }
`;

export const TopLine = styled.div`
   color: ${({lightTopLine}) => (lightTopLine ? 'var(--black)':'var(--white)')};
   font-size: clamp(1rem, 1.5vw, 2rem);
   line-height: 120%;
   font-weight: 700;
   letter-spacing: 0.04em;
   margin-bottom: 1rem;
`;

export const Heading = styled.h1`
   margin-bottom: 1.5rem;
   font-size: clamp(2rem, 2.5vw, 4rem);
   line-height: 1.2;
   color: ${({lightText}) => (lightText ? 'var(--white)':'var(--black)')};

`;

export const Subtitle = styled.p`
   max-width: 440px;
   margin-bottom: 2rem;
   font-size: clamp(1rem, 1.2vw, 2rem);
   line-height: 120%;
   color: ${({lightTextDesc}) => (lightTextDesc ? 'var(--white)':'var(--black)')};
`;

export const ImgWrapper = styled.div`
   max-width: 555px;
   display: flex;
   justify-content: ${({start}) => (start ? 'flex-start':'flex-end')};
`;

export const Img = styled.img`
   padding-right: 0;
   border: 0;
   max-width: 100%;
   vertical-align: middle;
   display: inline-block;
   max-height: 500px;
   
`;