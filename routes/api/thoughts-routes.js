const router = require('express').Router();
const {
    addThought,
    addReply,
    removeReply,
    removeThought,
} = require('../../controllers/thoughts-controllers');

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought);

// /api/thoughts/<userId>/<commentId>
router
    .route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(addReply);
    
router
    .route('/:userId/:thoughtId/:replyId')
    .delete(removeReply);
    
module.exports = router;    