const express = require('express');

const router = express.Router();

router.use(display);

const messages   = [];
const productObj = {};

router.get('/', (req, res) => res.render('index', { ...productObj }) );

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    
    user: req.body.username, 
    
    added: new Date()
  });

  res.redirect('/');
});

function display(req, res, next) {
  for (let i = 0; i < messages.length; i++) {
    for (let key in messages[i]) {
      const { [key]: prop } = messages[i];
      
      productObj[`${key}${i}`] = prop;
    }
  }

  next()
}

module.exports = router;
