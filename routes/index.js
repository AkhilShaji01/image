var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  const imageFolder =  './public/img/'
  const fs = require('fs');
  const imageFiles = fs.readdirSync(imageFolder);
  res.render('index', { title: 'Images',images: imageFiles });
});
router.post("/upload", (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
  }

  const sampleFile = req.files.sampleFile;
  console.log(sampleFile)
  const uploadPath = './public/img/'+sampleFile.name;
console.log(uploadPath)
  sampleFile.mv(uploadPath, (err) => {
      if (err) {
          return res.status(500).send(err);
      }

      res.redirect('/');
  });
});
module.exports = router;
