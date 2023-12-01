const db = require("../models");
const Storm = db.storm;

exports.findOne = (req, res) => {
    const city_name = req.params.city_name;
  
    Storm.findById(city_name)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Storm with id " + city_name });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Storm with id=" + city_name });
      });
  };


