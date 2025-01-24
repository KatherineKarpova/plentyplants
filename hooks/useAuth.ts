import { useState, useEffect } from 'react';
import { checkUserSession, login, logout } from '../api/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const userData = await checkUserSession();
      setUser(userData);
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    if (success) {
      const userData = await checkUserSession();
      setUser(userData);
    }
    return success;
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return { user, loading, login: handleLogin, logout: handleLogout };
};
