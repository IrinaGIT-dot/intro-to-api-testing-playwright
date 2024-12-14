import { expect, test } from '@playwright/test'
import { LoginDto } from './dto/login-dto'
import { StatusCodes } from 'http-status-codes'
const serviceURL = 'https://backend.tallinn-learning.ee/'
const loginPath = 'login/student'

test('Login with correct data and check that jwt structure is standard', async ({ request }) => {
  const requestBody = LoginDto.createLoginWithCorrectData()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.OK)
  console.log('Response:', response)
  const responseHeader = response.headers()['authorization']
  expect(responseHeader).toBeDefined()
  const bearerPrefix = 'Bearer '
  const jwt = responseHeader.slice(bearerPrefix.length)
  const jwtStandard = /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/
  expect(jwt).toMatch(jwtStandard)
})

test('Login with incorrect data', async ({ request }) => {
  const requestBody = LoginDto.createLoginWithIncorrectData()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

test('Login with incorrect HTTP method', async ({ request }) => {
  const requestBody = LoginDto.createLoginWithIncorrectData()
  const response = await request.patch(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
})
