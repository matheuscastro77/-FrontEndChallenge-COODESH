import React from 'react'
import logo from '../../assets/logo.png'
import { H1, Img, Main, ContainerLogo, Container, H4 } from './styled'

const Header = () => {
  return (
    <Main>
        <ContainerLogo>
        <Img src={logo} alt='logo'/>
        <H1>Pharma</H1>
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