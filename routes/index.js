var express = require('express'),
    router = express.Router(),
    app = express(),
    util = require('util');

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Task 16'
    });
});

router.get('/api', function(req, res, next) {
    res.redirect('https://www.googleapis.com/youtube/v3/videos?id=ILpS4Fq3lmw&key=AIzaSyBSq2iIy-IfMWsyVaJmZW2_sy2QwNOdb7I%20&part=snippet,statistics,status');
});

router.use(function(req, res) {
    console.error('Page not found');
    throw new Error('Page not found');
});

router.use(function(err, req, res, next) {
    if (app.get('env') == 'development') {
        res.status(500).render('error', {
            title: 'Error page',
            message: err.message,
            stack: err.stack
        });
    } else {
        res.status(404).send('Page not found');
    }
});

module.exports = router;