let express = require("express");
let router = express.Router();

router.post('/', (req, res, next) => {
    let controller = require('../controllers/commentController');
    let comment = {
        userId: 1,
        productId: req.body.productId,
        message: req.body.message
    };

    if(!isNaN(req.body.parentCommentId) && (req.body.parentCommentId != '')){
        comment.parentCommentId = req.body.parentCommentId
    }

    controller
        .add(comment)
        .then(data => {
            res.redirect('/products/' + data.productId);
        })
        .catch(error => next(error));
});

module.exports = router;
