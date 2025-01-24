// src/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import SignUpStyles from '../styles/SignUpStyles'; // Import the styles

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'User signed up successfully');
    }, 2000);

    console.log('Form Data:', data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={SignUpStyles.container} // Use styles from the imported file
    >
      <ScrollView contentContainerStyle={SignUpStyles.scrollContainer}>
        <Text style={SignUpStyles.title}>Sign Up</Text>

        {/* Email Input */}
        <View style={SignUpStyles.inputContainer}>
          <Text style={SignUpStyles.label}>Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[SignUpStyles.input, errors.email ? SignUpStyles.errorBorder : null]}
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && <Text style={SignUpStyles.errorText}>{errors.email.message}</Text>}
        </View>

        {/* Password Input */}
        <View style={SignUpStyles.inputContainer}>
          <Text style={SignUpStyles.label}>Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required', minLength: 6 }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[SignUpStyles.input, errors.password ? SignUpStyles.errorBorder : null]}
                placeholder="Enter your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
          />
          {errors.password && (
            <Text style={SignUpStyles.errorText}>
              {errors.password.type === 'minLength'
                ? 'Password must be at least 6 characters'
                : errors.password.message}
            </Text>
          )}
        </View>

        {/* Confirm Password Input */}
        <View style={SignUpStyles.inputContainer}>
          <Text style={SignUpStyles.label}>Confirm Password</Text>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{ required: 'Confirm Password is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  SignUpStyles.input,
                  errors.confirmPassword ? SignUpStyles.errorBorder : null,
                ]}
                placeholder="Confirm your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
          />
          {errors.confirmPassword && (
            <Text style={SignUpStyles.errorText}>{errors.confirmPassword.message}</Text>
          )}
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[SignUpStyles.button, loading ? SignUpStyles.buttonDisabled : null]}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text style={SignUpStyles.buttonText}>{loading ? 'Signing Up...' : 'Sign Up'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;