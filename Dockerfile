# ============================================================
# Dockerfile — cloud-native-first-contribution
# Builds a lightweight Docker image using Node 18 on Alpine Linux.
# Alpine is a minimal Linux distro (~5 MB) perfect for containers.
# ============================================================

# Step 1 — Choose the base image
# node:18-alpine gives us Node.js 18 on a tiny Alpine Linux base
FROM node:18-alpine

# Step 2 — Set the working directory inside the container
# All subsequent commands will run from this path
WORKDIR /usr/src/app

# Step 3 — Copy dependency files first (layer-cache optimization)
# Docker caches each layer; copying package.json separately means
# npm install only re-runs when dependencies actually change.
COPY package*.json ./

# Step 4 — Install production dependencies only
RUN npm install --omit=dev

# Step 5 — Copy the rest of the application source code
COPY . .

# Step 6 — Tell Docker (and humans) which port the app uses
EXPOSE 3000

# Step 7 — Start the server when the container launches
CMD ["node", "app/server.js"]
