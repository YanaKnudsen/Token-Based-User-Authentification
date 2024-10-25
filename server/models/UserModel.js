const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema=new Schema({
    name:String,
    email: {type:String,unique:true},
    password:String,
},{ collection : 'Authetification' });

const UserModel=mongoose.model('UserModel',UserSchema);

module.exports = UserModel;