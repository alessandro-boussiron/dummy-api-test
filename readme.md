## EpyTodo Test API

> This project is a lightweight Express-based API designed for testing routing and response formats. It includes integrated Swagger documentation and modular route handling.

## 🚀 Getting Started

### Prerequisites

Node.js and npm are required to manage dependencies and run the server.

### Installation

Install the required dependencies, including express, cors, and swagger-ui-express:

```
npm install
```

### Running the Server

Start the application:

```
node app.js
```

The server will listen on port 3000.

## 🛠 Features

- Modular Routing: Routes are separated into sub-modules for test, name, and date.

- CORS Support: Configured to allow requests from any origin (*).

- API Documentation: Built-in Swagger UI for interactive testing.

## 📖 API Documentation

The API follows the OpenAPI 3.0.0 specification.

|   Endpoint    |   Method    |   Description   |
| ``` | ``` | ``` |
| / | GET | Returns "Hello world" |
| /test/teapot | GET | Returns HTTP 418 "I'm a teapot" |
| /name/{username} | GET | Greets the user; supports JSON, HTML, and Plain Text |
| /date | GET | Returns the current date |

Accessing the Docs

> Since this API is a just a dumb test to learn about CRUD, CORS and more generically backend programming, it is not hosted anywhere.

    Interactive UI: http://localhost:3000/swagger

    Raw Specification: http://localhost:3000/api-spec.json