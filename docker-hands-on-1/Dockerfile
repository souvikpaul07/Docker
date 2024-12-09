# Step 1: Use an official Node.js image as the base
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire app-folder into the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 8080

# Step 7: Define the command to run the app
CMD ["node", "app.js"]
