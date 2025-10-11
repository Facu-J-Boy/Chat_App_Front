import React from 'react';
import { Stack, useSegments } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNav } from '../../components/BottomNav';

export default function StackLayout() {
  const segments = useSegments() as string[];

  // ejemplo: ['(private)', 'chat', '123']
  // Verificamos si existe un segundo segmento
  const currentSegment: string | undefined =
    segments.length > 1 ? segments[1] : undefined;

  // Lista de rutas donde no queremos mostrar BottomNav
  const hiddenRoutes = ['chat'];
  const hideBottomNav = currentSegment
    ? hiddenRoutes.includes(currentSegment)
    : false;

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
      {!hideBottomNav && <BottomNav />}
    </SafeAreaProvider>
  );
}
