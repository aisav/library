var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var config = require('../config')
var db = mongojs(config.database);

//get all books
router.get('/books', function(req, res, next){
    db.books.find(function(err, books){
        if(err){
            res.send(err);
        }
        else{
            res.json(books);
        }
    });
});

//get single book
router.get('/books/:id', function(req, res, next){
    db.books.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, book){
        if(err){
            res.send(err);
        }
        else{
            res.json(book);
        }
    });
});

module.exports = router;