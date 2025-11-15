import { axiosInstance } from '../../api/axiosInstance';
import { getAccessToken } from '../../utils/tokenStorage';

interface GetChatsData {
  isGroup: boolean;
  setChatList?: (chatList: any) => void | undefined;
  setGroupList?: (groupList: any) => void | undefined;
}

export const GetChatList = async (data: GetChatsData) => {
  const { isGroup, setChatList, setGroupList } = data;

  const fields = `
      id
      isGroup
      ${isGroup ? 'name chat_image' : ''}
      users {
        id
        name
        profile_image
      }
      lastMessage {
        id
        sender {
          id
          name
        }
        text
        createdAt
      }`;
  console.log('getChatList ejecutado');
  try {
    const token = await getAccessToken();
    const res = await axiosInstance.post(
      '/graphql',
      {
        query: `
          query GetChats($isGroup: Boolean) {
            getChats(isGroup: $isGroup) {
              ${fields}
            }
          }
        `,
        variables: { isGroup },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          // Authorization opcional
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log({ res });
    const { getChats } = res.data.data;
    console.log('RESPONSE:', getChats);
    if (isGroup && setGroupList) {
      setGroupList(getChats);
    }
    if (!isGroup && setChatList) {
      setChatList(getChats);
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
