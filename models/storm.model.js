const { Int32 } = require("mongodb");

module.exports = mongoose => {
    const Storm = mongoose.model(
      "storm",
      mongoose.Schema(
        {
          id: String,
          city_name: String,
          number_of_afa: Int32,
          comment_id: String,
          idUser: String,
        },
        { timestamps: true }
      )
    );
  
    return Storm;
  };