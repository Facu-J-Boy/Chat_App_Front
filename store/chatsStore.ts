import { create } from 'zustand';
import { ChatInterface, MessageInterface } from '../interfaces';

type ChatListState = {
  chatList: ChatInterface[];
  groupsList: ChatInterface[];
  chatListLoading: boolean;
  groupsListLoading: boolean;
};

type ChatListAction = {
  setChatListLoading: (loading: boolean) => void;
  setGroupListLoading: (loading: boolean) => void;
  setChatList: (chats: ChatInterface[]) => void;
  setGroupList: (groups: ChatInterface[]) => void;

  updateChatLastMessage: (chatSummary: ChatInterface) => void;
};

export const useChatsStore = create<ChatListState & ChatListAction>(
  (set, get) => ({
    chatList: [],
    groupsList: [],
    chatListLoading: false,
    groupsListLoading: false,

    setChatListLoading: (loading) =>
      set({ chatListLoading: loading }),
    setGroupListLoading: (loading) =>
      set({ groupsListLoading: loading }),

    setChatList: (chatList) => set({ chatList }),
    setGroupList: (groupsList) => set({ groupsList }),

    updateChatLastMessage: (chatSummary) => {
      const { chatList, groupsList } = get();

      const { isGroup, id, lastMessage } = chatSummary;

      let list;

      if (isGroup) {
        list = groupsList;
      } else {
        list = chatList;
      }

      const exists = list.some((c) => c.id === id);

      let updatedChatList: ChatInterface[];

      if (exists) {
        updatedChatList = list.map((c) =>
          c.id === id ? { ...c, lastMessage: lastMessage } : c
        );
        const index = updatedChatList.findIndex(
          (item) => item.id === id
        );
        if (index !== -1) {
          const item = updatedChatList[index];
          updatedChatList = [
            item,
            ...updatedChatList.filter((_, i) => i !== index),
          ];
        }
      } else {
        updatedChatList = [chatSummary, ...list];
      }
      if (isGroup) {
        set({ groupsList: updatedChatList });
      } else {
        set({ chatList: updatedChatList });
      }
    },
  })
);
