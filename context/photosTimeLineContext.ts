import { createContext } from "react";
import { IUser } from "services/types/authTypes";
import { IPhoto } from "services/types/photoTypes";


export interface IPhotosTimeLineContext {
    photos:IPhoto[],
    setPhotos(photos:IPhoto[]):void,
}

const PhotosTimeLineContext = createContext<IPhotosTimeLineContext>(null)


export default PhotosTimeLineContext