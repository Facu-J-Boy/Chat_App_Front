import { useSubscription } from '@apollo/client/react';
import { useMessageStore } from '../store/messagesStore';
import { gql } from '@apollo/client';

const MESSAGE_SENT = gql`
  subscription MessageSent {
    messageSent {
      chat {
        id
      }
      id
      text
      createdAt
      sender {
        id
        name
        email
        profile_image
      }
    }
  }
`;

export const GlobalMessageListener = () => {
  const { addMessage } = useMessageStore();

  useSubscription(MESSAGE_SENT, {
    onData: ({ data }: any) => {
      const msg = data.data?.messageSent;
      const id = msg.chat.id;
      addMessage(id, msg);
      console.log({ msg });
    },
    onError: (err) => {
      console.log('❌ Subscription error:', err);
    },
  });

  return null;
};
