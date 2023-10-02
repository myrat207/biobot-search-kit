# BioBot Kit Search
This tool enables users to efficiently search for kits using an intuitive search bar, offering autocomplete results and detailed views of each kit.

## Features & Functionality
**Autocomplete Suggestions:** As users type into the search bar, the application dynamically provides relevant kit suggestions, enhancing the user experience and speeding up the search process.  
**Detailed Kit Views**: On selecting a specific kit from the suggestions, the user can view detailed information about the kit, including its label ID and shipping tracking code.  
**Input Validation**: The search bar is optimized to accept only numeric values and hyphens, ensuring data integrity.  
**Error Handling**: In case of invalid inputs or backend issues, users are promptly informed with appropriate error messages.  

## Getting Started with Create React App

This project is based on Create React App for the frontend and utilizes a simple Express.js server for the backend.

## Prerequisites
Node.js
npm

In the project directory, you can run:

### Installation
1. Clone the repository:
git clone https://github.com/myrat207/biobot-search-kit.git
2. cd biobot-search-kit

3. Install frontend dependencies:  
In the root project folder run:  
npm install

5. Navigate to the server directory and install backend dependencies:  
cd server  
npm install  


### Configuration
Before running the application, you need to set up the required environment variables:

1. Create .env file in the root directory.
2. Populate the .env file:
REACT_APP_API_URL=http://localhost:4000

### Available Scripts
In the project directory, you can run:

npm start  
It runs the app in development mode.  
Open http://localhost:3000 to view the frontend in your browser.

To start the backend server, navigate to the server directory and run:  
npm start  
This starts the backend server on http://localhost:4000.  

### Todo List
* Better error handling for scenarios like, network error, no result found etc ...
* Apply Search enhancements like, highlighting search term in the resulsts.
* Save search history, if a user needs to get same KIT details again without entering lengthy ID
* Applying smooth transition for dropdown
* Would be better to adopt consistent design systems lke material UI, Tailwind css
* Provide light and dark modes.
