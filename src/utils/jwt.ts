import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Ijwt from '../interfaces/jwtInterfaces';

dotenv.config();

const secret = 'inuyasha';

const jwtConfig: SignOptions = {
  expiresIn: '10m',
  algorithm: 'HS256',
};

export default function generateToken(payload: Ijwt) {
  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
}
