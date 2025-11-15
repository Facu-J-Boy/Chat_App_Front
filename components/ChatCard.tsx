import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ChatInterface } from '../interfaces';
import { useMessageStore } from '../store/messagesStore';

export const getColorFromName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }
  return color;
};

interface ChatCardProps {
  data: ChatInterface;
}

export const ChatCard: React.FC<ChatCardProps> = ({ data }) => {
  const { id, name, isGroup, chat_image, users, lastMessage } = data;

  const router = useRouter();

  const { setChatHeader } = useMessageStore();

  const chat_title = isGroup ? name : users[0].name;

  const image = isGroup ? chat_image : users[0].profile_image;

  const last_message = lastMessage?.text || null;

  const bgColor = getColorFromName(chat_title);

  return (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => {
        setChatHeader(data);
        router.navigate(`/chat/${id}`);
      }}
    >
      {image ? (
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      ) : (
        <Avatar.Text
          style={{ marginRight: 20, backgroundColor: bgColor }}
          size={60}
          label={chat_title.charAt(0).toUpperCase()}
          color="#fff"
        />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{chat_title}</Text>
        <Text
          style={styles.lastMessage}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {last_message ? last_message : ''}
        </Text>
      </View>
      <View>
        <Text>12:05</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
});
