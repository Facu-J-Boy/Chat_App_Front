import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { ChatIcon, GroupsIcon, UserIcon } from './Icons';

export const BottomNav = () => {
  const pathname = usePathname();

  const router = useRouter();

  console.log({ pathname });
  return (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity
        style={styles.redirectionButton}
        onPress={() => {
          router.navigate('/chatlist');
        }}
      >
        <ChatIcon
          selected={pathname === '/chatlist'}
          size={25}
          color="#fff"
        />
        <Text style={{ color: '#fff' }}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.redirectionButton}
        onPress={() => {
          router.navigate('/groups');
        }}
      >
        <GroupsIcon
          selected={pathname === '/groups'}
          size={25}
          color="#fff"
        />
        <Text style={{ color: '#fff' }}>Groups</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.redirectionButton}
        onPress={() => {
          router.navigate('/user');
        }}
      >
        <UserIcon
          selected={pathname === '/user'}
          size={25}
          color="#fff"
        />
        <Text style={{ color: '#fff' }}>Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: {
    backgroundColor: '#47239f',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redirectionButton: {
    alignItems: 'center',
  },
});
