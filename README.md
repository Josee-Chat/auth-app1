# Full-Stack Authentication System - Frontend

This repository contains the front-end code for a full-stack authentication system built with React, Express, MongoDB, Heroku, and Netlify. The front-end provides a user interface for user registration, login, and authentication.

## Prerequisites

Before running the front-end application, ensure that you have the following installed on your system:

- Node.js

## Getting Started

1. Clone the repository to your local machine:

git clone <repository-url>

2. Navigate to the project directory:

cd fullstack-authentication-system/frontend

markdown


3. Install the dependencies:

npm install

bash


4. Configure environment variables:

Create a `.env` file in the root of the project directory and set the following variable:

REACT_APP_API_URL=<backend-api-url>

csharp


Replace `<backend-api-url>` with the URL where the backend server is running. For example, `http://localhost:5000` if running locally.

5. Start the application:

npm start

vbnet


The front-end application will be served on `http://localhost:3000`.

## Deployment

To deploy the front-end application to Netlify, follow these steps:

1. Create a new site on Netlify.
2. Set the build command as `npm run build` and the publish directory as `build`.
3. Set the environment variable `REACT_APP_API_URL` in the Netlify site's settings to the URL of your deployed backend API.
4. Connect the Netlify site to your Git repository and trigger a new build.

## Contributors

- [Your Name](https://github.com/your-github-username)

If you would like to contribute to this project, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
