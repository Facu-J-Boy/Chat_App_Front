import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LoginAction } from '../../actions/Login';
import { FormInput } from '../../components/FormInput';
import { Logo } from '../../components/Logo';
import { useSessionStore } from '../../store/sessionStore';

type FormData = {
  name_email: string;
  password: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name_email: '',
      password: '',
    },
  });

  const { isLogged, setUser } = useSessionStore();

  const onSubmit = (data: FormData) => {
    console.log({ data });
    LoginAction(data, setUser, isLogged);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <Text>HEY</Text>
      </View>
      <FormInput
        name="name_email"
        control={control}
        // label="Nombre o email"
        placeholder="Username or email"
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
        name="password"
        isPassword
        control={control}
        // label="Correo"
        placeholder="Password"
        rules={{
          required: 'La contraseña es obligatoria',
          pattern: {
            value: /^.{5,}$/,
            message: 'Contraseña inválido',
          },
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text>Don't have an account? Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    // justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  button: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#47239f',
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: '#fff', // acá defines el color del texto
    fontSize: 16,
    fontWeight: 'bold',
  },
});
