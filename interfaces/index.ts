export interface UserInterface {
  id: number | undefined;
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
  profile_image?: null | string;
}

export interface MessageInterface {
  id: number | string;
  sender: UserInterface;
  text: string;
  createdAt: Date;
}

export interface ChatInterface {
  id: number;
  isGroup: boolean;
  name: string;
  chat_image: string;
  users: [UserInterface];
  lastMessage: MessageInterface;
}
