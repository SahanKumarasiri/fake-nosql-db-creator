const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define User schema
const UserSchema = new Schema({
  name: String,
  email: String,
  dateCreated: { type: Date, default: Date.now },
});

// Define Category schema
const CategorySchema = new Schema({
  name: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
});

// Define Post schema with reference to User and Category
const PostSchema = new Schema({
  title: String,
  content: String,
  dateCreated: { type: Date, default: Date.now },
  likes: Number,
  views: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

// Define Comment schema with reference to User and Post
const CommentSchema = new Schema({
  content: String,
  dateCreated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
});

// Create models
const UserModel = mongoose.model("User", UserSchema);
const PostModel = mongoose.model("Post", PostSchema);
const CommentModel = mongoose.model("Comment", CommentSchema);
const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = { UserModel, PostModel, CommentModel, CategoryModel };
