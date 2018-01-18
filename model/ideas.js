var mongoose =  require('mongoose');


// ideas Schema
var ideasSchema = mongoose.Schema({
      name :{
          type: String,
          required : true
      },

      idea : {
          type     : String,
          required : true
      },

      description :{
          type     : String,
          required  : true
      }
    
});

// Export mode

var Ideas =  module.exports = mongoose.model('Ideas', ideasSchema);

// addIdeas in Ideas




