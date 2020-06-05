const mongoose = require('mongoose');
const express = require('express')
let MongoClient = require('mongodb').MongoClient;
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

const url ='mongodb+srv://svrma007:rootCode@cluster0-ohlcy.gcp.mongodb.net/test?retryWrites=true&w=majority';

router.get('/similarprd', (req, res) => {
    MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db("dataset");
        console.log(req.query);
        dbo.collection("data").find({price_positioning_text:req.query.value}).limit(113).toArray(function(err,result){
            if(err) throw err;
            res.json(result);
            db.close();
        });
});
});

module.exports = router;