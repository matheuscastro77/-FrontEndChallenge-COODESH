import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 91.8vh;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 1600px){
    height: 91.8vh;
  }

  @media screen and (max-width: 1366px){
    height: 91.7vh;
  }

  @media screen and (max-width: 1024px){
    height: 91.8vh;
  }

  @media screen and (max-width: 414px){
    height: 113vh;
    width: 100%;
  }
  
`
export const ContainerTitles = styled.div`
  background-color: #f3f7fa;
  width: 61.6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1600px){
    width: 62.46%;
  }

`

export const Person = styled.div`
  min-width: 39.4%;
  background-color: #f3f7fa;
  
`

export const Img = styled.img`
  margin-top: 15px;
  height: 89.8vh;
  width: 90%; 

  @media screen and (max-width: 1366px){
    height: 89.7vh;
  }

  @media screen and (max-width: 1024px){
    height: 92.8vh;
  }

  @media screen and (max-width: 1024px){
    width: 87%; 
  }

  @media screen and (max-width: 414px){
    display: none;
  }
`

export const H1 = styled.h1`
  color: #12b80f;

  @media screen and (max-width: 1024px){
    font-size: 1.8rem ;
  }
`

export const H2 = styled.h2`
  font-weight: 300;
  text-align: center;
  width: 35%;
  color: #12b80f;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  @media screen and (max-width: 1024px){
    font-size: 1.2rem ;
  }

`

export const Button = styled.button`
  margin-top: 2%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  width: 11%;
  height: 6%;
  border-radius: 5px ;
  border: 0px ;
  font-size: 1.5rem;
  background-color: #12b80f ;
  color: #f3f7fa;
  :hover{
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.5s ease 0s;
  } 
  
  @media screen and (max-width: 1366px){
    width: 15%;
  }

  @media screen and (max-width: 1024px){
    width: 18%;
    height: 5%;
  }
`
