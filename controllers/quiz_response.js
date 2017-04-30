/*
Controlador Quiz Response.
*/

var mongoose = require('mongoose');
var QuizResponse = require('../models/quiz_response').QuizResponse;


exports.list_all_quiz_responses = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    QuizResponse.find(function(err, quizresponses) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(quizresponses));
    });
};

exports.findByQuizId = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
    var quizId = req.body.params.quizId;
    console.log("quizId = " + quizId);
    QuizResponse.find({'quizId' : quizId },function(err, quizresponses) {
        if(err) {
            res.send(err);
        }
        res.send(JSON.stringify(quizresponses));
    });
};




exports.save_quiz_responses = function(req, res) {
    console.log("Req = " + req.body);
    console.log(req.body.quizId);
    QuizResponse.create({
            quizId : req.body.quizId,
            userId : req.body.userId,
            responses:req.body.responses,
        }, function(err, quiz) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            QuizResponse.find(function(err, quizes) {
                if (err)
                    res.send(err)
                res.json(quizes);
            });
        });
    //console.log(req.body);
};
