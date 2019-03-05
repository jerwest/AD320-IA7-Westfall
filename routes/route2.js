var express = require('express');
var router = express.Router();
var jsonObject = require("../colors.json")

router.get('/all', function (req, res, next) {
  res.send(jsonObject)
})

router.get('/:color', function(req, res, next) {
  res.send(returnColor(req.params.color));
});

function returnColor(color) {
  for(var i = 0; i < jsonObject.colors.length; i++) {
    if(jsonObject.colors[i].color === color) {
      return jsonObject.colors[i];
    };
  };
};

module.exports = router;
