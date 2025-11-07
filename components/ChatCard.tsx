import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ChatCardProps {
  image: string;
  name: string;
  lastMessage: string | null;
}

export const ChatCard: React.FC<ChatCardProps> = ({
  image,
  name,
  lastMessage,
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => {
        router.navigate('/chat');
      }}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text
          style={styles.lastMessage}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {lastMessage? lastMessage : ''}
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

    // borderWidth: 1,
    // borderColor: 'red',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    // borderWidth: 1,
    // borderColor: 'red',
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
