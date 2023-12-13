import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json({ message: "User saved successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}