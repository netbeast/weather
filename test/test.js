/*
  You must code your test on this File.
  You are able to create more test files or folders,
  but you should change the "test" script in package.json
  in order to running the test with the "npm test" command.
*/

/*
  Here there are some GET and POST request that you can use for testing your code.

  For testing the plugin you should intalled into the dashboard. You can do it through
   1. The user interface of the dashboard
   2. Command line, by copying your folder to dashboard/.sandbox/NAME_PLUGIN
*/

var request = require('request')

var argsget = {temperature: ''}

request.get({
  url: 'http://localhost/i/weather/temperature/1',
  json: argsget
}, function (err, resp, body) {
  console.log(err)
  console.log(body)
})

argsget = {humidity: ''}

request.get({
  url: 'http://localhost/i/weather/humidity/1',
  json: argsget
}, function (err, resp, body) {
  console.log(err)
  console.log(body)
})

// url: http://IP/i/NAME_PLUGIN/HOOK/id
