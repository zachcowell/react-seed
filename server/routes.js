module.exports = function(app){
    app.get('/test', function(req, res){ res.status(200).send('this is the body') });
}
