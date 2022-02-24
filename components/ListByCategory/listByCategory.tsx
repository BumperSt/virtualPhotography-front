import { NextPage } from "next"
import { useEffect, useState } from "react"
import photo from "../../services/photo"
import { IPhoto } from "../../services/types/photoTypes"
import Image from "next/image"
import { Container, ImageContentDiv, ImageDiv } from "./listByCategoryStyle"
import { Descreption } from "../ShowImage/showImageStyle"

const ShowImage : NextPage = () => {

    const [photos, setPhotos] = useState<Array<IPhoto> | null>(null)

    useEffect(() => {
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

    return(
        <Container>

            {
                    photos?.map((photo) => (
                        <ImageDiv>

                            <ImageContentDiv>
                                <Image src={photo.imageUrl} layout="fill" alt={photo.description}/>=
                            </ImageContentDiv>
                        </ImageDiv>

                    ))
            }

        </Container>
    )
}

export default ShowImage