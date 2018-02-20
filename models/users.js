var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// create the UserSchema
var UserSchema = new Schema({
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, max:100 },
    role: {
        type: String,
        enum: ["Admin", "Shopper", "Merchant"]
    }
});

//virtual to return username
UserSchema.virtual('username').get(function () {
    return this.username;
});

//virtual to return the url using _id

UserSchema.virtual('url').get(function () {
    return /user/this._id;
});

//Export this model
module.exports = mongoose.model("User", UserSchema);
