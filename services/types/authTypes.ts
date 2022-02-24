export interface ILogin {
    username:string
    password:string
}

export interface IRegister {
    username:string
    password:string
    name:string
    email:string
}

export interface IUser  {
    token:string
        id:string
        email: string
        name: string
        username: string
        myPhotosId: Array<string>
        photosLike: Array<string>
    
}

