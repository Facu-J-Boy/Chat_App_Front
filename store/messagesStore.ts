import { create } from 'zustand';
import { MessageInterface } from '../interfaces';

type MessagesState = {
  messages: Record<number, MessageInterface[]>;
};

type MessagesAction = {
  setMessages: (chatId: number, msg: MessageInterface[]) => void;
  addMessage: (chatId: number, msg: MessageInterface) => void;
  prependMessages: (chatId: number, msgs: MessageInterface[]) => void; // para paginación
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
