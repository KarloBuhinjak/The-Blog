const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  isAdmin: { 
      type: mongoose.SchemaTypes.Boolean, 
      default: false 
   },
  text: {
    type: String,
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;