const db = require("../models");
const Storm = db.storm;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {  
    Storm.find({ published: true })
      .then(data => {
        console.log("data",data)
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "err"
        });
      });
};


