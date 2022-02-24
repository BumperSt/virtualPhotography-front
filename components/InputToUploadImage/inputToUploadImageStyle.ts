import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding-block: 1rem;
`

export const TitleField = styled.input`
    width: 50%;
    font-size: 1.5rem;
    text-align:center;

`
export const DescrepetionField = styled.textarea`
    margin-top:1rem;
    width: 50%;
    font-size: 1.5rem;
    text-align:center;

`

export const ImageContent = styled.div`
    display:flex;
    position: relative;
    width: 640px;
    height:360px;
`

export const InputFiled = styled.input`
    color:white;
`

export const PublishButton = styled.button`
    margin-top: 1rem;
    width: 15%;
    height: 2rem;
    border-radius: 10px;
    border: none;
    background-color:white;
    margin-bottom: 1rem;
    :hover{
        transform: scale(1.2);
        cursor:pointer;
    }
`