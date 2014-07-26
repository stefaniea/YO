request.post({
  url:     'http://http://68.196.247.241:8080/add',
  form:    {
    'username': 'username',
    'sport': 'football',
    'selection': 'selection',
    'currency': 'EURO',
    'stake': 10,
    'odds': 5}
  }, function(error, response, body){
      if (error){
        console.log("There was an error:", err);
      } else {
        console.log("Request posted successfully!", body);
      }
});