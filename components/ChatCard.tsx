import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ChatCardProps {
  chatId: number;
  image: string;
  name: string;
  lastMessage: string | null;
}

const getColorFromName = (name: string) => {
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

export const ChatCard: React.FC<ChatCardProps> = ({
  chatId,
  image,
  name,
  lastMessage,
}) => {
  const router = useRouter();

  const bgColor = getColorFromName(name);

  return (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => {
        router.navigate(`/chat/${chatId}`);
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
          label={name.charAt(0).toUpperCase()}
          color="#fff"
        />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text
          style={styles.lastMessage}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {lastMessage ? lastMessage : ''}
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
