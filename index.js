const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const web = process.env.WEB || './dist/DeployTest/';

app.use(express.static(web));

app.get('*', function (req, res) {
    res.sendFile('index.html', {root: web});
});

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`)
});


