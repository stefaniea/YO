//gets parameter either from url if available or local storage if not
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        } 
        return "null";
    }
var username = getQueryVariable("username");
var user = $(document.createElement('p'));
var d = new Date();
user.innerHTML = "user: " + username + " at " + d.getTime();
$(document.getElementById("yo")).append(user);
yo.YoUser(username);
console.log("CALLBACK YESSSSS" +  username);