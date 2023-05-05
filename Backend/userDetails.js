const mongoose = require("mongoose");
const UserDetailsScehma = new mongoose.Schema(
    {

        name: String,
        date: String,
        Gender: String,
        mobile: Number,
        Govt: String,
        govtid: String,
        detail: String,
        idType: String,
        email: {type:String, unique:true},
        Emergency: Number,
        address: String,
        state: String,
        city: String,
        country: String,
        pincode: Number,
        occupation: String,
        religion: String,
        merital: String,
        blood: String,
        nationality: String,

},
{
collection: "UserInfo",
}
);
mongoose.model("userInfo", UserDetailsScehma);