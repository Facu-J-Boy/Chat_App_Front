import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ChatInput } from '../../../components/ChatInput';
import { CustomKeyboardSafeView } from '../../../components/CustomKeyboardSafeView';
import { MessageBubble } from '../../../components/MessageBubble';
import { useLocalSearchParams } from 'expo-router';
import { getchatMessages } from '../../../actions/messageActions/getChatMessages';
import { useMessageStore } from '../../../store/messagesStore';
import { useSessionStore } from '../../../store/sessionStore';
import { ChatHeader } from '../../../components/ChatHeader';

export default function Chat() {
  const { chatId } = useLocalSearchParams();

  const { chatHeader, messages, setMessages } = useMessageStore();

  const { currentUser } = useSessionStore();

  const userId = currentUser?.id;

  const id = Number(chatId);

  const chatMessages = messages[id] || [];

  useEffect(() => {
    if (!chatId) return;

    const id = Number(chatId); // <- CONVERSIÓN SEGURA

    if (isNaN(id)) return; // por si viene un valor inválido

    getchatMessages({ chatId: id, setMessages });
  }, [chatId]);

  return (
    <CustomKeyboardSafeView>
      {chatHeader && <ChatHeader data={chatHeader} />}
      <View style={styles.inner}>
        <FlatList
          style={{ paddingHorizontal: 5 }}
          data={chatMessages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const isSameUserAsPrevious =
              index < chatMessages.length - 1 &&
              chatMessages[index].sender.id ===
                chatMessages[index + 1].sender.id;

            return (
              <MessageBubble
                text={item.text}
                isOwnMessage={item.sender.id === userId}
                isSameUser={isSameUserAsPrevious}
              />
            );
          }}
          contentContainerStyle={styles.messageList}
          inverted // para que el scroll se mantenga abajo
        />
        <ChatInput chatId={id} />
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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  messageList: {
    paddingBottom: 60, // espacio mínimo para el input
  },
});
