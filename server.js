const path = require('path');
const routes = require('./controllers/');

app.use(express.static(path.join(__dirname, 'public')));

// helpers and handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');