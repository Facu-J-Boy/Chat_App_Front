import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ChatCard } from '../../components/ChatCard';
import { chats } from '../../info/chats';
import { GetChatList } from '../../actions/chatActions/GetChatList';

export default function ChatList() {
  useEffect(() => {
    GetChatList(false);
  }, []);

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
