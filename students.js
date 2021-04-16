var express = require ('express');
var router = express.Router();


router.get('/',function(req,res){
  var db =  req.app.locals.db;
  db.collection('students').find().toArray(function(err,result){
      if (err) throw err;
      res.json(result);
  });
});

router.get('/add',function(req,res){
    res.render('add Student');
});

router.post('/',function(req,res){
    var db =  req.app.locals.db;
    db.collection('students').insertOne(function(err,result){
        if (err) throw err;
        res.json(req.body);
    });
  });

router.delete('/delete',function(req,res){
    var db =  req.app.locals.db;
    db.collection('students').deleteOne({"_id": req.app.locals.objectId("5e5bdc1fec086a251dc0c129")},function(err,result){
        if (err) throw err;
        res.send("One item deleted!");
    });
  });



router.get('/*',function(req,res){
    res.status(404).send("Not Found");
});

module.exports = router;

