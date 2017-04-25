var friendData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });


    app.post('/api/friends', function(req, res) {
        friendData.push(req.body);
    });
}
//
// // ---~~~LOAD DATA~~~---
// var friendData = require("../data/friends.js");
//
// // ---~~~ROUTING~~~---
// module.exports = function(app) {
//   // API GET Requests so that when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   app.get("/api/friends", function(req, res) {
//     res.json(friends);
//   });
//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
//   app.post("/api/friends", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//
//       friends.push(req.body);
//       res.json(true);
//
//   });
//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
//     console.log(tableData);
//   });
// };
