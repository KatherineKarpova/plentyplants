import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) return null; // Show a loading screen if necessary

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
