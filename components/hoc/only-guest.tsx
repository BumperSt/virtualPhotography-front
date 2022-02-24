import { useContext, useEffect } from 'react'
import Router from 'next/router'
import UserContext from 'context/userContext'

const onlyGuest = Page => {

    const Guest = (props) => {
        const {user} = useContext(UserContext)
        useEffect(()=>{
            if(user){
                Router.push('/')
            }
        },[user])

        if(user){
            return <div>Loading...</div>
        }else{
            return <Page {...props} />
        }
    }

    return Guest
}


export default onlyGuest