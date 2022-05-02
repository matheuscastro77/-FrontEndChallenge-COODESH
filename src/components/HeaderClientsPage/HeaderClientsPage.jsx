import React from 'react'
import logo from '../../assets/logo.png'
import { H2, Img, Main, ContainerLogo } from './styled'

const HeaderClients = () => {
  return (
    <Main>
        <ContainerLogo>
        <Img src={logo} alt='logo'/>
        <H2>Pharma</H2>
        </ContainerLogo>
    </Main>
  )
}

export default HeaderClients