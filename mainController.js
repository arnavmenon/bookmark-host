const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


const BM=require('./models/Bookmarks');

router.post('/newbm',(req,res)=>{

    BM.findOne({link: req.query.link},(err, bm)=>{
        if(err) return res.status(500).send("Server Error");

        if(bm) {
            return res.status(400).send("Already exists");
        }

        else{
            BM.create({
                link: req.query.link,
            },(err,bm)=>{

                if (err) return res.status(400).send(err);
                else return res.status(200).send("Success");
            });
        }
    })
})

module.exports = router;
