import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  error: any;
  rules?: object;
  label?: string;
}

export const FormInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules = {},
  label,
  ...rest
}: CustomInputProps) => {
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
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              {...rest}
            />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
