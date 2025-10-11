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
  return (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity
        style={[
          styles.redirectionButton,
          pathname === '/' && styles.active,
        ]}
        onPress={() => {
          router.navigate('/');
        }}
      >
        <ChatIcon
          selected={pathname === '/'}
          size={25}
          color={pathname === '/' ? '#47239f' : '#333'}
        />
        <Text
          style={{
            color: pathname === '/' ? '#47239f' : '#333',
          }}
        >
          Chats
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.redirectionButton,
          pathname === '/groups' && styles.active,
        ]}
        onPress={() => {
          router.navigate('/groups');
        }}
      >
        <GroupsIcon
          selected={pathname === '/groups'}
          size={25}
          color={pathname === '/groups' ? '#47239f' : '#333'}
        />
        <Text
          style={{
            color: pathname === '/groups' ? '#47239f' : '#333',
          }}
        >
          Groups
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.redirectionButton,
          pathname === '/user' && styles.active,
        ]}
        onPress={() => {
          router.navigate('/user');
        }}
      >
        <UserIcon
          selected={pathname === '/user'}
          size={25}
          color={pathname === '/user' ? '#47239f' : '#333'}
        />
        <Text
          style={{ color: pathname === '/user' ? '#47239f' : '#333' }}
        >
          Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redirectionButton: {
    alignItems: 'center',
    paddingTop: 10,
  },
  active: {
    borderTopWidth: 2,
    borderTopColor: '#47239f',
  },
});
