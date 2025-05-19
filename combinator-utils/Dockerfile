# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy all source code
COPY . .

# Expose the app port
EXPOSE 9000

# Start the server
CMD ["node", "src/server.js"]
