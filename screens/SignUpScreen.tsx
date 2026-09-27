import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
};

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>Join the rainbow</Text>
      <Text style={styles.title}>Create your gut-health profile</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} autoCapitalize="none" keyboardType="email-address" />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.primaryText}>Create account</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secondaryText}>Already have an account?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0ff',
    justifyContent: 'center',
    padding: 24,
  },
  kicker: {
    color: '#845ef7',
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: '#2a1d1c',
    fontSize: 31,
    fontWeight: '900',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#d8c3ff',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: '#845ef7',
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

export default SignUpScreen;