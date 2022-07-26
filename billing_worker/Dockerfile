FROM node:16
# Create app directory in the image
WORKDIR ./billing_worker/src

# Install app dependencies
COPY package*.json ./
RUN npm install

# RUN npm ci --only=production

# Bundle app source
COPY . .

# Port Mappings
# - Worker should not be exposed

# CMD commands
CMD [ "node", "npm", "start", "dev", "nodemon", "server.js" ]
