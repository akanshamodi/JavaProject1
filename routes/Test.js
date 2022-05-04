var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Akansha', function(req, res, next) {
  console.log("Running");
  res.send("Akansha");
  
});

router.get('/Home', function(req, res, next) {
  console.log("Running");
  res.send("welcome");
  
});
router.post('/Akan',function(req,res,next){
  console.log("hello");
  
    msg:"this is a post"
})

router.put('/Akansha', function(req, res, next) {
  console.log("Running");
  msg:"updated successfully"  
});
// router.delete('/kirt', function(req, res, next) {
//   console.log("Running");
// msg:"deleted successfully"  
// });
module.exports = router;
