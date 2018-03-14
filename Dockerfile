FROM node:alpine
 RUN mkdir -p /usr/src/app
 WORKDIR /usr/src/app
 COPY . ./ 
 
 RUN cd /usr/src/app \
     && chmod u+x entry.sh \
     && npm i -g lerna \
     && lerna bootstrap --loglevel debug
 
 EXPOSE 8080
 ENTRYPOINT [ "/usr/src/app/entry.sh" ]