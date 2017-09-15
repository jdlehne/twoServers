
var http = require("http");

var PORTA = 7000;
var PORTB = 7500;

function handleRequestOne(request, response) {
  console.log("I'm doing stuff with port A");
  response.end("You have a nice smile...");
}

function handleRequestTwo(request, response) {
  console.log("I'm doing stuff with port B");
  response.end("...but you need some gum");
}

var serverA = http.createServer(handleRequestOne);
var serverB = http.createServer(handleRequestTwo);

serverA.listen(PORTA, function() {
  console.log("Server listening on: http://localhost:%s", PORTA);
});

serverB.listen(PORTB, function() {
  console.log("Server listening on: http://localhost:%s", PORTB);
});
