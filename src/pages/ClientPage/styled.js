import styled from "styled-components";

export const Main = styled.div`
  height: 91.7vh;
  width: 100%;
  background-color: #f3f7fa; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Div = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1366px){
    height: 85vh;
  }
`

export const Container = styled.div`
  background-color: #f3f7fa; 
  height: 60vh;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1600px){
    width: 80%;
    height: 65vh;
  }

  @media screen and (max-width: 1366px){
    width: 90%;
    height: 75vh;
  }

  @media screen and (max-width: 1024px){
    width: 95%;
    height: 60vh;
  }
`

export const ContainerPicName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 25%;
`

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerDetails = styled.div`
  width: 31%;
  margin: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 30vh;
`
export const ContainerInfo = styled.div`
  min-height: 17.5vh;
  margin-left: 8%;
  width: 90%;

  @media screen and (max-width: 1366px){
    min-height: 20.5vh;
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  height: 4vh;

  @media screen and (max-width: 1366px){
    margin-top: 2%;
  }
`

export const Tittle = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 0px;
  background-color: #12b80f;
  color: #f3f7fa;
  border-radius: 15px 15px 0px 0px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const H2 = styled.h2`
  border-radius: 10px;
  padding: 5px;    
  box-shadow: rgba(18, 184, 15) 0px 0px 10px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media screen and (max-width: 1366px){
    font-size: 1.3rem;
  }
`

export const Button = styled.button`
  margin-bottom: 5%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 200;
  width: 10%;
  border-radius: 5px ;
  border: 0px ;
  font-size: 1.5rem;
  background-color: #12b80f ;
  color: #f3f7fa;
  height: 5vh;
  :hover{
    cursor: pointer;
    transform: scale(1.06);
    transition: all 0.5s ease 0s;
  }
  
  @media screen and (max-width: 1600px){
    width: 10%;
    font-size: 1.2rem;
    height: 4.5vh;
  }

  @media screen and (max-width: 1366px){
    width: 12%;
    height: 4.5vh;
  }

  @media screen and (max-width: 1024px){
    width: 15%;
    height: 4.5vh;
  }

  @media screen and (max-width: 1768px){
    width: 12%;
    height: 4.5vh;
  }
`

export const Img = styled.img`
    width: 50%;
    border-radius: 50%;
`

export const P = styled.p`
  padding: 1px;
  display: flex;
  align-items: center;
  margin-left: 3%;
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media screen and (max-width: 1366px){
    font-size: 1rem;
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




