# Amazon Scraper Documentation

## Overview

The Amazon Scraper is a web application built with Node.js that allows users to find the position of a product (identified by its ASIN) in Amazon search results based on a given keyword.

## Installation

1. Clone the repository:

   ```bash
   git clone [repository_url]
   ```

2. Navigate to the project directory:

   ```bash
   cd amazon-scraper
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Backend (app.js)

The backend is responsible for handling requests and using Puppeteer to scrape Amazon search results.

- **Dependencies:**
  - Express: Web framework
  - Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)
  - Puppeteer: Headless browser automation library

- **API Endpoint:**
  - `POST /your-backend-url`: Accepts ASIN and keyword in the request body, scrapes Amazon search results, and returns the position of the specified ASIN.

- **Run the Backend:**
  ```bash
  node app.js
  ```
  The server will run on http://localhost:3000.

### Frontend (index.html)

The frontend provides a simple web interface for users to input ASIN and keyword and see the scraped result.

- **Dependencies:**
  - Bootstrap: CSS framework for styling

- **Form Fields:**
  - ASIN: Input field for entering the ASIN of the product.
  - Keyword: Input field for entering the search keyword on Amazon.

- **Run the Frontend:**
  Open `index.html` in a web browser.

## File Structure

- **app.js:** Backend server implementation using Express and Puppeteer.
- **public/:** Contains static files served by the server (e.g., CSS).
- **index.html:** Frontend HTML file with a form to input ASIN and keyword.
- **css/style.css:** CSS styling for the HTML.
- **js/script.js:** Frontend JavaScript file handling form submission and displaying results.


