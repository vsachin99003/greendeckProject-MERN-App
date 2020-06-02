const mongoose = require('mongoose');
const express = require('express')
let MongoClient = require('mongodb').MongoClient;
var router = express.Router();

const url ='mongodb+srv://svrma007:rootCode@cluster0-ohlcy.gcp.mongodb.net/test?retryWrites=true&w=majority';
router.get('/', (req, res) => {
    MongoClient.connect(url,{useUnifiedTopology:true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db("dataset");
        dbo.collection("productlist").find({}).toArray(function(err,result){
            if(err) throw err;
            res.json(result);
            db.close();
        });
});
});

module.exports = router;