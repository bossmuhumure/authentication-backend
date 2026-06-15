import User from "../models/userModel.js";
import { accessToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";

// REGISTER CONTROLLER
export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, userRole, password } = req.body;
        
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "please fill all fields" });
        } 

        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(400).json({ message: "user already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            userRole: userRole || 'user' // Uses default fallback if empty
        });

        await newUser.save();
        const token = accessToken(newUser);
        
        return res.status(201).json({ newUser, token, message: "user registered successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// LOGIN CONTROLLER
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "invalid email or password" });
        }

        // 1. Fetch user profile exclusively by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // 2. Safely verify password authenticity via bcrypt hash comparison
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = accessToken(user);
        
        const loggedInUser = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName, // Fixed the 'üserEmail' typo from original code
            email: user.email,
            userRole: user.userRole,
        };

        return res.status(200).json({ token, loggedInUser, message: "log in successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};