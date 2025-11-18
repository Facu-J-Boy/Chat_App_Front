import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';

type ChatInputData = {
  text: string;
};

export const ChatInput = () => {
  const { control, handleSubmit } = useForm<ChatInputData>({
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = (data: ChatInputData) => {
    console.log('chatInputData: ', data);
  };
  return (
    <View style={styles.conteiner}>
      <Controller
        name={'text'}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={handleSubmit(onSubmit)}
            >
              <Ionicons
                name="send"
                size={24}
                color={value ? '#47239f' : '#ccc'}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: 60,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
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
  iconContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    paddingLeft: 5,
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    right: 20,
    top: 15,
  },
});
