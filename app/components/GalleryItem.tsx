import React from "react"
import PixelatedImage from "./PixelatedImage"

interface GalleryItemProps {
  image?: string
  video?: string
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, video }) => {
  return (
    <div className="gallery-item">
      {image && (
        <PixelatedImage
          src={image}
          alt="Gallery Item"
          className="gallery-image"
        />
      )}
      {video && (
        <video src={video} className="gallery-video" controls>
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default GalleryItem
