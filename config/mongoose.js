const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://samarali5177:MlpR2smfbPMHWI6j@cluster0.ued8oqi.mongodb.net/?retryWrites=true&w=majority");
let db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting db"));

db.once('open',()=>{
    console.log('successfully connected');
})