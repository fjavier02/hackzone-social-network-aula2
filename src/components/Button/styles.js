import styled from 'styled-components';

export const Container = styled.button`
  font-size: 24px;
  border: none;
  color: #fff;
  padding: 20px 18px;
  border-radius: 8px;
  background-color: ${({theme})=> theme.blue};
  text-align:center;

  background-color: ${({theme, variant})=>{
    switch(variant){
      case 'secondary':
        return theme.pink;
      case 'deactivated':
        return theme.lightGrey;
      case 'error':
        return theme.error;
      default:
        return theme.blue;
    }
  }};
  width: 100%;

  max-width: ${({ size }) => {return(size === 'big' ? '470px' : '270px')}};
`;
