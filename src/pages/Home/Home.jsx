import React from 'react'
import Header from '../../components/Header/Header'
import fundo from '../../assets/background.jpg'
import { useNavigate } from 'react-router-dom';
import { Button, ContainerTitles, H1, H2, Img, Main, Person } from './styled'

const Home = () => {

  const navigate = useNavigate()

  const goToListClients = () => {
    navigate('/clients')
  }

  return (
    <>
    <Header />
    <Main>
      <ContainerTitles>
        <H1>PHARMA MANAGEMENT AREA</H1>
        <H2>Have access to all information about our customers, filter and have detailed information about all patients present in our database</H2>
        <Button onClick={goToListClients}>LOG IN</Button>
      </ContainerTitles>
      <Person>
      <Img src={fundo} />
      </Person>
    </Main>
    </>
  )
}

export default Home 
