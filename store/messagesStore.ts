import { create } from 'zustand';
import { User } from './chatsStore';

type Message = {
  id: number;
  text: string;
  sender: User;
  createdAt: string;
};

type MessagesState = {
  messages: Record<number, Message[]>;
};

type MessagesAction = {
  setMessages: (chatId: number, msg: Message[]) => void;
  addMessage: (chatId: number, msg: Message) => void;
  prependMessages: (chatId: number, msgs: Message[]) => void; // para paginación
};

export const useMessageStore = create<MessagesState & MessagesAction>(
  (set) => ({
    messages: {},

    setMessages: (chatId, msgs) =>
      set((state) => ({
        messages: { ...state.messages, [chatId]: msgs },
      })),

    addMessage: (chatId, msg) =>
      set((state) => ({
        messages: {
          ...state.messages,
          [chatId]: [...(state.messages[chatId] || []), msg],
        },
      })),

    prependMessages: (chatId, msgs) =>
      set((state) => ({
        messages: {
          ...state.messages,
          [chatId]: [...msgs, ...(state.messages[chatId] || [])],
        },
      })),
  })
);
