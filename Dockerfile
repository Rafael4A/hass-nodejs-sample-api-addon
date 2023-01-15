ARG BUILD_FROM
FROM $BUILD_FROM

RUN \ 
    apk add --no-cache \
        nodejs \
        npm

# Copy dependencies reference
COPY package*.json ./

# Choose between normal install and production install
# RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]