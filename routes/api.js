const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

/*
router.get('/stores', function(req, res, next) {
  // Ninja.find({}).then(function(ninjas) {
  //     res.send(ninjas);
  //   });

  Ninja.geoNear(
    {
    type: 'Point',
    coordinates: [
      parseFloat(req.query.lng),
      parseFloat(req.query.lat)
    ]},
    {
      maxDistance: 900000,
      spherical: true
    }
  )
    .then(function(Companys){
      res.send(Companys);
    })
    .catch(next);
});
*/

router.get('/stores', function(req, res, next) {
  // Ninja.find({}, function (err, users) {
  //   res.send(users);
  // });
  let queryObject = req.query;

  Ninja.find(
    queryObject,
    function(err, companies){ 
     res.json(companies);
     //res.send(req.query);
  });
});

router.post('/stores', function(req, res, next) {
  Ninja.create(req.body)
  .then(function(ninja) {
      res.send(ninja);
  })
  .catch(next);
});

router.put('/stores/:id', function(req, res, next) {
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(function(ninja) {
    Ninja.findOne({_id: req.params.id})
    .then(function(ninja){
      res.send(ninja);
    });
    
  })
  .catch(next);
});

router.delete('/stores/:id', function(req, res, next) {
  Ninja.findByIdAndRemove({
    _id: req.params.id
  })
  .then(function(ninja) {
    res.send(ninja);
  })
  .catch(next);
});

module.exports = router;
