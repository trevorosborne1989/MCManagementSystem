# MyCompany Management System

## `About this Application:`
* This application runs spring boot on the back end and react JS on the front end.
* This module will coordinate the supervisors currently working at MyCompany and the jurisdiction they cover.
  Any employee in the company can submit their contact information for a specific supervisor to be notified of
  any announcements the supervisor has made.
* This microservice has two endpoints: \
  _a. GET /api/supervisors \
  b. POST /api/submit_


### Front End
* In the project directory, (react-crud) you can run:

#### `npm start`

* Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

* The page will reload when you make changes.\
You may also see any lint errors in the console.

### Back End
* Runs on [http://localhost:8080](http://localhost:8080)

## `Deployment:`
**Run this application in a Docker container.**

To run the dockerized back end, use the following commands within the main project directory 
to build and start an image:

`docker build -f Dockerfile -t docker-image-lfmanagementsystem-v5 .`

`docker run -p 8080:8080 docker-image-lfmanagementsystem-v5`

To run the dockerized front end, use the following commands within the react-crud directory
to build and start an image:

`docker build -t react:docker-image-lfmanagementsystem .`

`docker run \
  -it \
  --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  react:docker-image-lfmanagementsystem`

  
## `Who to Contact:`
* Trevor Osborne -- Software Engineer -- (760) 473-6713 -- trevorosborne1989@gmail.com

