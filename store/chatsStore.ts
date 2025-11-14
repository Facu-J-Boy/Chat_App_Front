import { create } from 'zustand';

type User = {
  id: number;
  name: string;
  profile_image: string;
};

type Message = {
  id: number;
  sender: User;
  text: string;
  createdAt: string;
};

export type Chat = {
  id: number;
  isGroup: boolean;
  name: string;
  chat_image: string;
  users: [User];
  lastMessage: Message;
};

type ChatListState = {
  chatList: Chat[] | [];
  groupsList: Chat[] | [];
  chatListLoading: boolean;
  groupsListLoading: boolean;
};

type ChatListAction = {
  setChatListLoading: (loading: boolean) => void;
  setGroupListLoading: (loading: boolean) => void;
  setChatList: (chatList: [Chat]) => void;
  setGroupList: (groupList: [Chat]) => void;
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
