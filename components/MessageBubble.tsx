import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MessageBubbleProps {
  text: string;
  isOwnMessage: boolean;
  isSameUser: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  isOwnMessage,
  isSameUser,
}) => {
  return (
    <View
      style={[
        styles.bubbleContainer,
        isOwnMessage ? styles.rightAlign : styles.leftAlign,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isOwnMessage ? styles.ownBubble : styles.otherBubble,
          isOwnMessage && !isSameUser && { borderTopRightRadius: 0 },
          !isOwnMessage && !isSameUser && { borderTopLeftRadius: 0 },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: '#fff',
  },
  ownBubble: {
    backgroundColor: '#47239f',
  },
  otherBubble: {
    backgroundColor: '#444',
  },
  rightAlign: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  leftAlign: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
});
