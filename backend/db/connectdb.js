const mongoose = require("mongoose");
const DB='mongodb://localhost:27017/Employee';

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(()=>console.log('db connected')).catch((err)=>{
    console.log("error",err);
})