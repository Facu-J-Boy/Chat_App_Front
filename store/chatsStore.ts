import { create } from 'zustand';
import { ChatInterface } from '../interfaces';

type ChatListState = {
  chatList: ChatInterface[] | [];
  groupsList: ChatInterface[] | [];
  chatListLoading: boolean;
  groupsListLoading: boolean;
};

type ChatListAction = {
  setChatListLoading: (loading: boolean) => void;
  setGroupListLoading: (loading: boolean) => void;
  setChatList: (chatList: [ChatInterface]) => void;
  setGroupList: (groupList: [ChatInterface]) => void;
};

export const useChatsStore = create<ChatListState & ChatListAction>(
  (set) => ({
    chatList: [],
    groupsList: [],
    chatListLoading: false,
    groupsListLoading: false,
    setChatListLoading: (loading) =>
      set(() => ({ chatListLoading: loading })),
    setGroupListLoading: (loading) =>
      set(() => ({ groupsListLoading: loading })),
    setChatList: (chatList) => set(() => ({ chatList: chatList })),
    setGroupList: (groupList) =>
      set(() => ({ groupsList: groupList })),
  })
);
