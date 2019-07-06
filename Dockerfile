#Uses docker image for Node v10.* LTS 
FROM node:10-alpine
#Create ignored node modules folder and ser ownership of app directory
RUN mkdir -p /home/node/app/node_modules  && chown -R node:node /home/node/app
#Set working directory
WORKDIR /home/node/app
#Copy package.json file to root of the container
COPY package*.json ./
#set container user as node
USER node
#install dependencies
RUN npm install
#Copy app directory permissions to the container
COPY --chown=node:node . .
#Allocate and open 3000 port
EXPOSE 3000
#Run
CMD ["npm","start"]