# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json & lock first
COPY backend/package.json backend/package-lock.json* ./backend/

# Install deps inside container
WORKDIR /app/backend
RUN npm install

# Go back and copy everything else (without local node_modules!)
WORKDIR /app
COPY backend ./backend
COPY frontend ./frontend

# Final working dir
WORKDIR /app/backend

# Expose backend port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]