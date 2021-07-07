import React from 'react';

import { Container} from './styles';
import logo from '../../assets/logo.png';

const Header = () =>(
  <Container>
    <img src={logo} alt="logo HackZone"></img>
  </Container>
);

export default Header;