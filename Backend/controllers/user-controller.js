const Users = require("../models/user-model");

const resisterHandle = async (req, res) => {
  try {
    const { name, mobile, email } = req.body;

    console.log(name, mobile, email);

    if (!email || !mobile || !name) {
      return res.status(404).json({ message: "ALL FIELDS REQUIRED" });
    }

    const saveUser = new Users({
      name,
      mobile,
      email,
    });

    await saveUser.save();

    return res.status(201).json({ message: "User resistered successfully" });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  resisterHandle,
};
