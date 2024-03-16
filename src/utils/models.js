import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: {type: String, required: true, max: 20},
   email: {type: String, required: true, max: 50, unique: true},
   password: {type: String, required: true, min: 6},
   img: {type: String},
   isAdmin: {type: Boolean, default: false}
}, {timestamps: true});

const postSchema = new mongoose.Schema({
   title: {type: String, required: true, max: 100, unique: true},
   desc: {type: String, required: true, min: 10},
   img: {type: String},
   userid: {type: String, required: true},
   slug: {type: String, required: true, unique: true},
   
}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);