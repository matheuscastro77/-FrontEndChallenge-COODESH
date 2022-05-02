import styled from 'styled-components'

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  width: 200px;
  text-align: center;
  font-size: 1rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  
  @media screen and (max-width: 1366px){
    height: 5vh;
  }

  @media screen and (max-width: 1024px){
    width: 150px;
  }
`

export const Main = styled.div`
  background-color: #f3f7fa; 
  min-height: 100vh;
`

export const H2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  color: #12b80f;
  width: 110px;

  @media screen and (max-width: 1366px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`

export const Input = styled.input`
  width: 120px;
  height: 1.8vh;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0px 0px 0px 10px;
  outline: 0px;
`

export const ButtonSearch = styled.button`
  background-color: #f3f7fa;
  border: none;
  color:  #12b80f;
  :hover{
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 1.5% auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 1600px){
    width: 70%;
  }

  @media screen and (max-width: 1366px){
    width: 80%;
  }

  @media screen and (max-width: 1024px){
    width: 85%;
  }
`

export const ContainerButton =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin: 0% auto;
`

export const Button = styled.button`
  height: 2.5vh;
  background-color: #f3f7fa;
  border: 1px solid gray;
  width: 45%;
  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`

export const ButtonPag = styled.button`
  height: 2.5vh;
  background-color: #f3f7fa;
  border: 1px solid gray;
  width: 27%;
  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1600px){
    height: 3vh;
    width: 32%;
  }

  @media screen and (max-width: 1366px){
    width: 38%;
  }

  @media screen and (max-width: 1280px){
    width: 40%;
  }

  @media screen and (max-width: 1024px){
    width: 45%;
    font-size: 0.7rem;
  }
`

export const DivButton = styled.div`
  border-top: 1px solid black;
  height: 6vh;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivTittles = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;

  @media screen and (max-width: 1366px){
    height: 8.7vh;
  }
`

export const ContainerSearch = styled.div`
  min-height: 9vh;
`
export const ContainerSearchTittle = styled.div`
  height: 6vh;
  display: flex;
  justify-content: center;
`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: row;
`

export const DivError = styled.div`
  width: 60%;
  height: 72vh;
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

export const configImg = {
  "width": "35%",
  "height": "28vh"
}