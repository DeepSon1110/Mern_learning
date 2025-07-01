import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
        
    email: {
        type: String,
        Unique : true,
        required: true},

    password : {
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum : ['ADMIN','EMPLOYEE','CUSTOMER'],
        default: 'CUSTOMER'
    }

},{
    timestamps: true

})

const User = mongoose.model('User', userSchema);
export default User;