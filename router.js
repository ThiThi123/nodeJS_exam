module.exports = app => {
    const storm = require("./controllers/storm.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Storm
    router.get("/", storm.findOne);

    app.use('/api/storm/:city_name', router);
  };