const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.post('/compute', function (req, res) {

});
app.get('/', (req, res) => res.send("Welcome to CircuitSafe"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

