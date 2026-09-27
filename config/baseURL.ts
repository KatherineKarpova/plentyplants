import * as dotenv from 'dotenv';

dotenv.config();

export const BASE_URL =
  process.env.API_BASE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:3000'
    : 'https://api.plentyplants.com');
