import React, { useContext, useEffect } from 'react'
import HeaderClients from '../../components/HeaderClients/HeaderClients'
import GlobalStateContext from '../../context/GlobalStateContext'
import moment from 'moment'
import ClientDetail from '../../components/ClientDetail/ClientDetail'
import { Button, ButtonPag, configImg, P, DivError, Container, ContainerButton,
  DivButton, DivList, DivTittles, H2, Main, Input, Select, ContainerInfos, 
  ContainerTittle } from './styled'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import loading from '../../assets/loading.gif'

const ListClients = () => {

  const { clients, error, setError, selectGender, setSelectGender, searchCountry, setSearchCountry, isModalVisible, 
    setIsModalVisible, setPagination, pagination, searchName, setSearchName, allClients, setAllClients } = useContext(GlobalStateContext)

  const modal = (client) => {
    setIsModalVisible(true)
    localStorage.setItem("id", client.login.uuid)
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `/clients/${client.login.uuid}`);
    }
  }

  const OnChangeSearch = (event) => {
    setSearchName(event.target.value)
  }

  const OnChangeCountry = (event) => {
    setSearchCountry(event.target.value)
  }

  const OnSelectGender = (event) => {
    setSelectGender(event.target.value)
  }

  const MorePag = () => {
    setPagination(pagination + 1);
  }

  const LessPag = () => {
    setPagination(pagination > 2 ? pagination - 1 : 1);
  }

  const searchAll = () => {
    if (searchName.length > 0) {
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
        if (err.response.status === 503) {
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
          <ContainerTittle>
            <ContainerTittle>
              <H2>Name</H2>
            
            <Input
              placeholder="Name"
              type="text"
              onChange={OnChangeSearch}
              value={searchName}
            />
            </ContainerTittle>
          </ContainerTittle>
          <ContainerTittle>
            <ContainerTittle>
              <H2>Gender</H2>
            <Select
              placeholder="Gender"
              name="sort"
              defaultValue={""}
              onChange={OnSelectGender}
              value={selectGender}>
              <option value={""} disabled>Gender</option>
              <option value="All"> All </option>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </Select>
            </ContainerTittle>
          </ContainerTittle>
          <ContainerTittle>
            <ContainerTittle>
              <H2>Nationality</H2>
            <Input
              placeholder="Nationality"
              type="text"
              onChange={OnChangeCountry}
              value={searchCountry}
            />
            </ContainerTittle>
          </ContainerTittle>
          <ContainerTittle>
            <H2>Birth</H2>
          </ContainerTittle>
          <ContainerTittle>
            <H2>Actios</H2>
          </ContainerTittle>
        </DivTittles>
        {searchAll() && searchAll().length > 0 ? searchAll()
          .filter(item => {
            const first = (`${item.name.first} `)
            const last = (`${item.name.last}`)
            const full_name = first.concat(last)
            return full_name.toLocaleLowerCase().trim().includes(searchName.trim().toLocaleLowerCase())
          })
          .filter(item => {
            return item.location.country.toLocaleLowerCase().includes(searchCountry.toLocaleLowerCase())
          })
          .sort((a, b) => {
            switch (selectGender) {
              case "male":
                return b.gender.localeCompare(a.gender)
              case "female":
                return a.gender.localeCompare(b.gender)
              default:
            }
          })
          .map((client) => {
            return (
              <ContainerInfos key={client.cell}>
                <DivList>
                  <P>{client.name.first} {client.name.last}</P>
                </DivList>
                <DivList>
                  <P>{client.gender[0].toUpperCase() + client.gender.slice(1)}</P>
                </DivList>
                <DivList>
                  <P>{client.location.country}</P>
                </DivList>
                <DivList>
                  <P>{moment(client.dob.date).format("DD/MM/YYYY")}</P>
                </DivList>
                <DivButton>
                  <Button onClick={() => modal(client)}>Details</Button>
                  {isModalVisible ? <ClientDetail /> : null}
                </DivButton>
              </ContainerInfos>
            )
          }) : <DivError><img style={configImg} src={loading} /> {error} </DivError>}
      </Container>
      <ContainerButton>
        <ButtonPag onClick={() => LessPag()}>Previous Page</ButtonPag>
        <ButtonPag onClick={() => MorePag()}>Next Page</ButtonPag>
      </ContainerButton>
    </Main>
  )
}

export default ListClients
