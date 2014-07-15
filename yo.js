var http = require('http');
var http = require('http');
http.createServer(function (req, res) {
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

function YoAll() {
  // Build the post string from an object
  var post_data = { api_token : "343e22db-008c-12c4-786b-52c66899280d" }.toString();

  // An object of options to indicate where to post to
  var post_options = {
      hostname: 'api.justyo.co',
      port: '80',
      path: '/yoall/',
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

setTimeout(function(){}, 10000);

YoUser("STEFALFONSO");
YoAll();

