import styled from 'styled-components'

export const Main = styled.div`
  background-color: #f3f7fa; 
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin: 0.8% auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 1768px){
    width: 65%;
  }

  @media screen and (max-width: 1680px){
    width: 78%;
  }

  @media screen and (max-width: 1600px){
    width: 80%;
  }

  @media screen and (max-width: 1440px){
    width: 80%;
  }

  @media screen and (max-width: 1366px){
    width: 80%;
  }

  @media screen and (max-width: 1024px){
    width: 85%;
  }
  
`

export const DivTittles = styled.div`
  display: flex;
  flex-direction: row;
  width: 88%;
  justify-content: space-around;

  @media screen and (max-width: 1768px){
    width: 100%;
  }

  @media screen and (max-width: 1600px){
    height: 13.5vh;
  }

  @media screen and (max-width: 1440px){
    height: 13.5vh;
  }

   @media screen and (max-width: 1366px){
    height: 13.5vh;
  }

  @media screen and (max-width: 1280px){
    height: 13.5vh;
  } 

  @media screen and (max-width: 1152px){
    width: 90%;
  }

  @media screen and (max-width: 1024px){
    width: 95%;
  }

  @media screen and (max-height: 720px){
    height: 14.5vh;
  } 

  @media screen and (max-height: 664px){
    height: 16vh;
    width: 90%;
  }
`

export const ContainerTittle = styled.div`
  min-height: 9vh;
`

export const H2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  color: #12b80f;
  width: 90px;

  @media screen and (max-width: 1366px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`

export const Input = styled.input`
  width: 120px;
  height: 2vh;
  border-radius: 2px;
  border: 1px solid gray;
  padding: 0px 0px 0px 10px;
  outline: 0px;

  @media screen and (max-width: 1440px){
    height: 2.5vh;
  }

  @media screen and (max-width: 1366px){
    height: 2.5vh;
  }

  @media screen and (max-width: 1176px){
    height: 3vh;
  }
`

export const Select = styled.select`
  width: 120px;
  height: 2vh;
  border-radius: 2px;
  border: 1px solid gray;
  padding: 0px 0px 0px 10px;
  outline: 0px;

  @media screen and (max-width: 1440px){
    height: 3vh;
  }

  @media screen and (max-width: 1366px){
    height: 3vh;
  }

  @media screen and (max-width: 1176px){
    height: 3.5vh;
  }
`

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  justify-content: center;
  width: 230px;
  text-align: center;
  font-size: 1rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  
  @media screen and (max-width: 1680px){
    width: 268px;
  }

  @media screen and (max-width: 1600px){
    width: 255px;
  }

  @media screen and (max-width: 1440px){
    width: 225px;
  }

  @media screen and (max-width: 1366px){
    width: 212px;
  }

  @media screen and (max-width: 1280px){
    width: 192px;
  }

  @media screen and (max-width: 1176px){
    width: 180px;
  }

  @media screen and (max-width: 1152px){
    width: 175px;
  }

  @media screen and (max-width: 1024px){
    width: 150px;
  }
  
`

export const P = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 1366px){
    font-size: 0.9rem;
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

export const Button = styled.button`
  height: 3vh;
  background-color: #f3f7fa;
  border: 1px solid gray;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
    transform: scale(1.1);
  }
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

export const ContainerButton =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin: 0% auto;
  padding-bottom: 10px;
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

  @media screen and (max-width: 1768px){
    width: 39%;
    font-size: 0.8rem;
    height: 3.2vh;
  }

  @media screen and (max-width: 1600px){
    height: 3vh;
    width: 32%;
  }

  @media screen and (max-width: 1440px){
    height: 3vh;
    width: 36%;
  }

  @media screen and (max-width: 1366px){
    height: 3vh;
    width: 38%;
  }

  @media screen and (max-width: 1280px){
    width: 40%;
  }

  @media screen and (max-width: 1176px){
    width: 45%;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1024px){
    width: 45%;
    font-size: 0.7rem;
  }
`
  




















