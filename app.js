const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs');
const fileUpload = require('express-fileupload');


app.use(fileUpload());

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let file = req.files.gerber;

  // Use the mv() method to place the file somewhere on your server
  file.mv('./input.GTL', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.post('/compute', function (req, res) {

});
app.get('/', (req, res) => res.send("Welcome to CircuitSafe"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

