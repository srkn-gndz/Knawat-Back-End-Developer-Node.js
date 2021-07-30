# base image
FROM node:16-alpine3.11

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY . . 
RUN npm install
RUN npm install -g @angular/cli 

# start app
CMD ng serve --host 0.0.0.0 --port 80