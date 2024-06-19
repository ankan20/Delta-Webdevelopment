const express = require('express');
const { handleUserSignup ,handleUserLogin} = require('../controllers/user');

const router = express.Router();

router.post('/',handleUserSignup)
router.get('/login',(req,res)=>{return res.render('login')})
router.post('/login',handleUserLogin)

module.exports = router;



