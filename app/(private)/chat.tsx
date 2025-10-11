import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ChatInput } from '../../components/ChatInput';
import { CustomKeyboardSafeView } from '../../components/CustomKeyboardSafeView';
import { MessageBubble } from '../../components/MessageBubble';
import { messages } from '../../info/messages';

export default function Chat() {
  return (
    <CustomKeyboardSafeView>
      <View style={styles.inner}>
        <FlatList
          style={{ paddingHorizontal: 5 }}
          data={messages}
          keyExtractor={(item) => item.index}
          renderItem={({ item }) => (
            <MessageBubble
              text={item.message}
              isOwnMessage={item.isOwnMessage}
            />
          )}
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
