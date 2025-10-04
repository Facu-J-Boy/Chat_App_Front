import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

const icon = require('../assets/icon.png');

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Image style={styles.tinyLogo} source={icon} />
      <Button
        title="Go to Home"
        onPress={() => router.navigate('/home')}
      />
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
    width: 100,
    height: 100,
  },
});
