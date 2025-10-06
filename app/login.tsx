import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FormInput } from '../components/FormInput';
import { Logo } from '../components/Logo';

type FormData = {
  name: string;
  email: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log({ data });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Logo />
      <FormInput
        name="name"
        control={control}
        label="Nombre o email"
        placeholder="Escribe tu nombre o correo"
        error={errors.name}
        rules={{
          required: 'Este campo es obligatorio',
          pattern: {
            value:
              /^([a-zA-ZÀ-ÿ\s]{2,}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            message:
              'Debe ser un nombre válido o un correo electrónico',
          },
        }}
      />
      <FormInput
        name="email"
        control={control}
        label="Correo"
        placeholder="Escribe tu correo"
        error={errors.email}
        keyboardType="email-address"
        rules={{
          required: 'El correo es obligatorio',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Correo inválido',
          },
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#2F1B5F',
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: '#fff', // acá defines el color del texto
    fontSize: 16,
    fontWeight: 'bold',
  },
});
