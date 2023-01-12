import sharp from 'sharp'
import path from 'path'

const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(path.resolve(`./assets/${filename}.jpeg`))
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover,
    })
    .toBuffer()
}

const newImagePath = (
  filename: string,
  height: number,
  width: number
): string => {
  return `./assets/full/${filename}${height}x${width}.jpeg`
}

export { resizeImage, newImagePath }
