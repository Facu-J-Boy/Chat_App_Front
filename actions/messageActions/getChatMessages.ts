import { axiosInstance } from '../../api/axiosInstance';
import { getAccessToken } from '../../utils/tokenStorage';

const query = `
query GetMessages($chatId: Int!) {
  getMessages(chatId: $chatId) {
    id
    text
    sender {
      id
      name
      email
      profile_image
    }
    createdAt
  }
}
`;

interface GetMessagesData {
  chatId: number;
  setMessages: (chatId: number, msg: any) => void;
}

export const getchatMessages = async (data: GetMessagesData) => {
  const { chatId, setMessages } = data;
  try {
    const token = await getAccessToken();
    const res = await axiosInstance.post(
      '/graphql',
      {
        query,
        variables: { chatId },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { getMessages } = res.data.data;
    console.log('Messages: ', getMessages);
    setMessages(chatId, getMessages);
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
