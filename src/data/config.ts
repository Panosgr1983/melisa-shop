export const CLOUDINARY_BASE = 'https://res.cloudinary.com/duvtwanvc/image/upload'

export const IMAGE_TRANSFORM = 'f_auto,q_auto:eco,dpr_auto'

export const imageUrl = (publicId: string) =>
  `${CLOUDINARY_BASE}/${IMAGE_TRANSFORM}/${publicId}`
