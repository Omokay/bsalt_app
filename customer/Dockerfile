FROM node:16
# Create app directory in the image
WORKDIR ./customer/src

# Install app dependencies
COPY package*.json ./
RUN npm install

# RUN npm ci --only=production

# Bundle app source
COPY . .

# Port Mappings
EXPOSE 1010

# CMD commands
CMD [ "node", "npm", "start", "dev", "nodemon", "server.js" ]
