import styled from "styled-components";
import { FcLikePlaceholder } from 'react-icons/fc';



export const ContainerImagens = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    

`
export const AlingRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
export const LikeIcon = styled(FcLikePlaceholder)<{liked: boolean}>`
    width: 3rem;
    height: 3rem;
    align-self: center;
    ${({liked}) => liked&& `
        & path {
            fill: red;
        }
        `}

    :hover{
        cursor:pointer;
        transform: scale(1.2);
        & path {
            fill: red;
        }
    }
    margin-left: 3rem;
`


export const ImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    border-bottom: 3px solid black;
`

export const ImageContentDiv = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    width: 900px;
    height:500px;
`

export const Descreption = styled.h1`
    font-size:1rem;
    align-self: center;
`

export const Title = styled.h1`
    font-size:1rem;
    align-self: center;
`