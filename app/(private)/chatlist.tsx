import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ChatList() {
  return (
    <View style={styles.container}>
      <Text>Lista de chats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
