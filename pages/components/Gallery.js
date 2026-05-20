import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ images }) {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    if (!images) return null

    const openLightbox = (index, event) => {
        event.preventDefault()
        setCurrentImage(index)
        setLightboxIsOpen(true)
    }

    return (
        <div className="gallery-grid">
            {images.map((obj, i) => (
                <div className="gallery-item" key={i} onClick={(e) => openLightbox(i, e)}>
                    <Image
                        alt={obj.caption}
                        src={obj.thumbnail}
                        width={400}
                        height={500}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="gallery-overlay">
                        <h3>{obj.caption}</h3>
                        <p>{obj.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
