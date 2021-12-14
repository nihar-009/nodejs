const express = require('express')
const axios = require('axios').default;
const app = express()
const port = 5500
// app.use(express.static("/var/www/html/nodejs/expressjs/public"));

app.get('/', (req,res ) => {
    var name = req.query.name;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7ef77d9c2c4ee106afa86aa3b8094702`)
    .then(function (response) {
        var t = response.data.main;
        console.log('t', t.temp , t)
        res.send(` `);
      })
      .catch(function (error) {
        console.log(error);
      })
})
app.get('/about', (req, res) => {

    res.send("hello from about")
})
app.get('/contact', (req, res) => {
    res.send("hello from contact")
})
app.listen(port, () => {
    console.log(`Exasample app listing at http://localhost:${port}`)
})