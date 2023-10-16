const { Router } = require('express')
const router = Router()
const Comment = require('../Models/Comment');


router.post('/new', (req, res) => {
    console.log(req.body);
	const comment = new Comment({
		firstName: req.body.firstName,
        lastName: req.body.lastName,
        isAdmin: req.body.isAdmin,
        text: req.body.text,
        postId: req.body.postId
	})

	comment.save();

	res.json(comment);
});

router.get('/all/:id', async (req, res) => { 
	const comment = await Comment.find({postId: req.params.id});
	res.json(comment);
})

module.exports = router
