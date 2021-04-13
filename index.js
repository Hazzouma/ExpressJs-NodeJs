const express = require("express");
const app = express();

const working = () => {
  const date = new Date();
  const theDay = date.getDay();
  const theHour = date.getHours();
  const arrHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const arrDays = [1, 2, 3, 4, 5];

  if (arrDays.indexOf(theDay) !== -1 && arrHours.indexOf(theHour) !== -1) {
    //Check if it is on working Days

    app.get("/", (request, response) => {
      response.sendFile(__dirname + "/index.html");
    });
    app.get("/Services", (request, response) => {
      response.sendFile(__dirname + "/services.html");
    });
    app.get("/Contact", (request, response) => {
      response.sendFile(__dirname + "/contact.html");
    });
    app.get("/|/Contact|/Services", (request, response) => {
      response.sendFile(__dirname + "/ind.css");
    });
  } else {
    // If not on working Days

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/notWorking.html");
    });
    app.get("/Services", (request, response) => {
      response.sendFile(__dirname + "/notWorking.html");
    });
    app.get("/Contact", (request, response) => {
      response.sendFile(__dirname + "/notWorking.html");
    });
    app.get("/|/Contact|/Services", (request, response) => {
      response.sendFile(__dirname + "/ind.css");
    });
    // app.get("/|/Contact|/Services", (request, response) => {
    //   response.sendFile(__dirname + "/index.css");
    // });
    // app.get("/" || "/Contact" || "/Services", (request, response) => {
    //   response.sendFile(__dirname + "/index.css");
    // });
  }
};
working();

app.listen(3000, (req, res) => {
  console.log("running app! ");
});
