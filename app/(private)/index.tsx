import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ChatCard } from '../../components/ChatCard';
import { useChatsStore } from '../../store/chatsStore';
import { GetChatList } from '../../actions/chatActions/getChatList';

export default function ChatList() {
  const { chatList, setChatList } = useChatsStore();

  useEffect(() => {
    !chatList.length && GetChatList({ isGroup: false, setChatList });
  }, []);

  return (
    <FlatList
      data={chatList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatCard
          image={item.users[0].profile_image}
          name={item.users[0].name}
          lastMessage={item.lastMessage?.text || null}
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
