import styled from 'styled-components'


export const  ContainerHeader = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    position: fixed;
    width: 20vw;
    height: 100vh;
    z-index: 1000;
    padding-inline: 3rem;
    padding-block: 2rem;
`
export const HeaderButtonDiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
`
export const HeaderButton = styled.button`
    background-color:black;
    color:white;
    height:4rem;
    margin-block:1rem;
    font-size: 1.5rem;
    text-align:start;
    transition: all 0.5s;
    :hover{
        cursor:pointer;
        transform: scale(1.2);
    }
`
export const Logout = styled.button`
    background-color:blue;
    color:white;
    height:3rem;
    width: 5rem;
    border:none;
    align-self: flex-end;
    position:absolute;
    bottom: 0;
    :hover{
        cursor:pointer;
        transform: scale(1.2);
    }
`