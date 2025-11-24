import { axiosInstance } from '../../api/axiosInstance';
import { getAccessToken } from '../../utils/tokenStorage';

const query = `
mutation($chatId: Int!, $text: String!){
  sendMessage(chatId: $chatId, text: $text) {
    message {
      id
      text
      createdAt
      chat {
        id
      }
      sender {
        id
        name
        profile_image
      }
    }
    chatSummary {
      id
      name
      chat_image
      isGroup
      users {
        id
        name
      }
      lastMessage {
        id
        text
        createdAt
        sender {
          id
          name
          profile_image
        }
        chat {
          id
        }
      }
    }
  }
}
`;

interface SendMessageData {
  chatId: number;
  text: string;
}

export const sendMessage = async (data: SendMessageData) => {
  const { chatId, text } = data;
  try {
    const token = await getAccessToken();
    await axiosInstance.post(
      '/graphql',
      {
        query,
        variables: { chatId, text },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
