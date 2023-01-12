import supertest from 'supertest'
import main from '../index'
import { promises as fs } from 'fs'
import path from 'path'
import { newImagePath } from '../utilities/imageResize'

const request: supertest.SuperTest<supertest.Test> = supertest(main)

describe('Test responses from endpoints....', (): void => {
  describe('endpoint: /', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/')
      expect(response.status).toBe(200)
    })
  })

  describe('endpoint: /api/getImages....2', (): void => {
    it('gets /api/getImages?filename=fjord', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/getImages?filename=fjord'
      ) //Here should be 404 since there is a try catch block of the images without parameters
      expect(response.status).toBe(200)
    })

    it('gets /api/getImages?filename=fjord&width=199&height=199', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/getImages?filename=fjord&width=199&height=199'
      )
      expect(response.status).toBe(200)
    })

    it('gets /api/getImages?filename=fjord&width=abc&height=200', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/getImages?filename=fjord&width=abc&height=200'
      )
      expect(response.status).toBe(404)
    })

    it('should return a 404 error', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api/getImages')
      expect(response.status).toBe(404)
    })
  })

  describe('endpoint: /foo', (): void => {
    it('should return 404 invalid endpoint', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/foo')

      expect(response.status).toBe(404)
    })
  })
})

// Erase test file. Test should not run on productive system to avoid cache loss
afterAll(async (): Promise<void> => {
  const resizedImagePath: string = path.resolve(newImagePath('fjord', 199, 199))

  try {
    await fs.access(resizedImagePath)
    fs.unlink(resizedImagePath)
  } catch {
    // intentionally left blank
  }
})
