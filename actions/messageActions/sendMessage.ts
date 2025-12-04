import { axiosInstance } from '../../api/axiosInstance';
import { MessageInterface } from '../../interfaces';
import { getAccessToken } from '../../utils/tokenStorage';

const query = `
mutation($chatId: Int!, $text: String!, $createdAt: String!){
  sendMessage(chatId: $chatId, text: $text, createdAt: $createdAt) {
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
      status
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
         status 
      }
    }
  }
}
`;

interface SendMessageData {
  chatId: number;
  userId: number | undefined;
  text: string;
  addMessage: (chatId: number, msg: MessageInterface) => void;
}

export const sendMessage = async (data: SendMessageData) => {
  const { chatId, userId, text, addMessage } = data;
  const createdAt = new Date().toISOString();
  // const messageId = Date.now();

  const msg: MessageInterface = {
    id: createdAt,
    sender: { id: userId },
    text,
    createdAt: new Date(createdAt),
  };

  addMessage(chatId, msg);

  console.log({ createdAt, date: new Date(createdAt) });
  try {
    const token = await getAccessToken();
    await axiosInstance.post(
      '/graphql',
      {
        query,
        variables: { chatId, text, createdAt },
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
