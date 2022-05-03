import styled from 'styled-components'

export const Main = styled.div `
    border-bottom: 2px solid #12b80f;
    justify-content: flex-end;
    align-items: center;
    height: 8vh;
    display: flex;
    background-color: #f3f7fa;
`

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    height: 7vh;
    justify-content: center;
    align-items: center;
    width: 10%;
    margin-right: 28%;
`

export const Img = styled.img `
    width: 35%;
    margin-right: 3%;
`

export const H1 = styled.h1 `
    font-weight: 200;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: #12b80f;
`

export const Container = styled.h4 `
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    height: 3vh;
    align-items: center;
    width: 12%;
    justify-content: space-between;

    @media screen and (max-width: 1024px){
        width: 15%;
    }

    @media screen and (max-width: 1600px){
        width: 15%;
    } 
`

export const H4 = styled.button `
    font-weight: 200;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: #12b80f;
    background-color: transparent;
    border: 0px;
    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1024px){
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1366px){
        font-size: 0.9rem;
    }
    
`