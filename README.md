# barebones (with backend)
A simple starter project with a React client, Express backend, and Google authentication.

This project aims to give you a fully functional baseline application that you could use to quickly prototype application ideas.  We created the baseline so you can focus on implementing your applicaiton idea without having to worry about all the repetetive boilerplate code.

## Features

The client applicaiton is based off the popular create-react-app template and has the following features:
- Bootsrap based layout with functional state-aware top navigation
- Google authentication (login / logout) functionality
- Storage of authentication tokens in local storage
- Protected routes 
- Application state with Redux using react-redux and redux-thunk

The server application is an ExpressJS application and has the following features:
- pre-defined application file structure
- environment specific configuration storage/retrieval
- protected routes using PassportJS
- validation of Google id_token by PassportJS Bearer strategy


## Usage

Install the server dependencies
```
npm install
```

Install the client dependencies
```
cd client
npm install
```

Start the development client and server processes, from the project root
```
npm run dev
```

To start the client individually, from the project root
```
npm run client
```

To start the server independently, from the project root
```
npm run server
```

To terminate any of the above
```
<crtl> c
```
