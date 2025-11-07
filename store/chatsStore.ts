import {create} from 'zustand';

type User = {
    id: number;
    name: string;
    profile_image: string
}

type Message = {
    id: number;
    sender: User;
    text: string;
    createdAt: string;
}

type Chat = {
id: number;
name: string;
users: [User];
lastMessage: Message;
}

type ChatListState = {
    chatList: [Chat] | [];
    chatListLoading: boolean;
}

type ChatListAction = {
    setChatListLoading: (loading: boolean) => void;
    setChatList: (chatList: [Chat]) => void;
}

export const useChatsStore = create<ChatListState & ChatListAction>(
    (set) => ({
        chatList: [],
        chatListLoading: false,
        setChatListLoading: (loading) => set(() => ({chatListLoading: loading})),
        setChatList: (chatList) => set(() => ({chatList: chatList})),
    })
)