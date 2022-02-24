import onlyGuest from '@/components/hoc/only-guest'
import Login from '@/components/Login/login'
import type { NextPage } from 'next'

const LoginPage : NextPage = () => {
  return (
    <Login/>
  )
}

export default onlyGuest(LoginPage)
