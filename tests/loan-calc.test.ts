import { loanCalcDto } from './dto/loan-calc-dto'
import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
const serviceURL = 'https://backend.tallinn-learning.ee/'
const loginPath = 'api/loan-calc/decision'

test('Calculate positive case with random data should receive 200', async ({ request }) => {
  const requestBody = loanCalcDto.createCalcWithRandomData()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect.soft(response.status()).toBe(StatusCodes.OK)
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  const responseBody = await response.json()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskLevel).toBeDefined()
  expect.soft(responseBody.riskPeriods).toBeDefined()
})

test('Calculate positive case Low risk should receive 200', async ({ request }) => {
  const requestBody = loanCalcDto.createCalcForLowRisk()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect.soft(response.status()).toBe(StatusCodes.OK)
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  const responseBody = await response.json()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskLevel).toBe('Low Risk')
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.riskDecision).toBe('positive')
})

test('Calculate positive case Medium risk should receive 200', async ({ request }) => {
  const requestBody = loanCalcDto.createCalcForMediumRisk()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect.soft(response.status()).toBe(StatusCodes.OK)
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  const responseBody = await response.json()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskLevel).toBe('Medium Risk')
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.riskDecision).toBe('positive')
})

test('Calculate positive case High risk should receive 200', async ({ request }) => {
  const requestBody = loanCalcDto.createCalcForHighRisk()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect.soft(response.status()).toBe(StatusCodes.OK)
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  const responseBody = await response.json()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskLevel).toBe('High Risk')
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.riskDecision).toBe('positive')
})

test('Calculate positive case Very high risk should receive 200', async ({ request }) => {
  const requestBody = loanCalcDto.createCalcForVeryHighRisk()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect.soft(response.status()).toBe(StatusCodes.OK)
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  const responseBody = await response.json()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskLevel).toBe('Very High Risk')
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.riskDecision).toBe('negative')
})

test('Calculate positive case for underage person should receive 200', async ({ request }) => {
  const requestBody = loanCalcDto.createCalcForUnderagePerson()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect.soft(response.status()).toBe(StatusCodes.OK)
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  const responseBody = await response.json()
  expect.soft(responseBody.riskScore).toBeDefined()
  expect.soft(responseBody.riskLevel).toBe('Low Risk')
  expect.soft(responseBody.riskPeriods).toBeDefined()
  expect.soft(responseBody.riskDecision).toBe('positive')
})

test('Calculate negative case with negative amount in debt should receive 400', async ({ request, }) => {
  const requestBody = loanCalcDto.createLoanCalculationWithNegativeData()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  console.log('response status:', response.status())
})

test('Calculate negative case income = 0 should receive 400', async ({ request, }) => {
  const requestBody = loanCalcDto.createLoanCalculationWithZeroIncome()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  console.log('response status:', response.status())
})

test('Calculate negative case without input data should receive 400', async ({ request, }) => {
  const requestBody = loanCalcDto.createLoanCalculationWithEmptyData()
  const response = await request.post(`${serviceURL}${loginPath}`, {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  console.log('response status:', response.status())
})