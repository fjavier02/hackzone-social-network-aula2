import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 36px 70px;
  justify-content: space-between; 
`;

export const PhrasesContainer = styled.div`
  max-width: 640px;
`;

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.1);
  padding: 53px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 470px;
`;