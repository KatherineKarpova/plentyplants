import { BASE_URL } from '../config/baseURL';
import { setToken, getToken, removeToken } from '../services/secureStorage';

export type AuthResponse = {
  token?: string;
  user?: {
    id: number;
    email: string;
    name: string;
  };
  message?: string;
};

const buildAuthHeaders = async (extraHeaders: Record<string, string> = {}) => {
  const token = await getToken();

  return {
    'Content-Type': 'application/json',
    ...extraHeaders,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const signUp = async (
  payload: { email: string; password: string; name: string }
): Promise<AuthResponse> => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: await buildAuthHeaders(),
    body: JSON.stringify(payload),
  });

  const data: AuthResponse = await response.json();

  if (response.ok && data.token) {
    await setToken(data.token);
  }

  return data;
};

export const login = async (
  email: string,
  password: string
): Promise<{ success: boolean; data?: AuthResponse; message?: string }> => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data: AuthResponse = await response.json();

  if (response.ok && data.token) {
    await setToken(data.token);
    return { success: true, data };
  }

  return {
    success: false,
    message: data.message || 'Unable to sign in.',
  };
};

export const checkUserSession = async (): Promise<AuthResponse['user'] | null> => {
  const token = await getToken();

  if (!token) {
    return null;
  }

  const response = await fetch(`${BASE_URL}/api/auth/me`, {
    method: 'GET',
    headers: await buildAuthHeaders(),
  });

  if (!response.ok) {
    await removeToken();
    return null;
  }

  const data: AuthResponse = await response.json();
  return data.user || null;
};

export const logout = async () => {
  await removeToken();
};

export const authFetch = async (url: string, init: RequestInit = {}) => {
  const headers = await buildAuthHeaders(init.headers as Record<string, string>);

  return fetch(url, {
    ...init,
    headers,
  });
};
