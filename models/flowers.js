const mongoose = require("mongoose")
const flowerSchema = mongoose.Schema({
flower_type: String,
size: String,
cost:{
    type: Number,
    min:[10,"Cost Should be minimum of 10$ "],
    max:[100,"Cost Cannot be greater than 100$ "]
}
})
module.exports = mongoose.model("Flower",flowerSchema)