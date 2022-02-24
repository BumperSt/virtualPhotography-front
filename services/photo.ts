import api from './api'
import { IPhoto } from './types/photoTypes'

const prefix = (route: string) => {
    return `photo/${route}`
}



export default {
    uploadPhoto : (data:any) => api.post<IPhoto>(prefix('uploadPhoto'), data),
    getAllPhotos : () => api.get<Array<IPhoto>>(prefix('getAllPhotos')),
    mostLikeInWeak : () => api.get<IPhoto[]>(prefix(`mostLikeInWeak`)),
    sendLike : (id : string) => api.get(prefix(`sendLike?photoId=${id}`))
}


