FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV RESEND_API_KEY=temporary_placeholder
ENV ORDER_DESTINATION=temporary_placeholder
RUN npm run build

FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

# Default environment to production
ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "build"]