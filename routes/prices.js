const mongoose = require('mongoose');
const express = require('express')
let MongoClient = require('mongodb').MongoClient;
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

const url ='mongodb+srv://svrma007:rootCode@cluster0-ohlcy.gcp.mongodb.net/test?retryWrites=true&w=majority';
router.get('/price', (req, res) => {
    MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db("dataset");
        console.log(req.query);
        dbo.collection("data").find({"price.regular_price.value":{$gt:JSON.parse(req.query.value1),$lt:JSON.parse(req.query.value2)}}).limit(113).toArray(function(err,result){
            if(err) throw err;
            res.json(result);
            db.close();
        });
});
});

router.get('/priceoff', (req, res) => {
    MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db("dataset");
        console.log(req.query);
        dbo.collection("data").find({"price.regular_price.value":{$gt:JSON.parse(req.query.value3),$lt:JSON.parse(req.query.value4)}}).limit(113).toArray(function(err,result){
            if(err) throw err;
            res.json(result);
            db.close();
        });
});
});

module.exports = router;