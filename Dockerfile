FROM node:18-alpine
WORKDIR /app

COPY package.json ./
RUN npm install
RUN echo "{\"compilerOptions\": {\"composite\": true, \"target\": \"ESNext\", \"module\": \"NodeNext\", \"moduleResolution\": \"NodeNext\", \"sourceMap\": true, \"declaration\": true, \"declarationMap\": true, \"skipLibCheck\": true, \"strict\": true }}"  >> tsconfig.json

COPY ./src ./src
COPY ./index.ts ./

RUN ./node_modules/.bin/tsc

CMD ["node", "index.js"]
