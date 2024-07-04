# Build Stage
FROM oven/bun:latest AS build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

# Runtime Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
