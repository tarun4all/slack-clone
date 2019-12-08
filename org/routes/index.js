const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/reactTest', (req, res) => {
  console.log('req params', req.cookies.name);
  res.cookie('name', 'pappu', { maxAge: 900000, httpOnly: true});
  res.sendFile(path.join(__dirname+'/../public/view/build/index.html'));
});

/* GET home page. */
router.get('/', middleware.subdomain ,function(req, res, next) {
  console.log(req.subdomain, req.subdomains);
  res.render('index', { title: req.subdomain });
});

router.group('/api', (app) => {
  app.get('/login', (req, res) => {
    res.send('oh');
  });
});

module.exports = router;
