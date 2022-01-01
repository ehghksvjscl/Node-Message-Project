const express = require('express');
const router = express.Router();
const { Message } = require("../models/Message");


//=================================
//             Messages
//=================================

router.get("/list/:user_id", (req, res) => {
    Message.find({"user_id":req.params.user_id})
    .populate({
        path: 'user_id',
        select: 'name'
    })
    .exec((err,messages) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({success: true, messages}, )

    })
});

router.post('/addMessage', (req, res) => {
    const message = new Message(req.body)

    message.save((err, message) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({success: true})
    })
})


module.exports = router;
