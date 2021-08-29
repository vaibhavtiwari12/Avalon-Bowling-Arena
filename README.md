# Avalon-BowlingArena

## **Get Started**

I have already build the version of code and it is present inside the backend folder with the folder name `build`.

### Steps to start the server (without re-building the frontend)
1) Run the command `npm install` on folder `root` and `backend` folders.
2) go to `backend` folder and run - `npm install`
3) start the `mongod` service (please make sure connection is open on 27017 port)
4) run `npm start` on `backend folder`.
5) go to browser on [http://localhost:9000](http://localhost:9000) to see the application


### Steps to start the server (with re-building the frontend)
1) Run the command `npm install` on folder `root`, `backend` and `frontend`. (I know this is pain but have not figured this one out yet.)
2) Be on the `root` folder of application and run `npm run build:dev`
3) Once the build is completed follow step 2 to 5 mention in the section "Steps to start the server (without re-building the frontend)".
