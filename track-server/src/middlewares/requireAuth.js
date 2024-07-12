/*
Questa è una funzione che prenderà una richiesta in arrivo e farà una sorta di pre-elaborazione su di essa.
*/

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    //authorization === Bearer 'hdbckjbkjdsbcywfub'

    if (!authorization) {
        return res.status(401).send({ error: 'devi essere loggato by vale' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'devi essere loggato by vale2' })
        }
        const { userId } = payload;

        const user = await User.findById(userId);
        req.user = user;
        next();
    })
}