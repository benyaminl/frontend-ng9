# Use a Node.js base image
FROM node:20 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build --omit=dev

# Use a Nginx base image
FROM nginx:stable-alpine

# Copy the built app files to the Nginx web root
COPY --from=build /app/dist/frontend-ng/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
