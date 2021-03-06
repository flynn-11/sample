const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const expressip = require('express-ip');

app.use(expressip().getIpInfoMiddleware);

app.set("PORT", port);

//testing ip lookup
app.get('/testip', (req, res) => {
    res.send(req.ipInfo);
});

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });


}


app.listen(port, () => console.log(`Listening on port ${port}`));










