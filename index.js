const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('hello');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});