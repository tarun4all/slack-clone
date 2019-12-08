const express = require('express');
const router = express.Router();

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
