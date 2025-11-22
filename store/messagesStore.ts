import { create } from 'zustand';
import { ChatInterface, MessageInterface } from '../interfaces';

type MessagesState = {
  chatHeader: ChatInterface | null;
  messages: Record<number, MessageInterface[]>;
};

type MessagesAction = {
  setChatHeader: (chat: ChatInterface) => void;
  setMessages: (chatId: number, msg: MessageInterface[]) => void;
  addMessage: (chatId: number, msg: MessageInterface) => void;
  prependMessages: (chatId: number, msgs: MessageInterface[]) => void; // para paginación
};

export const useMessageStore = create<MessagesState & MessagesAction>(
  (set) => ({
    chatHeader: null,

    messages: {},

    setChatHeader: (chat) => set(() => ({ chatHeader: chat })),

    setMessages: (chatId, msgs) =>
      set((state) => ({
        messages: { ...state.messages, [chatId]: msgs },
      })),

    addMessage: (chatId, msg) =>
      set((state) => ({
        messages: {
          ...state.messages,
          [chatId]: [msg, ...(state.messages[chatId] || [])],
        },
      })),

    prependMessages: (chatId, msgs) =>
      set((state) => ({
        messages: {
          ...state.messages,
          [chatId]: [...(state.messages[chatId] || []), ...msgs],
        },
      })),
  })
);
