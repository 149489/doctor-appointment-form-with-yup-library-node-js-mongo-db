const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const cors = require("cors");

app.use(cors());
const DB_URL = 'mongodb://127.0.0.1:27017/test';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

};

mongoose.connect(DB_URL, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB',error));
require("./userDetails");

const User = mongoose.model("userInfo");
app.post("/register", async (req, res) => {
  const { name,date,Gender,mobile,Govt,govtid,detail,idType,email,Emergency,address,state,city,country,
    pincode,occupation,religion,merital,blood,nationality } = req.body;
  try {
    const oldUser =User.findOne({email}); 
    if(oldUser){
        res.send({error:"user Exists"})
    }
    await User.create({
      name,
      date,
      Gender,
      mobile,
      Govt,
      govtid,
      detail,
      idType,
      email,
      Emergency,
      address,
      state,
      city,
      country,
      pincode,
      occupation,
      religion,
      merital,
      blood,
      nationality,
    });

    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.listen(5000,()=>{
    console.log("server Started")
});
