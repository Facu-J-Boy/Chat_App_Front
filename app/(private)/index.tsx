import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ChatCard } from '../../components/ChatCard';
import { chats } from '../../info/chats';
import { GetChatList } from '../../actions/chatActions/GetChatList';
import { useChatsStore } from '../../store/chatsStore';

export default function ChatList() {

  const {chatList, setChatList} = useChatsStore();

  useEffect(() => {
    GetChatList(false, setChatList);
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
