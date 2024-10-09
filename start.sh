#!/bin/bash

# Navigate to the backend folder and start the backend server
echo "Starting Backend Server..."
cd backend
npm install  # Install backend dependencies (optional, but good to include)
npm start &  # Run backend server in the background (assumes npm start is defined in backend/package.json)

# Navigate to the frontend folder and start the React app
echo "Starting React Frontend..."
cd ../src
npm install  # Install frontend dependencies (optional)
npm start    # Run React app

# Wait for all background processes to complete
wait
