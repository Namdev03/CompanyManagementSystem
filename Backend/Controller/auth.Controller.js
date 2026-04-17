const authSchema = require('../Model/Auth.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
async function registerApi(req, res) {
    try {
        const { name, phone, email, password, role } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const register = await authSchema.create({
            name,
            phone,
            email,
            password: passwordHash,
            role
        });
        res.status(201).json({ message: "User registered successfully", register });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function loginApi(req, res) {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await authSchema.findOne({ phone });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch =  bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const toSend = {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(toSend, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
     
       res.cookie("securetoken", token, {
      httpOnly: true,
      sameSite: "Lax", // None,Lax,Strict
      secure: false, // https secure connections ,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

        res.status(200).json({
            message: "User logged in successfully",
            user: toSend
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { registerApi, loginApi };