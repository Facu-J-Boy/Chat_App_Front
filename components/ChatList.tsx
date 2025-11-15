import React from 'react';
import { FlatList } from 'react-native';
import { ChatCard } from './ChatCard';
import { ChatInterface } from '../interfaces';

interface ChatListprops {
  data: ChatInterface[];
}

export const ChatList: React.FC<ChatListprops> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ChatCard data={item} />}
    />
  );
};
