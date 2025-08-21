# API Testing Challenge

This repository contains the solution to the API testing challenge.

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
