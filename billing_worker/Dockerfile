FROM node:16
# Create app directory in the image
WORKDIR /src

# Install app dependencies
COPY package*.json ./
RUN npm install

# RUN npm ci --only=production

# Bundle app source
COPY . .

# Port Mappings
# - Worker should not be exposed

# Install nodemon
RUN npm install -g nodemon

# CMD commands
CMD [ "npm", "start" ]
