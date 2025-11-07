import React from 'react';
import { Stack } from 'expo-router';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useSessionStore } from '../store/sessionStore';
import { useChatsStore } from '../store/chatsStore';

// const isLoggedIn = true;

export default function StackLayout() {
  const insets = useSafeAreaInsets();

  // Ver estado actual
  console.log(useSessionStore.getState());

  // Escuchar cambios
  useSessionStore.subscribe((state) => console.log('Estado:', state));
  useChatsStore.subscribe((state) => console.log('Estado de chats:', state));

  const { isLoggedIn } = useSessionStore();

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(public)" />
          </Stack.Protected>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(private)" />
          </Stack.Protected>
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}
