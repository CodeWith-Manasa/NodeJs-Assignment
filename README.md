# NodeJs-Assignment

# Blog Analytics and Search Tool

This project is a Blog Analytics and Search Tool implemented using Express.js and Lodash. It provides RESTful API endpoints to fetch blog statistics and search for blogs. Additionally, it includes a caching mechanism to optimize performance.

## Files and Directory Structure

- `index.js`: This file contains the implementation of the caching mechanism using Lodash's `memoize` function. It optimizes the performance of the `/api/blog-stats` and `/api/blog-search` endpoints by caching results for a certain period.

- `server.js`: In this file, you can find the normal implementation of the `/api/blog-stats` and `/api/blog-search` endpoints without caching. It provides the basic functionality of fetching blog data and performing analytics.

- `frontend/`: This directory contains the frontend components of the application.

- `Navbar.js`: The navbar component for navigation between analytics and search.

- `Analytics.js`: The analytics component that displays the analyzed data.

- `SearchBar.js`: The search bar component that allows users to search blogs by title.


## Installation

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command:
   ```bash
   npm install
### API Endpoints

#### `/api/blog-stats`

- **GET**: Fetches blog statistics, including the total number of blogs, the title of the longest blog, the number of blogs with "privacy" in the title, and an array of unique blog titles.

#### `/api/blog-search`

- **GET**: Accepts a query parameter, e.g., `/api/blog-search?query=privacy`, and implements a search functionality to filter blogs based on the provided query string (case-insensitive).
