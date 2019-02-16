// require modules for our UserModel
let mongoose = require('mongoose');
let passportLocalMongoose = require('types/passport-local-mongoose');

let userSchema = mongoose.Schema({

    username: {
        type: String,
        default: '',
        trim: true,
        require: 'username is required'
    },
    /* taken out because password will be encrypted by password-local-mongoose
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    }
    */
    email: {
        type: String,
        default: '',
        trim: true,
        require: 'email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        require: 'Display Name is required'
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    }
},
    {
        collection: "users"
    }
);

//configure options for the UserSchema
let options =({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);