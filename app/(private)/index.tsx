import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ChatCard } from '../../components/ChatCard';
import { chats } from '../../info/chats';

export default function ChatList() {
  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.index}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
