import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>PlentyPlants</Text>
      <Text style={styles.title}>Log in to your rainbow routine</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.primaryText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.secondaryText}>Create account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f1',
    justifyContent: 'center',
    padding: 24,
  },
  kicker: {
    color: '#ff7a59',
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: '#2a1d1c',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ffd6a5',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: '#ff7a59',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryText: {
    color: '#2d6a4f',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default LoginScreen;
