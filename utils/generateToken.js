import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const accessToken = (payload) => {
  payload:{
    id:payload._id;
    firstName:payload.firstName;
    lastName:payload.lastName;
    email:payload.email

  }

    const secretKey = process.env.JWT_SECRET_KEY;
    return jwt.sign(payload, secretKey, { expiresIn: '1d' });
}