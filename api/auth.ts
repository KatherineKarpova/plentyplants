import { setToken, getToken, removeToken } from '../services/secureStorage';

import { config } from 'dotenv';
config();

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000'; // fallback to localhost if env variable is not set


export const login = async (email: string, password: string): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    await setToken(token); // save token securely
    return true;
  } else {
    return false;
  }
};

export const checkUserSession = async (): Promise<any | null> => {
  const token = await getToken();
  if (token) {
    const response = await fetch(`${BASE_URL}/validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return response.json(); // return user data
    } else {
      await removeToken(); // invalid token
    }
  }
  return null;
};

export const logout = async () => {
  await removeToken(); // Clear token
};