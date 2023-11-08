const mongoose = require("mongoose")
const electionSchema = mongoose.Schema({
    year: { type: Number, minlength: 1, maxlength: 1000 },
    location: { type: String, minlength: 3, maxlength: 20 },
    candidate: { type: String, minlength: 3, maxlength: 20 },
});
module.exports = mongoose.model("Election", electionSchema)