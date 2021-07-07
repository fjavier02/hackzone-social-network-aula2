import React from 'react';
import { Img, Container, Ctext2, Ctext3 } from './styles';
import { Text2, Text3 } from '../../components';
import user1 from '../../assets/user1.png';
import gears from '../../assets/gears.png';

const Perfil = ({ user }) => (
  <>
    <Container>
      <Img
        src="https://i.picsum.photos/id/51/536/354.jpg?hmac=6t9FJ6ct4R0FLPkIpc8S61J20ld00Zf-ekMADXxz6OA"
        alt="perfil"
      />
      <Ctext2>
        <Text2>André Teixeira</Text2>
      </Ctext2>
      <Ctext3>
        <img src={user1} alt="logo user" />
        <Text3>Editar perfil</Text3>
        <br />
        <img src={gears} alt="gear for user" />
        <Text3>Perfil completo</Text3>
      </Ctext3>
    </Container>
  </>
);

export default Perfil;