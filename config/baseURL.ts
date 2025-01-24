import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:3000' // Use for local development (Android emulator)
    : 'https://api.plentyplants.com'; // Replace with your production backend URL
