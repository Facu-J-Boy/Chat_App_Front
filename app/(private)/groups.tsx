import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { chats } from '../../info/chats';
import { ChatCard } from '../../components/ChatCard';
import { useChatsStore } from '../../store/chatsStore';
import { GetChatList } from '../../actions/chatActions/getChatList';

export default function Groups() {
  const { groupsList, setGroupList } = useChatsStore();

  useEffect(() => {
    !groupsList.length &&
      GetChatList({ isGroup: true, setGroupList });
  }, []);

  return (
    <FlatList
      data={groupsList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatCard
          image={item.users[0].profile_image}
          name={item.name}
          lastMessage={item.lastMessage?.text || null}
        />
      )}
    />
  );
}
