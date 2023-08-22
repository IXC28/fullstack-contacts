const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');
const contactsRouter = require('./controllers/contacts');


(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conecto a mongo db');
  } catch (error) {
    console.log(error);
  }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


// rutas Frontend

app.use('/', express.static(path.resolve('view', 'home')));
app.use('/signup', express.static(path.resolve('view', 'signup')));
app.use('/login', express.static(path.resolve('view', 'login')));
app.use('/contact', express.static(path.resolve('view', 'contact')));

app.use('/styles', express.static(path.resolve('view', 'styles')));
app.use('/components', express.static(path.resolve('view', 'components')));
app.use('/img', express.static(path.resolve('img')));
app.use('/verify/:id/:token', express.static(path.resolve('view', 'verify')));


app.use(morgan('tiny'));

// rutas Backend

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/contact', userExtractor, contactsRouter);


module.exports = app;