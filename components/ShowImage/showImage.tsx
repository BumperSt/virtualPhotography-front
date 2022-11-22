import { NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import { AlingRow, ContainerImagens, Descreption, ImageContentDiv,  ImageDiv, LikeIcon, Title } from "./showImageStyle"
import photo from "../../services/photo"
import { IPhoto } from "../../services/types/photoTypes"
import Image from "next/image"
import UserContext from "context/userContext"
import PhotosTimeLineContext from "context/photosTimeLineContext"

const ShowImage : any = () => {

    const {photos, setPhotos} = useContext(PhotosTimeLineContext)
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        console.log(user)
        photo.getAllPhotos().then((response) => {
            setPhotos(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        if(photos){
            console.log(photos)

        }
    }, [photos])

    const sendLike = (photoId) => {
        if(user){
            photo.sendLike(photoId).then((response) => {
                photos[photos.findIndex(el => el._id === photoId)] = response.data.update
                setUser(response.data.user)
            })
            .catch((error) => {
                console.log(error)
            })
        }
        
    }

    return(
            <ContainerImagens>
            {
                    photos?.map((photo) => (
                        <ImageDiv>
                            <Title>{photo.name}</Title>
                            <ImageContentDiv>
                                <Image src={photo.imageUrl} layout="fill" alt={photo.description}/>
                            </ImageContentDiv>
                            <Descreption>{photo.tags}</Descreption>
                            <AlingRow>
                                <Descreption>{photo.likes}</Descreption>
                                <LikeIcon onClick={ () => sendLike(photo._id)} liked={user?.photosLike?.includes(photo._id)}/>
                            </AlingRow>

                            <Descreption>{photo.description}</Descreption>
                        </ImageDiv>

                    ))
            }
            </ContainerImagens>

    )
}

export default ShowImage