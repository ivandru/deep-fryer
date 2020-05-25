import React, { useState, useEffect } from 'react'
import ImageUploader from 'react-images-upload'

const ImageUpload = (props) => {
  const [picture, setPicture] = useState()
  const [pictureURL, setPictureURL] = useState()

  useEffect(() => {
    if (picture) {
      var reader = new FileReader()
      var url = reader.readAsDataURL(picture)
      console.log(JSON.stringify(picture))
      setPictureURL(url)
    }
    return () => {}
  }, [picture])

  const onDrop = (p) => {
    setPicture(p[0])
  }

  return (
    <>
      <h3>{props.title}</h3>

      <ImageUploader {...props} singleImage={true} withIcon={true} onChange={onDrop} imgExtension={['.jpg', '.gif', '.png', '.gif']} maxFileSize={5242880} />
      <img src={picture} alt={'kek'} />
    </>
  )
}

export default ImageUpload
