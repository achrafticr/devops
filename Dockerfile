# Dockerfile

# Use official Node.js image from Docker Hub
FROM node:16

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port (if needed)
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
