var   express      =  require('express');
var   app          =  express();
var   bodyParser   =  require('body-parser');
var   mongoose     =  require('mongoose');
var   port         =  3000;
var   nodemon      =  require('nodemon'); 

Idea = require('./model/ideas');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/client'));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/flenixworks");
var db = mongoose.connection;


app.get('/',  function(req,  res){
    console.log('Index Serving');
    res.sendfile('index');
});


app.get('/ideas',  function(req, res){
     console.log('all ideas loaded');
  });

app.post('/addideas', function(req, res){
      console.log('add Ideas loaded')

});




app.listen(port,  function(){
    console.log('Server Running on 3000');
});