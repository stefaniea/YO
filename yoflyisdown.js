console.log("got to yoflyisdownnnn js woot wooot");
var http = require('http');
var url = require('url');
var counter = 0;
var qs = require('querystring');


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
 /* var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

  if (queryData.username) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end('Hello ' + queryData.username + '\n');
    console.log("hello" + queryData.username);
	YoUser(queryData.username);
    response.end("Hello World\n");
  }*/
	if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                request.connection.destroy();
            }
        });
        request.on('end', function () {

            var POST = qs.parse(body);
            console.log("postyayyy " + POST + " user " + POST.username );
            YoUser(POST.username);
            counter++;
            console.log("counter is" + counter);
            // use POST

        });
    }

    else if(request.method == 'GET') {
      console.log("get method wooo");
      console.log("counter is" +)
     var counter = {counter: counter};
     //var json_counter = JSON.stringify(counter);
     response.writeHead(200, {'Content-Type' : 'application/json', 'Content-Length': json_counter.length });
     response.write(json_counter);
     setTimeout(function(){ response.end(json_counter)}, 2000);
    }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT || 5000);


function YoUser(user) {
  // Build the post string from an object
// var post_data = { api_token : "65e12d53-4ddb-499e-cc93-5d395aa3a6c1", username : 'STEFALFONSO' }.toString(); //this one not working
  var post_data ='api_token='+encodeURIComponent('65e12d53-4ddb-499e-cc93-5d395aa3a6c1')+'&username='+user;
//  var post_data = api_token=343e22db-008c-12c4-786b-52c66899280&username= + user;

  // An object of options to indicate where to post to
  var post_options = {
      hostname: 'api.justyo.co',
      port: '80',
      path: '/yo/',
      method: 'POST',
      headers: {
          'Content-Length': post_data.length,
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
  post_req.write(post_data);
  post_req.end();
}


//var username = getQueryVariable("username");
/*var user = $(document.createElement('p'));
var d = new Date();
user.innerHTML = "user: " + username + " at " + d.getTime();
$(document.getElementById("yo")).append(user);*/
//YoUser(username);
//console.log("CALLBACK YESSSSS" +  username);