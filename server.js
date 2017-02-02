const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port =process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });

  next();
});

// app.use((req, res, next) => {
//   res.render('maintainance.hbs');
// });

app.use(express.static(__dirname + '/public')); //takes absolute path

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());


app.get('/', (req, res) => {
  res.render('landing.hbs', {
    pageTitle: 'Landing Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
      pageTitle: 'About Page'
    });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio.hbs', {
      pageTitle: 'Portfolio Page'
    });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
