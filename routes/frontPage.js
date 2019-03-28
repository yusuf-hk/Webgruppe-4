const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render("frontPage", {
    //pretty: true, // bedre og ha globalt en her
    articles: [
        ["blue","carrot"],
        ["red","potato"],
        ["yellow", "beet"]
    ]
}));

module.exports = router;