var express = require ('express');
var router = express.Router();

router.get('/',function(req,res){
    var db =  req.app.locals.db;
    db.collection('subject').find().toArray(function(err,result){
        if (err) throw err;
        res.json(result);
    });
  });

router.get('/add',function(req,res){
    res.send("Add route");
});

module.exports = router;