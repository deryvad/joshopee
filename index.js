"use strict";
const app = require("./app");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, function() {
  console.log('Listening to port ' + port);
});


