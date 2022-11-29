const express = require('express');

// backend ka router jo express provide kr rha hai

const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`You are on home page using router js in express`);
});

//register page pe jo bhi data enter kroge wo sb post ho jayega
router.post('/register',(req,res)=>{
console.log(req.body);
res.json({message:req.body});
})

module.exports = router;