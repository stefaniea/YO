var http = require('http');
var yo = require('./yo.js');

console.log("got to callback js woot wooot");
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

  if (queryData.username) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end('Hello ' + queryData.username + '\n');
    console.log("hello" + queryData.username);
   // var random = (int) 
    //if();
    YoUser(username);
    

  } else {
    response.end("Hello World\n");
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT || 5000);


function YoUser(user) {
  // Build the post string from an object
  var post_data = { api_token : "343e22db-008c-12c4-786b-52c66899280", username : 'STEFALFONSO' }.toString(); //this one not working
  var post_data2 ='api_token='+encodeURIComponent('343e22db-008c-12c4-786b-52c66899280d')+'&username='+user;
//  var post_data = api_token=343e22db-008c-12c4-786b-52c66899280&username= + user;

  // An object of options to indicate where to post to
  var post_options = {
      hostname: 'api.justyo.co',
      port: '80',
      path: '/yo/',
      method: 'POST',
      headers: {
          'Content-Length': post_data2.length,
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      console.log(res.statusCode);
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data2);
  post_req.end();
}


//var username = getQueryVariable("username");
/*var user = $(document.createElement('p'));
var d = new Date();
user.innerHTML = "user: " + username + " at " + d.getTime();
$(document.getElementById("yo")).append(user);*/
//YoUser(username);
//console.log("CALLBACK YESSSSS" +  username);