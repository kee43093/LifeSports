
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let myUser = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================


// 2. add a new user
// POST /
// ========================================

router.get('/', async (req, res) => {
    try {
        const post = await myUser.find()
        res.send(post)
    } catch(err) {
        res.json({ message: err})
    }
})



router.post('/add', async (req, res) => {
    const user = new myUser({
        username: req.body.username
    });
    try {
        const createdUser = await user.save();
        res.send(createdUser)
    } catch(err) {
        res.json({ message: err})
    }
})

module.exports = router;