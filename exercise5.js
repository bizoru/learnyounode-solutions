var fs = require('fs');
var path = require('path');
var ext = process.argv[3];


/*
Code Used for exercise 5
fs.readdir(process.argv[2], function (err,data) {
   for(var index in data){
     var e = path.extname(data[index]).split(".")[1];
     if(e != undefined){
       if(ext == e){
         console.log(data[index]);
       }
     }
     //console.log(path.extname(data[index]))
   }

});
*/

module.exports = function(directory , ext, cb){
  fs.readdir(directory, function (err,data) {
    var result = [];
    if(err)
      return cb(err);
     for(var index in data){
       var e = path.extname(data[index]).split(".")[1];
       if(e != undefined){
         if(ext == e){
           result.push(data[index]);
         }
       }
       //console.log(path.extname(data[index]))
     }
     cb(null,result);

  });
}
