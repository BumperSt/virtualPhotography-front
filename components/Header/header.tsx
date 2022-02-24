import UserContext from "context/userContext"
import { NextPage } from "next"
import Router  from "next/router"
import { useContext } from "react"
import { IUser } from "services/types/authTypes"
import { ContainerHeader, HeaderButton, HeaderButtonDiv, Logout } from "./headerStyle"



const Header = () => {

    const {user} = useContext(UserContext)

    const {logOut} = useContext(UserContext)

    const pages = [
        {
            name:"Pagina Inicial",
            url:'/'
        },
        {
            name:"Jogos",
            url:'/jogos'
        },
        {
            name:"Categorias",
            url:"/categorias"
        }
    ]

    return(
        <ContainerHeader>
            <HeaderButtonDiv>

            {
                pages.map((page) => (
                    <HeaderButton onClick={() => Router.push(page.url)}>{page.name}</HeaderButton>
                ))
            }
             
            {
                user ?
                    <Logout onClick={() => logOut()}>Logout</Logout>
                :
                    <Logout onClick={() => Router.push('/login')}>Login</Logout>

            }
            </HeaderButtonDiv>


        </ContainerHeader>
    )
}

export default Header