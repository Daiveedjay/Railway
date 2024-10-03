# Use the official Node.js image
FROM node:alpine

# Create and set working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
