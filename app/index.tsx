import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Logo } from '../components/Logo';

const icon = require('../assets/icon.png');

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Image style={styles.tinyLogo} source={icon} />
      <Logo size={200} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate('/home')}
      >
        <Text>GO TO HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate('/login')}
      >
        <Text>GO TO LOGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  button: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
});
