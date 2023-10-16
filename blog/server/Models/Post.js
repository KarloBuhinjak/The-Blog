const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;