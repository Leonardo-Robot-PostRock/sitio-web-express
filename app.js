const express = require('express');
const app = express();

//Middlewares
//Servir contenido estático
app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendfile(__dirname, 'public/index.html');
});

app.listen(8080);
