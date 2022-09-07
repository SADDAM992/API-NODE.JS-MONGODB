const express = require('express');
const Posts = require('../../models/Posts');
const router = express.Router();






router.get('/get/', async(req, res) => {
    try {
        const posts = await Posts.find();
        if (!posts) throw Error('No Items');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ mesg: err })
    }
});

router.get('/get/:id', async(req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (!post) throw Error('No Items');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
});

router.post('/post', async(req, res) => {
    const newPost = new Posts(req.body);
    console.log(req.body);

    try {
        const post = await newPost.save();

        if (!post) throw Error('Something went wrong with the post')
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
});










router.patch('/update/:id', async(req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if (!post) throw Error('Something went wrong while updating the post');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});
router.delete('/delete/:id', async(req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id);
        if (!post) throw Error('No post found!');
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(400).json({ msg: error })
    }
});









module.exports = router;