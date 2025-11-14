import React from 'react';
import { FlatList } from 'react-native';
import { ChatCard } from './ChatCard';
import { Chat } from '../store/chatsStore';

interface ChatListprops {
  data: Chat[];
}

export const ChatList: React.FC<ChatListprops> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatCard
          image={
            item.isGroup
              ? item.chat_image
              : item.users[0].profile_image
          }
          name={item.isGroup ? item.name : item.users[0].name}
          lastMessage={item.lastMessage?.text || null}
        />
      )}
    />
  );
};
