const express = require('express')
const path = require('path')
// const history = require('connect-history-api-fallback')
// ^ middleware to redirect all URLs to index.html

const app = express()
app.use(express.static(path.join(__dirname)));

// app.use(history())

// var static = __dirname + "/static/";
// app.get('*', function(req, res) {
//   res.sendFile(path.join(static + "index.html"));
// });

app.post('/submitform', function(req,res){
  var params = req.body;
  console.log("the req is: " + JSON.stringify(req.body),params);
  let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        console.log(body);
        res.end('ok');
})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

