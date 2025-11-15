export interface UserInterface {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  profile_image: null | string;
}

export interface MessageInterface {
  id: number;
  sender: UserInterface;
  text: string;
  createdAt: string;
}

export interface ChatInterface {
  id: number;
  isGroup: boolean;
  name: string;
  chat_image: string;
  users: [UserInterface];
  lastMessage: MessageInterface;
}
