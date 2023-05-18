const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }) );

app.set('view engine', 'ejs');

const indexRouter   = require('./routes/indexRouter');
const newFormRouter = require('./routes/newFormRouter');

app.use('/',    indexRouter);
app.use('/new', newFormRouter);

app.listen(3000);
