require('./models/User') //reference at user collection deve essere scritta senza const 
//perchè il programma vuole leggee proprio quella riga di codice
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser'); //per postman per leggere i json 
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json()) //sopra authRoutes sempre
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri= 'mongodb+srv://admin:passwordpassword@cluster0.urrpvw4.mongodb.net/'
mongoose.connect(mongoUri);
mongoose.connection.on('connected',()=>{
    console.log('connessa a mongo istance');
});

mongoose.connection.on('error',(err)=>{
    console.log('errore connessione a mongo istance');
})

app.get('/', requireAuth, (req, res)=>{
    //res.send('hi there, im vale');
    res.send(`Your email: ${req.user.email}`)
});

app.listen(3000, ()=>{ 
    console.log('Listening on port 3000 by vale')
})