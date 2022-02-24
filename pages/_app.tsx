import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContext, { IUserContext } from 'context/userContext'
import { useEffect, useState } from 'react'
import { IUser } from 'services/types/authTypes'
import auth from 'services/auth'
import LoadingBar from 'react-top-loading-bar'
import Header from '@/components/Header/header'

function MyApp({ Component, pageProps }: AppProps) {
  


  
  const clearAuth = () => {
    setUser(null)
    localStorage.removeItem('@token')
  }

  const logOut = () => {
    auth.logout().then(() => {
      clearAuth()
    })
  }


  const [user, setUser] = useState<IUser>(null)
  const userValue: IUserContext = { user, setUser, logOut }
  const [firstLoad, setFirstLoad] = useState(false)

  useEffect(() => {
    if (!user) {
      auth.get()
        .then(({ data }) => {
          setUser(data)
        })
        .catch(() => {
          setFirstLoad(true)

        })
        .finally(() => {
        })
    } else {
      setFirstLoad(true)
    }
  }, [])

  useEffect(() => {
    if (user) {      
      setFirstLoad(true)
    }
  }, [user])


  return (firstLoad ) ?
        <UserContext.Provider value={userValue}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Header />
            <Component {...pageProps} />
          </div>
        </UserContext.Provider>
      :
        <LoadingBar 
          height={5}
          color="#FF9900" 
        />
    
}

export default MyApp
