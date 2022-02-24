import PhotosTimeLineContext from "context/photosTimeLineContext"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import photo from "services/photo"
import { Container, DescrepetionField, ImageContent, InputFiled, PublishButton, TitleField } from "./inputToUploadImageStyle"

export const InputToUploadImage = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const {photos, setPhotos} = useContext(PhotosTimeLineContext)

    const [name, setName] = useState("");
    const [descreption, setDescreption] = useState("");

    const inputChanged = (files) => {
        setImageFile(files[0])
        setImageUrl(URL.createObjectURL(files[0]))
    }

    const uploadImage = () => {
        let tags = 'aa'
        var bodyFormData = new FormData();
        bodyFormData.append('name', name);
        bodyFormData.append('description', descreption);
        bodyFormData.append('file', imageFile);
        bodyFormData.append('tags', tags);

        photo.uploadPhoto(bodyFormData).then((response) => {
            setName("")
            setImageFile(null)
            setDescreption("")
            let photosHere = photos
            console.log(photosHere)

            photosHere.splice(0, 0, response.data)
            console.log(photosHere)
            setPhotos(photosHere)
        }).catch((error) => {
            console.log(error);
        })
    }


    return(
        <Container>
                <TitleField type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Title"/>
                <DescrepetionField value={descreption} onChange={(e) => setDescreption(e.target.value)} name="descreption" placeholder="Imagem Descrições" />
                <InputFiled  onChange={(e) => inputChanged(e.target.files)} type="file"/>
                <PublishButton onClick={(e) =>uploadImage()}>Publicar</PublishButton>
                {
                    imageUrl &&
                    <ImageContent>
                        <Image src={imageUrl} layout="fill"/>
                    </ImageContent>
                }
        </Container>
    )
}