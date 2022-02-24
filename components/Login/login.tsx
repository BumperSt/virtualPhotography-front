import { NextPage } from "next"
import { useContext, useState } from "react"
import auth from "services/auth"
import { AlingLogin, Container, GoToRegister, Input, LoginButton, } from "./loginStyle"
import UserContext from "../../context/userContext"

const Login : NextPage = () => {

    const {setUser} = useContext(UserContext)

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [login, setLogin] = useState(true)

    const MakeLogin = () => {
        if(username != '' && password != ''){
            auth.login({
                username,
                password,
            }).then((response) => {
                localStorage.setItem('@token', response.data.token)
                setUser(response.data)
            }).catch((error) => {
    
            })
        }

    }

    const MakeRegister = () => {
        if(username != '' && password != '' && username != '' && email != '' ) {
            auth.register({
                username,
                password,
                email,
                name
            }).then((response) => {
                localStorage.setItem('@token', response.data.token)
                setUser(response.data)
            }).catch((error) => {
    
            })
        }

    }


    if(login){
        return(
            <Container>
                <AlingLogin>
                    <Input placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <Input placeholder="Passsword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <LoginButton onClick={() => MakeLogin()}>Login</LoginButton>
                    <GoToRegister onClick={() => setLogin(false)}>Criar conta</GoToRegister>

                </AlingLogin>
                
            </Container>
        )
    }else{
        return(
            <Container>
                <AlingLogin>
                    <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <Input placeholder="Passsword" value={password} onChange={(e) => setPassword(e.target.value)}/>


                    <LoginButton onClick={() => MakeRegister()}>Registrar</LoginButton>
                    
                    <GoToRegister onClick={() => setLogin(true)}>Fazer login</GoToRegister>

                </AlingLogin>
                
            </Container>
        )
    }

}

export default Login