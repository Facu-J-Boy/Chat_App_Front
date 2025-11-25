import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { ChatInterface } from '../interfaces';
import { useMessageStore } from '../store/messagesStore';
import { AvatarProfile } from './AvatarProfile';

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

  return (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => {
        setChatHeader(data);
        router.navigate(`/chat/${id}`);
      }}
    >
      <View style={{ marginRight: 20 }}>
        <AvatarProfile
          chat_title={chat_title}
          image={image}
          size={60}
        />
      </View>

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
