import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

const storage = {
  async setItem(key: string, value: string) {
    if (isWeb) localStorage.setItem(key, value);
    else await SecureStore.setItemAsync(key, value);
  },
  async getItem(key: string) {
    if (isWeb) return localStorage.getItem(key);
    return await SecureStore.getItemAsync(key);
  },
  async deleteItem(key: string) {
    if (isWeb) localStorage.removeItem(key);
    else await SecureStore.deleteItemAsync(key);
  },
};

export const saveToken = async (accessToken: string) => {
  await storage.setItem('accessToken', accessToken);
};

export const getAccessToken = async () => {
  return await storage.getItem('accessToken');
};

export const clearTokens = async () => {
  await storage.deleteItem('accessToken');
};
