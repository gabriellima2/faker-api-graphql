FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN if !yarn -- version > /dev/null; then npm i --global yarn; fi
RUN yarn
COPY . .
EXPOSE 3001
CMD ["yarn", "dev"]
