const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');//definizione dell' "idea" di utente

const router = express.Router();

router.post('/signup', async (req,res)=>{//per passare il json a postman
    //console.log(req.body);
    // req.body === { "email":"test2@test.com", "password":"mypassword"}
  
    //prendiamo dal body ciò che ci serve e destrutturizziamo in diverse variabili
    const {email, password} = req.body;
    try{
    //uno user sarà composto da email e pass
     const user = new User({email, password});

    //salvare questi dati nel db
    await user.save(); // asincrona perchè prima manda i dati e solo dopo crea user nel db

        const token = jwt.sign({userId: user._id},'MY_SECRET_KEY');
    //res.send('You made a post request by vale');
        res.send({token});

    } catch (err){
        return res.status(442).send(err.message);
    }
});

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    //if no email o no password then return error
    if(!email || !password){
        return res.status(422).send({error: 'aggiungi mail o password'})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).send({error: 'Email not found/invalid pass o email'});
    }

    try
    {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id},'MY_SECRET_KEY')
        res.send({token});
    }
    catch(err){
        return res.status(422).send({error: 'invalid pass o email'})
    }
});

module.exports = router;