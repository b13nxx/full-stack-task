# full-stack-task

Build a Full-Stack application that has 3 input fields "longitude, latitude, radius" and displays nearby places (Angular, React, Vue, etc...).
- Application MUST have a backend server that accepts GET requests as REST API on port 8070 (Php, NodeJs, Java, etc ...)
- GET API should accept parameters from UI to make a nearby search request via Google Places API and return the result as response.
- Responses from Google Places API should be cached and if same request comes again the response should be returned from cache (Redis, Mongo, Postgresql, etc...).

## For Run Project

- First, run backend server by typing `npm start` inside _backend_ directory.
- Then, run project by typing `npm start` inside _frontend_ directory.
