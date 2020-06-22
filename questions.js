
Questions


// What is responsible for defining the routes of the games resource?

The server.js file defines the server which the app is being hosted on. In this case, localhost 3000.
The create_router then allows for extensions to this domain with different request types.



// What do you notice about the folder structure? Whats the client responsible for? Whats the server responsible for?

Client is responsible for the parts which will be visible or be interacted with by the user.
Server is responsible for the data behind the application and how the server runs.



// What are the the responsibilities of server.js?

server.js hosts the server which the application will run on and connects the databases/apis required.


// What are the responsibilities of the gamesRouter?

gamesRouter creates a series of routes based off of the preset routes defined in the create_router file.
The data inputted in to the gamesRouter then determines what / extensions there will be.


// What process does the the client (front-end) use to communicate with the server?

the client uses the fetch command to the server to return the apis, URL's or requests



// What optional second argument does the fetch method take? And what is it used for in this application? Hint: See Using Fetch on the MDN docs

The second argument is the init object. This object can include methods, headers, body etc



// Which of the games API routes does the front-end application consume (i.e. make requests to)?

the front end uses http://localhost:3000/api/games/



// What are we using the MongoDB Driver for?

The mongo DB driver allows the mongodb databases to be connected to the application
