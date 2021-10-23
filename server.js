const express = require('express');

const app = express();

app.use(express.static('./dist/sgr'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/sgr' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)

setInterval(function () {
  http.get("https://sgr-prod-web.herokuapp.com/");
  console.log('Check Active');
}, 300000); // every 5 minutes (300000)
