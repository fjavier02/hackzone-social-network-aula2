import React, { useState } from 'react';

import { Title1, Title2, Button, Input } from '../../components';
import { Container, PhrasesContainer, FormContainer } from './styles';

import api from '../../services/api';

const SignIn =() =>{
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit =async(e) =>{
    e.preventDefault();
    const response = await api.get('/users');
    console.log(response);
  }
  return(
    <Container>
      <PhrasesContainer>
        <Title1>A rede dos programadores</Title1>
        <Title2>Venha compartilhar conhecimento, código e café</Title2>
      </PhrasesContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <Input placeholder="Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        ></Input>
        <Input 
        value={password}
        onChange ={(e)=>setPassword(e.target.value)}
        placeholder="Senha"
        type="password"></Input>

        <Button type="submit">Entrar</Button>
        <Button buttonStyle="secondary" buttonSize="small">Criar Conta</Button>
      </FormContainer>


    </Container>
  )
}

export default SignIn;