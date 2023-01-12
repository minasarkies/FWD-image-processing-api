import express from 'express'
import path from 'path'
import { resizeImage, newImagePath } from '../../utilities/imageResize'
import { promises as fsPromises } from 'fs'
import fs from 'fs'

const images = express.Router()

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename as unknown as string
    const height = parseInt(req.query.height as unknown as string)
    const width = parseInt(req.query.width as unknown as string)
    const ImgPath: string = newImagePath(filename, height, width)
    if (isNaN(height) || isNaN(width)) {
      const newPath = ImgPath.replace('NaNxNaN', '')
      const newNewPath = newPath.replace('/full', '')
      res.sendFile(path.resolve(newNewPath))
    }
    //console.log(ImgPath)
    if (!fs.existsSync(ImgPath)) {
      const resizedImage = await resizeImage(filename, height, width)
      await fsPromises.writeFile(ImgPath, resizedImage)
    }
    res.sendFile(path.resolve(ImgPath))
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional'
    if (error instanceof Error) {
      errorMessage = error.message
    }
    console.log(errorMessage)
    //console.log('here')
  }
})

export default images
