import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MessageBubbleProps {
  text: string;
  isOwnMessage: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  isOwnMessage,
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
    borderRadius: 10,
  },
  text: {
    color: '#fff',
  },
  ownBubble: {
    borderTopRightRadius: 0,
    backgroundColor: '#47239f',
  },
  otherBubble: {
    borderTopLeftRadius: 0,
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
