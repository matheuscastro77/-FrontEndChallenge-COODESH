import React, { useContext, useEffect } from 'react'
import HeaderClients from '../../components/HeaderClients/HeaderClients'
import GlobalStateContext from '../../context/GlobalStateContext'
import moment from 'moment'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'; import ClientDetail from '../../components/ClientDetail/ClientDetail'
import { Button, ButtonPag, configImg, DivError, Container, ContainerButton, DivButton, DivList, DivTittles, H2, Main, Input, ContainerInfos, ButtonSearch, ContainerSearch, ContainerSearchTittle } from './styled'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import loading from '../../assets/loading.gif'

const ListClients = () => {

  const { clients, error, setError, input, setInput, isModalVisible, setIsModalVisible, setPagination, pagination, search, setSearch, allClients, setAllClients } = useContext(GlobalStateContext)

  const modal = (client) => {
    setIsModalVisible(true)
    localStorage.setItem("id", client.login.uuid)
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `/clients/${client.login.uuid}`);
    }
  }

  const OnChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const MorePag = () => {
    setPagination(pagination + 1);
  }

  const LessPag = () => {
    setPagination(pagination > 2 ? pagination - 1 : 1);
  }

  const searchAll = () => {
    if (search.length > 0) {
      return allClients
    } else {
      return clients
    }
  }

  const GetAllClients = () => {
    axios.get(`${BASE_URL}?results=2000`)
    .then((res) => {
      setAllClients(res.data.results)
    })
    .catch((err) => {
      if(err.response.status === 503){
        setError("Whoa, ease up there cowboy. You've requested 20192…nd spare some bandwidth for other users please :)")
      }
      console.log(err.response)
    })
  }

  useEffect(() => {
    GetAllClients()
}, []);

  return (
    <Main>
      <HeaderClients />
      <Container>
        <DivTittles>
          <ContainerSearch>
          <ContainerSearchTittle><H2>Name <ButtonSearch onClick={() => setInput(!input)}> <ManageSearchIcon fontSize='medium' /> </ButtonSearch>
          </H2></ContainerSearchTittle>
          {input === true ? <Input
            placeholder="Name"
            type="text"
            onChange={OnChangeSearch}
            value={search}
          /> : null}</ContainerSearch>
          <H2>Gender</H2>
          <H2>Birth</H2>
          <H2>Country</H2>
          <H2>Actios</H2>
        </DivTittles>
          {searchAll() && searchAll().length > 0 ? searchAll()
            .filter(item => {
             const first = (`${item.name.first} `)
             const last = (`${item.name.last}`)
             const full_name = first.concat(last)
              return full_name.toLocaleLowerCase().trim().includes(search.trim().toLocaleLowerCase())
            })
            .map((client) => {
              return (
                <ContainerInfos key={client.cell}>
                  <DivList>
                    <p>{client.name.first} {client.name.last}</p>
                  </DivList>
                  <DivList>
                    <p>{client.gender[0].toUpperCase() + client.gender.slice(1)}</p>

                  </DivList>
                  <DivList>
                    <p>{moment(client.dob.date).format("DD/MM/YYYY")}</p>
                  </DivList>
                  <DivList>
                    <p>{client.location.country}</p>
                  </DivList>
                  <DivButton>
                    <Button onClick={() => modal(client)}>Details</Button>
                    {isModalVisible ? <ClientDetail /> : null}
                  </DivButton>
                </ContainerInfos>
              )
            }) : <DivError><img style={configImg} src={loading}/> {error} </DivError> }
      </Container>
      <ContainerButton>
        <ButtonPag onClick={() => LessPag()}>Previous Page</ButtonPag>
        <ButtonPag onClick={() => MorePag()}>Next Page</ButtonPag>
      </ContainerButton>
    </Main>
  )
}

export default ListClients
