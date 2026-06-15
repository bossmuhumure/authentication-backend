import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const accessToken = (user) => {
    // Corrected to a proper object assignment using commas instead of semicolons
    const tokenPayload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userRole: user.userRole
    };

    const secretKey = process.env.JWT_SECRET_KEY;
    
    // Pass the clean tokenPayload object instead of the heavy model document
    return jwt.sign(tokenPayload, secretKey, { expiresIn: '1d' });
};