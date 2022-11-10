## Endpoints

List of Available Endpoints:

- `POST /register`
- `POST /login`
- `GET /news`
- `GET /payment`
- `POST /payment`
- `GET /pay`

### POST /register

#### Description

- Create a new account

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "email": String,
    "password": String,
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "data": {
      "id": Integer,
      "email": String
    }
  }
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### POST /login

#### Description

- Login user

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "access_token": String,
    "email": String,
    "status": String
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "data": {
      "id": Integer,
      "email": String
    }
  }
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### GET /news

#### Description

- Get all news data

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "success": true,
    "message": null,
    "data": {
        "link": String,
        "image": String,
        "description": String,
        "title": String,
        "posts": [
            {
                "link": String,
                "title": String,
                "pubDate": String,
                "description": String,
                "thumbnail": String,
                "id": Integer
            },
            ...
            ]
      },
  }]
  }
  ```

### GET /payment

#### Description

- Get struck checkout payment

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "data": {
      "token": String,
      "redirect_url": String
    },
    "orderId": String
  }
  ```

### POST /payment

#### Description

- Post data payment to database

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "email": String,
    "token": String,
    "orderId": String
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "data": {
      "message" : String
    }
  }
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### GET /news

#### Description

- Get status premium

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 201,
    "data": {
      "message" : String
    }
  }
  ```
