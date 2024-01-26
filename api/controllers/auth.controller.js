import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json({ message: "User saved successfully" })
    } catch (err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email: email });
        if (!validUser) return next(errorHandler(404, 'User not found'))
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'))
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const expiryDate = new Date(Date.now() + 3600000);//1 hr
        const { password: hashedPassword, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json(rest)
    } catch (err) {
        next(err);
    }
}

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: hashedPassword, ...rest } = user._doc;
            const expiryDate = new Date(Date.now() + 3600000);
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
        } else {

            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random()
                .toString(36).slice(-8)
            const hashedPassword = bcryptjs.createHashedPassword.hashSync(generatedPassword, 10);
            const newUser = new User({ name: req.body.name.split(" ").join("").toLowerCase() + Math.random * 10000, email: req.body.email, password: hashedPassword, profilePicture: req.body.photo })
        }

    } catch (error) {
        next(error)
    }
}