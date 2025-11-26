### Multi-stage Dockerfile for building Vite + React app and serving with nginx
FROM node:18-alpine AS deps
WORKDIR /app

# Install dependencies (uses package-lock if present)
COPY package.json package-lock.json* ./
RUN npm install

FROM node:18-alpine AS build
WORKDIR /app

# copy installed node_modules from deps stage to speed up builds
COPY --from=deps /app/node_modules ./node_modules

# copy project files and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production

# Copy built static assets
COPY --from=build /app/dist /usr/share/nginx/html

# Use our nginx config (overrides default site config)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
