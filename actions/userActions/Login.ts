import { axiosInstance } from '../../api/axiosInstance';
import { saveToken } from '../../utils/tokenStorage';

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
  const data = {
    email: formData.name_email,
    password: formData.password,
  };

  try {
    const res = await axiosInstance.post('/api/auth/signin', data);
    const currentUser = res.data.user;
    const { accessToken } = res.data;
    if (currentUser) {
      saveToken(accessToken);
      setUser(currentUser);
      isLogged(true);
      setSessionLoading(false);
    }
  } catch (error) {
    throw error;
  }
};
