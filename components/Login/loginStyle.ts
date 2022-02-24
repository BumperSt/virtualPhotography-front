import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    width:80vw;
    height:100vh;
    justify-content:center;
    align-items:center;
    align-self: flex-end;
    background: black;
`

export const AlingLogin = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius: 60px;
    background: white;
    padding-block: 2rem;

    
`

export const Input = styled.input`
    margin-inline: 5rem;
    background: black;
    justify-self: center;
    margin-top: 1rem;
    color: white;
    width: 20rem;
    height: 3rem;
    padding:.5rem;
`

export const LoginButton = styled.button`
    background-color:blue;
    color:white;
    border-radius:60px;
    width:8rem;
    height:2rem;
    margin-top:1rem;
    border: 0px;
    transition: all .2s;
    :hover{
        transform: scale(1.2);
        cursor:pointer;
    }
`

export const GoToRegister = styled.p`
    color:blue;
    font-size:1rem;
    :hover{
        cursor:pointer;
    }
`