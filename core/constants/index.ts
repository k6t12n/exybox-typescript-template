import dotenv from 'dotenv'

dotenv.config();

export const APP_NAME = process.env.APP_NAME || 'exybox-project';
export const SECRET_KEY = process.env.SECRET_KEY || 'secret';

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASS = process.env.DB_PASS || '';
export const DB_NAME = process.env.DB_NAME || '';
