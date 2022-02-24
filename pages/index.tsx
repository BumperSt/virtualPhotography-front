import withAuth from '@/components/hoc/witch-auth'
import { Container } from '@/components/Home/homeStyle'
import { InputToUploadImage } from '@/components/InputToUploadImage/inputToUploadImage'
import ShowImage from '@/components/ShowImage/showImage'
import PhotosTimeLineContext, { IPhotosTimeLineContext } from 'context/photosTimeLineContext'
import UserContext from 'context/userContext'
import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { IPhoto } from 'services/types/photoTypes'

const HomePage : NextPage = () => {
  
  const {user} = useContext(UserContext)
  const [photos, setPhotos] = useState<IPhoto[]>(null)
  const photosTimeLine: IPhotosTimeLineContext = { photos, setPhotos }

  return (
    <PhotosTimeLineContext.Provider value={photosTimeLine}>
      <Container>
        {
          user &&
            <InputToUploadImage/>
        }
        <ShowImage/>
      </Container>
    </PhotosTimeLineContext.Provider>

  )
}

export default HomePage
