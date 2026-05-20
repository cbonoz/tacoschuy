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
        <div>
            <div className="row">
                {images.map((obj, i) => (
                    <article className="6u 12u$(xsmall) work-item" key={i}>
                        <a
                            className="fit thumb image-margin"
                            href={obj.src?.src || '#'}
                            onClick={(e) => openLightbox(i, e)}
                        >
                            <Image alt={obj.caption} src={obj.thumbnail} width={300} height={400} />
                        </a>
                        <h3>{obj.caption}</h3>
                        <p>{obj.description}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}
