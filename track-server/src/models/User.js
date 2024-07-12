const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Model User
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true, 
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

//hahing and salt password
userSchema.pre('save', function(next){
    const user = this;

    //se l'utente non ha modificato la password 
    //allora non salare la pass
    if(!user.isModified('password')){
        return next();
    }

    //sennò genera salt
    bcrypt.genSalt(10, (err,salt)=>{
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash)=>{
            if(err){
                return next(err);
            }
            //abbiamo sostituito la pass con una pass salata
            user.password = hash;
            next();
        })
    })
});

//per automatizzare il processo di verifica password
userSchema.methods.comparePassword = function(candidatePassword){
    //usiamo la parola chiave function per poter
    //riferirci all'utente che vogliamo con this
    //con l'arrow function non si potrebbe fare
    const user = this;
    return new Promise((resolve, reject)=> {
        bcrypt.compare(candidatePassword,user.password,(err, isMatch)=>{
            if(err){
                return reject
            }

            if(!isMatch){
                return reject(false);
            }

            resolve(true);
        })
    })
}
mongoose.model('User', userSchema);