module.exports = app => {
    const storm = require("./controllers/storm.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Storm
    router.get("/", storm.findAll);

    app.use('/api/storm', router);
  };