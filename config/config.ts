import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:3000' // Use for local development (Android emulator)
    : 'https://api.plentyplants.com'; // Replace with your production backend URL

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false, // Optional: Disable logging
});

export default sequelize;