const express = require('express');
var hbs = require('hbs');

const app = express();
const port = 8080;

// Handlebars
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Middlewares
//Servir contenido estático
app.use(express.static('public'));

//Controlador
app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Leonardo Puebla',
		titulo: 'Aprendiendo Node'
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Leonardo Puebla',
		titulo: 'Aprendiendo Node'
	});
});


app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Leonardo Puebla',
		titulo: 'Aprendiendo Node'
	});
});

app.get('/generic', (req, res) => {
	res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
	res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
