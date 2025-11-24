import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { sendMessage } from '../actions/messageActions/sendMessage';

type ChatInputData = {
  text: string;
};

export const ChatInput = ({ chatId }: { chatId: number }) => {
  const [height, setHeight] = useState(60);

  const { control, handleSubmit, reset } = useForm<ChatInputData>({
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = (data: ChatInputData) => {
    console.log('chatInputData: ', data);
    const { text } = data;
    sendMessage({ chatId, text });
    reset(); // limpiar el input después de enviar
    setHeight(40); // volver al tamaño inicial
  };
  return (
    <View style={styles.container}>
      <Controller
        name={'text'}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputWrapper}>
            <TextInput
              multiline
              style={[styles.input, { height }]}
              onContentSizeChange={(e) => {
                const newHeight = e.nativeEvent.contentSize.height;
                setHeight(Math.min(Math.max(40, newHeight), 120));
                // min 40, max 120
              }}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {value && (
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Ionicons name="send" size={20} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  inputWrapper: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    // flex: 1,
    width: '87%',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    // paddingRight: 40, // margen para que no choque con el botón
  },

  sendButton: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#47239f',
    // position: 'absolute',
    // borderWidth: 1,
    // borderColor: 'red',
    // right: 10,
    // bottom: 10,
  },
});
