import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useChatsStore } from '../../store/chatsStore';
import { GetChatList } from '../../actions/chatActions/getChatList';
import { ChatList } from '../../components/ChatList';

export default function Index() {
  const { chatList, setChatList } = useChatsStore();

  useEffect(() => {
    !chatList.length && GetChatList({ isGroup: false, setChatList });
  }, []);

  return <ChatList data={chatList} />;
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
