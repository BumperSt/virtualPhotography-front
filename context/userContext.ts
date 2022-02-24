import { createContext } from "react";
import { IUser } from "services/types/authTypes";


export interface IUserContext {
    user:IUser,
    setUser(user:IUser):void,
    logOut():void
}

const UserContext = createContext<IUserContext>(null)


export default UserContext