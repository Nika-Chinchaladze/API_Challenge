# API Testing Challenge

This repository contains the solution to the API testing challenge. The challenge involved creating a Postman collection with two GET requests and implementing tests to validate the API responses.

## Challenge Requirements

1. **Create a Postman Collection** including the following requests:
   - **GET Users:**  
     `https://jsonplaceholder.typicode.com/users`  
     Retrieve the list of users.
   - **GET User Posts:**  
     `https://jsonplaceholder.typicode.com/posts?userId=1`  
     Retrieve the posts of a specific user (user ID = 1 or any other).

2. **Tests for Both Requests:**
   - **Status Code Check:** Verify that the response status is `200 OK`.
   - **Non-empty Properties:** Loop through the array of returned objects and confirm that all key properties in each object are not empty, null, or undefined.

3. **Exported Collection:**  
   The Postman collection with the implemented requests and tests is included in this repository and can be imported directly into Postman.

## How to Use

1. Clone this repository.  
2. Open Postman and import the provided collection file.  
3. Run the requests individually or via a Collection Runner to verify the tests.

## Notes

- This project demonstrates basic API testing principles including status code validation and data integrity checks.
- The solution follows best practices for Postman tests and can be extended for additional endpoints or scenarios.
