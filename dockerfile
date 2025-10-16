# Dockerfile (explain each line below)
FROM node:18-alpine           # small Node.js base image
WORKDIR /app                  # set working directory
COPY package*.json ./         # copy package files first for caching
RUN npm install --production  # install only production deps
COPY . .                      # copy app source
EXPOSE 3000                   # container listens on 3000
CMD ["node", "app.js"]        # default command
