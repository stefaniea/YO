var http = require('http');
var yo = require('./yo.js');

console.log("got to callback js woot wooot");
//gets parameter either from url if available or local storage if not
    function getQueryVariable(variable) {
        /*var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        } 
        return "null";*/
        var url = require('url');
		var url_parts = url.parse(http.request.url, true);
		var query = url_parts.query;
		return query; 
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


var username = getQueryVariable("username");
/*var user = $(document.createElement('p'));
var d = new Date();
user.innerHTML = "user: " + username + " at " + d.getTime();
$(document.getElementById("yo")).append(user);*/
YoUser(username);
console.log("CALLBACK YESSSSS" +  username);