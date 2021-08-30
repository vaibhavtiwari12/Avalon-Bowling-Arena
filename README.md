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


## **Running Mobile Application**

I have implemented the Hybrid application which has the webview which is loading the mobile website. 

This is implemented with react-native and expo. 

NOTE : since I am running the application to have the connection tunneled out using the ngrok I was not able to generate the .apk file for the app to run directly. Alternatively I can share the code and expo has a good client app (expo) which can run this app by just scanning the QR code. 

### **steps to install the Mobile Application** 

#### Setup 
1) Install [ngrok](https://ngrok.com/download)
2) Run the command on ngrok - ngrok http 9000
3) In the Web Application code change the environment file `.env.prod` -> `PUBLIC_URL` to the ngrok's proxy url

### Application Setup

1) Clone the repository [Bowling Arena Mobile Application](https://github.com/vaibhavtiwari12/Avalon-BowlingArena-Mobile-Application)
2) Install expo cli using `npm install expo-cli -g`
3) In the folder of mobile applicaitn run `npm install`
4) Run the `expo start`
5) selct the tunnel option and scan the QR code to run the application.
