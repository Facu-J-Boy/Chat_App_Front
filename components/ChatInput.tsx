import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
export const ChatInput = () => {
  return (
    <View style={styles.conteiner}>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
