FROM node:slim

RUN npm install -g @angular/cli

CMD ["/bin/bash"]
# docker build -t angular .

# docker run -v $(pwd):$(pwd) -w $(pwd) -it angular

# docker run -v $(pwd):$(pwd) -w $(pwd) -p 4200:4200 -it angular
