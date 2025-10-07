import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  rules?: object;
  label?: string;
  isPassword?: boolean;
}

export const FormInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules = {},
  label,
  isPassword = false,
  ...rest
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, error && styles.errorInput]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={isPassword && !showPassword}
                {...rest}
              />
              {isPassword && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.iconContainer}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              )}
            </View>
            {error ? (
              <Text style={styles.errorText}>
                {error.message || 'Error'}
              </Text>
            ) : (
              <Text style={styles.errorText}> </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: 300,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
