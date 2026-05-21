# Step 1: Use Node.js LTS image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the source code
COPY . .

# Step 5: Build the Vite project
RUN npm run build

# Step 6: Install a simple web server to serve built files
RUN npm install -g serve

# Step 7: Expose port 8080
EXPOSE 8080

# Step 8: Run the server
CMD ["serve", "-s", "dist", "-l", "8080"]

