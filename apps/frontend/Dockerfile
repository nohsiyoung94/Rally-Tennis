FROM node:20-alpine AS base

# --- Dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY frontend/package.json ./frontend/
RUN npm ci --workspace=frontend

# --- Build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY frontend/ ./frontend/
RUN npm run build --workspace=frontend

# --- Production ---
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
