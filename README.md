Checklist
| Number | Method | Scenario | Test data | Expected status code |
|:---|:---|:---|:---|:---|
| 1 | GET | Verify that valid id returns correct order details|id = {1...10}|200|
| 2 | GET | Verify that inactive id returns error|id = 77|400|
| 3 | GET | Verify that invalid id returns error|id = -1|400|
| 4 | GET | Verify that non-numeric id returns error|id = a|400|
| 5 | GET | Verify that empty id returns error|id = ''|500|**
| 6 | PUT | Update order with valid api_key, id and body|id = {1...10}, api_key = 1234567890123456|200|
| 7 | PUT | Update order status to 'INPROGRESS' with valid api_key, id and body|id = 1, api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|200|
| 8 | PUT | Update order status to 'DELIVERED' with valid api_key, id and body|id = 10, api_key = 1234567890123456, {"status": "DELIVERED",..., "id": 10}|200|
| 9 | PUT | Update order with invalid api_key, valid id and body|id = {1...10}, api_key = 12345678901234, {"status": "INPROGRESS",..., "id": 1}|401|
| 10 | PUT | Update order with valid api_key, body and invalid id|id = 0, api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|400|
| 11 | PUT | Update order with valid api_key, id and body with incorrect value in status field|id = {1...10}, api_key = 1234567890123456, {"status": "CLOSED",..., "id": 1}|400|
| 12 | PUT | Update order with valid id and body, without api_key|id = {1...10}, api_key = '', {"status": "INPROGRESS",..., "id": 1}|400|
| 13 | PUT | Update order with valid api_key and body, without id|id = '', api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|405|
| 14 | PUT | Update order with valid api_key and body, with invalid id|id = 11, api_key = 1234567890123456, {"status": "INPROGRESS",..., "id": 1}|400|
| 15 | DELETE | Delete an order by providing a valid id and api_key|id = {1...10}, api_key = 1234567890123456|204|
| 16 | DELETE | Delete an order by providing an invalid id and valid api_key|id = 11, api_key = 1234567890123456|400|
| 17 | DELETE | Delete an order by providing a valid id and invalid api_key|id = 10, api_key = 12345678901234|401|
| 18 | DELETE | Delete an order by providing a valid id and without api_key|id = 9, api_key = ''|401|
| 19 | POST | Calculate risk decision with random data in body and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 12}|200|
| 20 | POST | Calculate risk decision with correct body and it returns Low risk level and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 12}|200|
| 21 | POST | Calculate risk decision with correct body and it returns Medium risk level and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 10}|200|
| 22 | POST | Calculate risk decision with correct body and it returns High risk level and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 3}|200|
| 23 | POST | Calculate risk decision with correct body and it returns Very high risk level and negative decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 36}|200|
| 24 | POST | Calculate risk decision with correct body for underage person| {"income": 1000, "debt": 100, "age": 15, "employed": true, "loanAmount": 50, "loanPeriod": 3}|200|
| 25 | POST | Calculate risk decision with negative debt| {"income": 1000, "debt": -100, "age": 16, "employed": true, "loanAmount": 50, "loanPeriod": 3}|400|
| 26 | POST | Calculate risk decision with income = 0| {"income": 1000, "debt": 100, "age": 16, "employed": true, "loanAmount": 50, "loanPeriod": 3}|400|
| 27 | POST | Calculate risk decision without input values | {"income": , "debt": , "age": , "employed": , "loanAmount": , "loanPeriod": }|400|
