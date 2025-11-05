import { axiosInstance } from '../../api/axiosInstance';
import { getAccessToken } from '../../utils/tokenStorage';

const query = `
  query GetChats($isGroup: Boolean) {
    getChats(isGroup: $isGroup) {
      id
      isGroup
      name
      users {
        id
        name
        profile_image
      }
      lastMessage {
        id
        sender {
          id
          name
        }
        text
        createdAt
      }
    }
  }
`;

export const GetChatList = async (isGroup: boolean) => {
  console.log('getChatList ejecutado');
  try {
    const token = await getAccessToken();
    const res = await axiosInstance.post(
      '/graphql',
      { query, variables: { isGroup } },
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization opcional
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('AccessToken:', token);
    console.log({ res });
    const { getChats } = res.data.data;
    console.log('RESPONSE:', getChats);
  } catch (error) {
    console.log({ error });
    throw error.response.data.error;
  }
};
