import React from 'react'
import logo from '../../assets/logo.png'
import { H2, Img, Main, ContainerLogo, Container, H4 } from './styled'

const Header = () => {
  return (
    <Main>
        <ContainerLogo>
        <Img src={logo} alt='logo'/>
        <H2>Pharma</H2>
        </ContainerLogo>
        <Container>
        <H4>About Us</H4>
        <H4>Contact</H4>
        <H4>Privacy</H4>
        </Container>
    </Main>
  )
}

export default Header