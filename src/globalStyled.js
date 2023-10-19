import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Source Sans Prop', sans-serif;
   }
`;

export const Container = styled.div`
   z-index: 1;
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   padding-left: 50px;
   padding-right: 50px;

   @media screen and (max-width: 991px){
      padding-right: 30px;
      padding-left: 30px;
   }
`;

export const Button = styled.button`
   border-radius: var(--border-radious);
   background: ${({primary}) => (primary ? 'var(--primary);': 'var(--secundary);')};
   white-space: nowrap;
   padding: ${({big}) => (big ? 'var(--padding-Left-Right-button) var(--padding-Top-Bottom-button)':'10px 20px')};
   color: var(--white);
   font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
   outline: none;
   border: none;
   cursor: pointer;

   &:hover{
      transition: all 0.3s ease;
      background: var(--white);
      background: ${({primary}) => (primary ? 'var(--secundary);': 'var(--primary);')};
   }

   @media screen and (max-width: 960px){
      width: 100%;
   }
`;

export default GlobalStyle