var e5 = require('./exercise5.js');

e5(process.argv[2],process.argv[3],function(err,data){
   data.forEach(function(item){
     console.log(item);
   });
});
