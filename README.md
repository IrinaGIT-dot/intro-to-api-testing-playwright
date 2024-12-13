Checklist
|Number|Method|Scenario|Test data|Expected status code|
|:---|:---|:---|:---|:---|
|1|GET|Verify that valid id returns correct order details|id = {1...10}|200|
|2|GET|Verify that inactive id returns error|id = 77|400|
|3|GET|Verify that invalid id returns error|id = -1|400|
|4|GET|Verify that non-numeric id returns error|id = a|400|
|5|GET|Verify that empty id returns error|id = ''|500|**
|6|PUT|Update order with valid api_key, id and body|id = {1...10}, api_key = 1234567890123456|200|
|7|PUT|Update order status to 'INPROGRESS' with valid api_key, id and body|id = 1, api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|200|
|8|PUT|Update order status to 'DELIVERED' with valid api_key, id and body|id = 10, api_key = 1234567890123456, {"status": "DELIVERED",..., "id": 10}|200|
|9|PUT|Update order with invalid api_key, valid id and body|id = {1...10}, api_key = 12345678901234, {"status": "INPROGRESS",..., "id": 1}|401|
|10|PUT|Update order with valid api_key, body and invalid id|id = 0, api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|400|
|11|PUT|Update order with valid api_key, id and body with incorrect value in status field|id = {1...10}, api_key = 1234567890123456, {"status": "CLOSED",..., "id": 1}|400|
|12|PUT|Update order with valid id and body, without api_key|id = {1...10}, api_key = '', {"status": "INPROGRESS",..., "id": 1}|400|
|13|PUT|Update order with valid api_key and body, without id|id = '', api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|405|
|14|PUT|Update order with valid api_key and body, with invalid id|id = 11, api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|400|
|15|DELETE|Delete an order by providing a valid id and api_key|id = {1...10}, api_key = 1234567890123456|204|
|16|DELETE|Delete an order by providing an invalid id and valid api_key|id = 11, api_key = 1234567890123456|400|
|17|DELETE|Delete an order by providing a valid id and invalid api_key|id = 10, api_key = 12345678901234|401|
|18|DELETE|Delete an order by providing a valid id and without api_key|id = 9, api_key = ''|401|