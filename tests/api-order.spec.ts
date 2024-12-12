import { expect,  test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { OrderDto } from './dto/order-dto'

test('Verify that valid id receive code 200', async ({request}) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/1')
  expect(response.status()).toBe(StatusCodes.OK)
  }
)

test('Verify that inactive id receive code 400', async ({request}) => {
    const response = await request.get('https://backend.tallinn-learning.ee/test-orders/77')
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Verify that invalid id receive code 400', async ({request}) => {
    const response = await request.get('https://backend.tallinn-learning.ee/test-orders/-1')
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Verify that on-numeric id receive code 400', async ({request}) => {
    const response = await request.get('https://backend.tallinn-learning.ee/test-orders/a')
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Verify that empty id receive code 500', async ({request}) => {
    const response = await request.get('https://backend.tallinn-learning.ee/test-orders/')
    expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
  }
)

test('Update order with valid api_key, id and body should receive code 200', async ({request}) => {
  const requestHeaders = {
    'api_key': '1234567890123456',
  };
  const requestBody = OrderDto.createdOrderWithCorrectData()
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
    headers: requestHeaders,
    data: requestBody,
    }
    )
  expect(response.status()).toBe(StatusCodes.OK)
    console.log('response body:', await response.json())
}
)

test('Update order status to \'INPROGRESS\' with valid api_key, id and body should receive code 200', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.updateOrderStatus()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.OK)
  console.log('response body:', await response.json())
  }
)

test('Update order status to \'DELIVERED\' with valid api_key, id and body should receive code 200', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.updateOrderStatusToDelivered()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.OK)
    console.log('response body:', await response.json())
  }
)

test('Update order with invalid api_key, valid id and body should receive code 401', async ({request}) => {
    const requestHeaders = {
      'api_key': '12345678901234',
    };
    const requestBody = OrderDto.updateOrderStatus()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  }
)

test('Update order with valid api_key, body and invalid id should receive code 400', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.updateOrderStatus()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Update order with valid api_key, id and body with incorrect value in status field should receive code 400', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.updateOrderStatusToClosed()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Update order with valid id and body, without api_key should receive code 401', async ({request}) => {
    const requestHeaders = {
      'api_key': '',
    };
    const requestBody = OrderDto.updateOrderStatus()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  }
)

test('Update order with valid api_key and body, without id should receive code 405', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.updateOrderStatus()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  }
)

test('Update order with valid api_key and body, with invalid id should receive code 400', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.updateOrderStatus()
    const response = await request.put('https://backend.tallinn-learning.ee/test-orders/11', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Delete an order data with valid api_key, id and body, response should receive code 204', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.createdOrderWithCorrectData()
    const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.NO_CONTENT)
  }
)

test('Delete an order data with an invalid id and valid api_key, response should receive code 400', async ({request}) => {
    const requestHeaders = {
      'api_key': '1234567890123456',
    };
    const requestBody = OrderDto.createdOrderWithCorrectData()
    const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/11', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  }
)

test('Delete an order data with a valid id and invalid api_key, response should receive code 401', async ({request}) => {
    const requestHeaders = {
      'api_key': '12345678901234',
    };
    const requestBody = OrderDto.createdOrderWithCorrectData()
    const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  }
)

test('Delete an order data with a valid id and without api_key, response should receive code 401', async ({request}) => {
    const requestHeaders = {
      'api_key': '',
    };
    const requestBody = OrderDto.createdOrderWithCorrectData()
    const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/1', {
        headers: requestHeaders,
        data: requestBody,
      }
    )
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  }
)
