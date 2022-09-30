const mongoose=require('mongoose');
const {Schema}=mongoose;
const BookSchema=new Schema({

Name:{
    type:String,
    require:true
},

Image_url:{
    type:String,
    require:true
},

Author:{
    type:String,
    require:true
},

Pages:{
    type:String,
    require:true
},

Price:{
    type:Number,
    require:true
}
});
const Book=mongoose.model('book',BookSchema);
module.exports=Book;

//book = model
//Book = schema