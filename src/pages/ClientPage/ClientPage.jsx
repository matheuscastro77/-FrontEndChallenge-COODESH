import React, { useContext } from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import HeaderClientsPage from '../../components/HeaderClientsPage/HeaderClientsPage'
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import loading from '../../assets/loading.gif'
import { LocationCity, Phone, WhatsApp, MailOutline, Female, PersonOutline, Male, Cake, Flag, LocationOn, Signpost, Contacts, AssignmentInd } from '../../constants/icons';
import { Container, Div, Button, Main, H2, Img, Tittle, P, Text, ContainerInfo, ContainerDetails, ContainerPicName, ContainerMain } from './styled'


export default function ClientPage() {

  const { clients } = useContext(GlobalStateContext)

  const navigate = useNavigate()

  const goToListClients = () => {
    navigate('/clients')
  }

  const url = window.location.href
  const selectUrl = url.split('clients/')
  const selectedUrl = selectUrl[1]
  return (
    <>
      <HeaderClientsPage />
      <Main>
        {clients && clients.length > 0 ? clients.map((client) => {
          if (selectedUrl === client.login.uuid) {
            return <Div key={client.login.uuid}>

              <Button onClick={goToListClients}>See all Clients</Button>
              <Container>
                <ContainerPicName>
                  <Img src={client.picture.large} />
                  <H2>{client.name.first} {client.name.last}, {client.dob.age}</H2>
                </ContainerPicName>
                <ContainerMain>
                  <ContainerDetails>
                    <Tittle>Contact</Tittle>
                    <Contacts sx={{ color: '#12b80f', fontSize: '30px' }} />
                    <ContainerInfo>
                      <Text><WhatsApp sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.cell}</P></Text>
                      <Text><Phone sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.phone}</P></Text>
                      <Text><MailOutline sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.email}</P></Text>
                    </ContainerInfo>
                  </ContainerDetails>
                  <ContainerDetails>
                    <Tittle>Profile</Tittle>
                    <AssignmentInd sx={{ color: '#12b80f', fontSize: '30px' }} />
                    <ContainerInfo>
                      <Text><PersonOutline sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.name.first} {client.name.last}</P></Text>
                      <Text>{client.gender === 'male' ? <Male sx={{ color: '#12b80f', fontSize: '22px' }} /> : <Female sx={{ color: '#12b80f', fontSize: '22px' }} />} <P>{client.gender}</P></Text>
                      <Text><Cake sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{moment(client.dob.date).format("DD/MM/YYYY")}</P></Text>
                    </ContainerInfo>
                  </ContainerDetails>
                  <ContainerDetails>
                    <Tittle>Localization</Tittle>
                    <LocationOn sx={{ color: '#12b80f', fontSize: '30px' }} />
                    <ContainerInfo>
                      <Text><Flag sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.location.country}</P></Text>
                      <Text><LocationCity sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.location.city}, {client.location.street.name}, {client.location.street.number}</P></Text>
                      <Text><Signpost sx={{ color: '#12b80f', fontSize: '22px' }} /> <P>{client.location.postcode}</P></Text>
                    </ContainerInfo>
                  </ContainerDetails>
                </ContainerMain>
              </Container>

            </Div>
          }
        }) : <img src={loading} />}
      </Main>
    </>
  )
}


