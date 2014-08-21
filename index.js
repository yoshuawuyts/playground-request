/**
 * Module dependencies
 */

var request = require('request');

/**
 * Exports
 */

var options = {
  url: 'https://app.wercker.com/api/v2/users/me/notifications',
  qs: {
    token: 'haha, no way',
    limit: 15
  }
}

request(options, function(error, response, body) {
  console.log(JSON.parse(body));
})
