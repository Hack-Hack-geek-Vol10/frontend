FROM node:18-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

RUN npm clean-install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyBZ859XRq1mWBJGKKlEpArYzZ6LNIMqXHA"
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="geek-vol10.firebaseapp.com"
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID="geek-vol10"
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="geek-vol10.appspot.com"
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="104071342406"
ENV NEXT_PUBLIC_FIREBASE_APP_ID="1:104071342406:web:2435d309c7534b6adfdd47"
ENV NEXT_PUBLIC_MEASUREAENT_ID="G-MWBJ5S0FKV"
ENV NODE_ENV=

RUN npm run build
RUN ls .next

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]