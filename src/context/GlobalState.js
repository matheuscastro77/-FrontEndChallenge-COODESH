import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext"
import { BASE_URL } from "../constants/url";
const GlobalState = (props) => {

    const [clients, setClients] = useState([])
    const [allClients, setAllClients] = useState([])
    const [pagination, setPagination] = useState(1)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [searchName, setSearchName] = useState('')
    const [searchCountry, setSearchCountry] = useState('')
    const [selectGender, setSelectGender] = useState('')
    const [error, setError] = useState('')

    const GetClients = () => {
        axios.get(`${BASE_URL}?page=${(1) * pagination}&results=12&seed=abc`)
        .then((res) => {
          setClients(res.data.results)
        })
        .catch((err) => {
          if(err.response.status === 503){
            setError("Whoa, ease up there cowboy. You've requested 20192…nd spare some bandwidth for other users please :)")
          }
          console.log(err.response)
        })
      }

      


    useEffect(() => {
        GetClients()
 }, [pagination]);

   
    return (
        <GlobalStateContext.Provider value ={{clients, error, setError, selectGender, setSelectGender, searchCountry, setSearchCountry, setClients, pagination, setPagination, isModalVisible, setIsModalVisible, searchName, setSearchName, allClients, setAllClients}}>
            {props.children}
        </GlobalStateContext.Provider> 
    )
}
export default GlobalState
