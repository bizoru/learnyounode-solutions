// There is a lot to study here

var http = require('http');
var bl = require('bl');
var results = [];
var counter = 0;

function showResults(){
  for(var i=0;i<3;i++){
    console.log(results[i]);
  }
}

function httpGet(index){
   url = process.argv[2 + index];

   http.get(url,function(response){

       response.pipe(bl(function(err,data){
            if(err)
              console.log(err);

            results[index] = data.toString();
            counter++;
            if(counter == 3)
              showResults();

       }));
   });

}

for(var i=0;i<3;i++){
  httpGet(i);
}
