const app = require('./app');

app.listen(app.get('port'), (req, res) => {
    console.log('API on port http://localhost:'+app.get('port'));
});