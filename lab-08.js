/*// #1 TODO: Declare fastify object from fastify, and execute
const fastify = require("fastify")();

// #2 TODO: Declare fetch object from node-fetch
//const fetch = require("node-fetch")();
import fetch from "node-fetch";

fastify.get("/photos", (request, reply) => {
  // #3 TODO:
  // Adapt the following code to attempt to retrieve
  // all photos from JSONPlaceholder site
  // using fetch, and handle returned Promise using:
  // - two .then() chain methods, return 200
  // - single .catch() chain method, return 404
  fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then((data) => data.json()) //transform
    .then((data_json) => {
      //send 200 response to client

      //send 404 not found
      reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({ error: "", statusCode: 200, photos: data_json });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      reply
        .code(404)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({ error: err, statusCode: 404, photo: {} });
    });
});

// #4 TODO:
// Adapt the following code to attempt to retrieve
// a single photo from JSONPlaceholder site
// using fetch, and handle returned Promise using:
// - single .then() chain method, return 200
// - single .catch() chain method, return 404
// You may also try to use Object.keys() to
// ensure JSONPlaceholder returns an object with
// properties. An empty object returned from
// JSONPlaceholder means that the passed photo ID
// was invalid. Your server would also return
// a 404 status code for an invalid Photo ID.

fastify.get("/photos/:id", (request, reply) => {
  const { id = " " } = request.params;
  fetch(`https://jsonplaceholder.typicode.com/photos/1`)
    .then((data) => data.json()) //transform
    .then((data_json) => {
      //send 200 response to client
      //
      if (Object.keys(JSON).length > 0) {
        reply
          .code(200)
          .header("Content-Type", "text/json; charset=utf-8")
          .send({ error: "", statusCode: 200, photo: data_json });
      } else {
        reply
          .code(404)
          .header("Content-Type", "text/json; charset=utf-8")
          .send({ error: "Invalid ID", statusCode: 404, photo: {} });
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      reply
        .code(404)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({ error: err, statusCode: 404, photo: {} });
    });
});

////
/*const { id = " " } = request.params;
reply
  .code(200)
  .header("Content-Type", "text/json; charset=utf-8")
  .send({ error: "", statusCode: 404, photo: {} });

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
*/
// #1 TODO: Declare fastify object from fastify, and execute
const fastify = require("fastify")();
const fetch = require("node-fetch");
//import fetch from "node-fetch";

fastify.get("/photos", (request, reply) => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json()) //transform
    .then((json) => {
      //send 200 response to client

      //send 404 not found
      reply
        .code(200)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({ error: "", statusCode: 200, photos: json });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      reply
        .code(404)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({ error: err, statusCode: 404, photos: [] });
    });
});

// #4 TODO:
// Adapt the following code to attempt to retrieve
// a single photo from JSONPlaceholder site
// using fetch, and handle returned Promise using:
// - single .then() chain method, return 200
// - single .catch() chain method, return 404
// You may also try to use Object.keys() to
// ensure JSONPlaceholder returns an object with
// properties. An empty object returned from
// JSONPlaceholder means that the passed photo ID
// was invalid. Your server would also return
// a 404 status code for an invalid Photo ID.

fastify.get("/photos/:id", (request, reply) => {
  const { id = "" } = request.params;
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((response) => response.json()) //transform
    .then((json) => {
      //send 200 response to client
      //
      if (Object.keys(json).length > 0) {
        reply
          .code(200)
          .header("Content-Type", "text/json; charset=utf-8")
          .send({ error: "", statusCode: 200, photo: json });
      } else {
        reply
          .code(404)
          .header("Content-Type", "text/json; charset=utf-8")
          .send({error:"Invalid ID", statuscode: 404, photo: {}});
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      reply
        .code(404)
        .header("Content-Type", "text/json; charset=utf-8")
        .send({ error: err, statusCode: 404, photo: {} });
    });
});

////
/*const { id = " " } = request.params;
reply
  .code(200)
  .header("Content-Type", "text/json; charset=utf-8")
  .send({ error: "", statusCode: 404, photo: {} });
*/
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

