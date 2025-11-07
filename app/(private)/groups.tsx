import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { chats } from '../../info/chats';
import { ChatCard } from '../../components/ChatCard';

export default function Groups() {
  return (
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatCard
            image={item.image}
            name={item.name}
            lastMessage={item.lastMessage}
          />
        )}
      />
    );
}
