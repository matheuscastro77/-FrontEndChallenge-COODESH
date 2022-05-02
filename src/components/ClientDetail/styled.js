import styled from "styled-components";

export const Main = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    background-color: #f3f7fa; 
    color: #000;
    width: 60%;
    height: 65vh;

    @media screen and (max-width: 1366px){
        width: 70%;
  }

  @media screen and (max-width: 1280px){
    height: 70vh;
  }

  @media screen and (max-width: 1024px){
    width: 90%;
  }
`

export const Button = styled.button`
    color: #12b80f;
    border: 0px;
    background-color: #f3f7fa;
    padding: 8px;
    font-size: 1.5rem;
    margin-top: 0.5%;
    margin-left: 95%;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
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

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerPicName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 25%;
`

export const Img = styled.img`
    width: 50%;
    border-radius: 50%;
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

export const ContainerInfo = styled.div`
    min-height: 17.5vh;
    margin-left: 8%;
    width: 90%;
`

export const P = styled.p`
    padding: 1px;
    display: flex;
    align-items: center;
    margin-left: 3%;
    font-size: 1.1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    height: 4vh;
`

export const H2 = styled.h2`
    border-radius: 10px;
    padding: 5px;
    box-shadow: rgba(18, 184, 15) 0px 0px 10px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

