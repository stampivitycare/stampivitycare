
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("sendSMS", function(request, response) {
         
  // var toUser = request.params.toUser;
  // var msgBody = request.params.msgBody;
  // Require and initialize the Twilio module with your credentials
         
//var client = require('twilio')('AC10b0b6b7218e1da28313e3bff9d51bba','6fb83314fdfe3a24b947df1a7754ace5');
var client = require('twilio')('ACc0f4894c7ae5d90bdad29fa0d09b3e2f','965bf4332306ccb0131eb19d2b3a5f82');
          
           
// Send an SMS message
client.sendSms({
    to: '+918977875774',
    //from: '+16467627663', 
    from: '+919975-5360',
    body: 'hai'
  }, function(err, responseData) { 
    if (err) {
      console.log(err);
      response.error(err);
    } else { 
      console.log(responseData.from); 
      console.log(responseData.body);
      response.success('Message sent!');
    }
  }
);
         
});
