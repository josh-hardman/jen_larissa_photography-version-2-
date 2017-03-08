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

app.get('/portfolio/:category', (req, res) => {
    const getCategory = req.params.category.toLowerCase()
    const categories = [
      {
        "title": "Engagements",
        background: "/img/engagements_cover.jpg",
        images: [
          {
            url: "/img/engagements_cover.jpg",
            title: 'Engagements Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/engagements_cover.jpg",
            title: 'Engagements Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/engagements_cover.jpg",
            title: 'Engagements Picture',
            description: 'Some awesome description'
          }
        ]
      },
      {
        "title": "Bridals",
        background: "/img/bridals_cover.jpg",
        images: [
          {
            url: "/img/bridals_cover.jpg",
            title: 'Bridals Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/bridals_cover.jpg",
            title: 'Bridals Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/bridals_cover.jpg",
            title: 'Bridals Picture',
            description: 'Some awesome description'
          }
        ]
      },
      {
        "title": "Weddings",
        background: "/img/weddings_cover.jpg",
        images: [
          {
            url: "/img/weddings_cover.jpg",
            title: 'Weddings Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/weddings_cover.jpg",
            title: 'Weddings Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/weddings_cover.jpg",
            title: 'Weddings Picture',
            description: 'Some awesome description'
          }
        ]
      },
      {
        "title": "Portraits",
        background: "/img/portraits_cover.jpg",
        images: [
          {
            url: "/img/portraits_cover.jpg",
            title: 'Portraits Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/portraits_cover.jpg",
            title: 'Portraits Picture',
            description: 'Some awesome description'
          },
          {
            url: "/img/portraits_cover.jpg",
            title: 'Portraits Picture',
            description: 'Some awesome description'
          }
        ]
      }
    ]

    const category = categories.filter( category => category.title.toLowerCase() === getCategory )[0]

    res.render('portfolioCategory.hbs', {
      category: category
    });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
