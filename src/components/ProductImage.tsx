import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
}

const PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="#f3f4f6" width="400" height="400"/><text fill="#9ca3af" font-family="sans-serif" font-size="16" text-anchor="middle" x="200" y="200">Image unavailable</text></svg>'
  )

const ProductImage = ({ src, alt, className = '' }: ProductImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      console.error(`[ImageError] Failed to load: ${src}`)
      setHasError(true)
      setImgSrc(PLACEHOLDER)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  )
}

export default ProductImage
