import { axiosInstance } from '../api/axiosInstance';
import { saveToken } from '../utils/tokenStorage';

interface FormData {
  name_email: String;
  password: String;
}

export const LoginAction = async (
  formData: FormData,
  setSessionLoading: (val: boolean) => void,
  setUser: (user: any) => void,
  isLogged: (val: boolean) => void
) => {
  setSessionLoading(true);
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
      setUser(currentUser);
      isLogged(true);
      setSessionLoading(false);
    }
  } catch (error) {
    console.log({ error });
    throw error.response.data.error;
  }
};
