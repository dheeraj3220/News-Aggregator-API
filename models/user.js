const mongoose=require('mongoose'),
Schema= mongoose.Schema;

/*
1. Name
2. Email
3. passoword
4. preference array
5. created
6. updated
*/

const userSchema= new Schema({
    name: {
        type: String,
        require:[true, 'name not Provided']
    },
    email: {
        type: String,
        unique:[true, 'email already exists in the db'],
        require:[true, 'email not Provided'],
        lowercase: true,
        trim : true,
        validate:{
            validator: function(v){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: 'Invalid Email, Not in right format'
        }
    },
    password:{
        type : String,
        require:[true, 'password not Provided'],
    },
    prefrence:{
        type : Array,
    },
    created:{
        type: Date,
        default: Date.now,
    },
    updated:{

    }
});

module.exports= mongoose.model('User',userSchema);