const mongoose = require("mongoose")
const electionSchema = mongoose.Schema({
    year: { type: Number, required: true, min: 1900, max: 3000 },
    location: { type: String, required: true },
    candidate: { type: String, required: true }
});
module.exports = mongoose.model("Election", electionSchema)