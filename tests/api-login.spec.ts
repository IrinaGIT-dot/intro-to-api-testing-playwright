import { expect, test } from '@playwright/test'
import { LoginDto } from './dto/login-dto'
import { describe } from 'node:test'
const serviceURL = 'https://backend.tallinn-learning.ee/'
const loginPath = 'login/student'

describe('API login tests', () => {
  test('Login with correct data', async ({ request }) => {
    const requestBody = LoginDto.createLoginWithCorrectData()
    const response = await request.post(`${serviceURL}${loginPath}`, {
      data: requestBody,
    })
        //const responseBody = await response.text()
    expect(response.status()).toBe(200)
    })

  test('Login with incorrect data', async ({ request }) => {
    const requestBody = LoginDto.createLoginWithIncorrectData()
    const response = await request.post(`${serviceURL}${loginPath}`, {
      data: requestBody,
    })
    //const responseBody = await response.text()
    expect(response.status()).toBe(401)
  })
  })