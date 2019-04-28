var StravaApiV3 = require('strava_api_v3');

var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "49143e46713bc92f72a7cb5a56552ea1d1d3e5c2"

var api = new StravaApiV3.GearsApi()

var id = id_example; // {String} The identifier of the gear.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getGearById(id, callback);
