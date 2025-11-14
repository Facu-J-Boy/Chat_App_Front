import React, { useEffect } from 'react';
import { useChatsStore } from '../../store/chatsStore';
import { GetChatList } from '../../actions/chatActions/getChatList';
import { ChatList } from '../../components/ChatList';

export default function Groups() {
  const { groupsList, setGroupList } = useChatsStore();

  useEffect(() => {
    !groupsList.length &&
      GetChatList({ isGroup: true, setGroupList });
  }, []);

  return <ChatList data={groupsList} />;
}
