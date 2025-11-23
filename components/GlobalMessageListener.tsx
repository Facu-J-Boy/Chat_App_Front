import { useSubscription } from '@apollo/client/react';
import { useMessageStore } from '../store/messagesStore';
import { gql } from '@apollo/client';
import { useChatsStore } from '../store/chatsStore';

const MESSAGE_SENT = gql`
  subscription MessageSent {
    messageSent {
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
        lastMessage {
          id
          text
          createdAt
          sender {
            id
            name
            profile_image
          }
        }
        users {
          id
          name
          profile_image
        }
      }
    }
  }
`;

export const GlobalMessageListener = () => {
  const { addMessage } = useMessageStore();
  const { updateChatLastMessage } = useChatsStore();

  useSubscription(MESSAGE_SENT, {
    onData: ({ data }: any) => {
      const { message, chatSummary } = data.data?.messageSent;
      const { id } = message.chat;
      addMessage(id, message);
      updateChatLastMessage(chatSummary);

      console.log({ message });
    },
    onError: (err) => {
      console.log('❌ Subscription error:', err);
    },
  });

  return null;
};
