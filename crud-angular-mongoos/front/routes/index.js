var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

 
router.post('/register', function (req, res) {
    Account.register(new Account({ username: req.body.username }), req.body.password, function (err, account) {
        if (err) {
            return res.render('register', { account: account });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});


router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});





router.get('/members', function (req, res) {
    /*if(req.isAuthenticated())
    {

    }*/
    if (req.session.passport) {
        res.send("welcome " + req.session.passport.user);
    }
    else {
        res.redirect("/login");
    }
});




router.post('/login', passport.authenticate('local'),
    function (req, res) {
        res.redirect('/');
    });
module.exports = router;
