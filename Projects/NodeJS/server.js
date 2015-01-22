var express = require("express");
var mongoose = require("mongoose");

var contactModel = require("./models/Contact")

var app = express();

app.set('views', __dirname + '/views' );
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/contacts', function(req, res) {
    //res.send('test');
    mongoose.model('Contact').find({}).exec(function(error, collection){
         if(!error){
              res.send(collection);
         }
    });
})

app.get('*', function(req, res){
     res.render('index');
});

//mongoose.connect('mongodb://localhost/ContactsDB')
mongoose.connect('mongodb://contactdbuser:password@ds039860.mongolab.com:39860/contactsdb')


var con = mongoose.connection;
con.once('open', function(){
     console.log('Connected to MobgoDB - ContactsDB')
     console.log('Seeding ContactsDB if empty');
     contactModel.seedContacts();
     console.log('Seeding ContactsDB if empty - completed');
});

app.listen(process.env.PORT, process.env.IP);