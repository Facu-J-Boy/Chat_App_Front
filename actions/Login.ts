import { axiosInstance } from '../api/axiosInstance';
import { saveToken } from '../utils/tokenStorage';

interface FormData {
  name_email: String;
  password: String;
}

export const LoginAction = async (
  formData: FormData,
  setUser: (user: any) => void,
  isLogged: (val: boolean) => void
) => {
  console.log('LoginAction ejecutado');
  const data = {
    email: formData.name_email,
    password: formData.password,
  };

  console.log({ formData });
  try {
    const response = await axiosInstance.post(
      '/api/auth/signin',
      data
    );
    const currentUser = response.data.user;
    const { accessToken } = response.data;
    console.log({ response });
    if (currentUser) {
      console.log({ accessToken });
      saveToken(accessToken);
      isLogged(true);
      setUser(currentUser);
    }
  } catch (error) {
    console.log({ error });
    throw error.response.data.error;
  }
};
