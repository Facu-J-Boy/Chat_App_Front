import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const CustomKeyboardSafeView: React.FC<Props> = ({
  children,
}) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardOpen(true)
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardOpen(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={
        keyboardOpen ? (Platform.OS === 'ios' ? 90 : 60) : 0
      }
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
