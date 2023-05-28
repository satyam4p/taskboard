FROM node:14-alpine

WORKDIR /usr/taskboard-web
# copy the local files to container
COPY ./package.json ./
RUN npm install

COPY ./ ./

# default command
CMD ["npm", "start"]
