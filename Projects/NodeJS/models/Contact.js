var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
     name: {type:String},
     email: {type:String}
});

var Contact = mongoose.model('Contact', contactSchema);

exports.seedContacts = function(){
     Contact.find({}).exec(function(error, collection){
          if(collection.length === 0){
               Contact.create({name: 'xyz abc', email: 'a@a.com'});
               Contact.create({name: 'pqr uvw', email: 'p@p.com'});
               Contact.create({name: 'ooo bcd', email: 'q@q.com'});
               Contact.create({name: 'pop kkk', email: 'y@q.com'});
               Contact.create({name: 'may apr', email: 't@q.com'});
          }
          
     });
}