import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ChatInput } from '../../components/ChatInput';
import { CustomKeyboardSafeView } from '../../components/CustomKeyboardSafeView';
import { MessageBubble } from '../../components/MessageBubble';
import { messages } from '../../info/messages';

export default function Chat() {
  const userId = 1;

  return (
    <CustomKeyboardSafeView>
      <View style={styles.inner}>
        <FlatList
          style={{ paddingHorizontal: 5 }}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const isSameUserAsPrevious =
              index > 0 &&
              messages[index].userId === messages[index - 1].userId;

            return (
              <MessageBubble
                text={item.message}
                isOwnMessage={item.userId === userId}
                isSameUser={isSameUserAsPrevious}
              />
            );
          }}
          contentContainerStyle={styles.messageList}
        />
        <ChatInput />
      </View>
    </CustomKeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageList: {
    paddingBottom: 10, // espacio mínimo para el input
  },
});
