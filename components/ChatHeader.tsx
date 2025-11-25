import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ChatInterface } from '../interfaces';
import { AvatarProfile } from './AvatarProfile';

interface ChatHeaderProps {
  data: ChatInterface;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ data }) => {
  const { name, isGroup, chat_image, users } = data;

  const chat_title = isGroup ? name : users[0].name;

  const image = isGroup ? chat_image : users[0].profile_image;

  const users_group = users.map((u) => u.name).join(', ');

  return (
    <View style={styles.header}>
      <View style={{ marginRight: 20 }}>
        <AvatarProfile
          chat_title={chat_title}
          image={image}
          size={40}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.chatTitle}>{chat_title}</Text>
        {isGroup && <Text>{`${users_group}, you`}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
    // height: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // elevation: 10, // Android
    // borderWidth: 1,
    // borderColor: 'red',
  },
  textContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    // height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  chatTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
