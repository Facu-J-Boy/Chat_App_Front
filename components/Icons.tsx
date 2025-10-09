import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconProps {
  selected: boolean;
  size?: number;
  color?: string;
}

export const ChatIcon: React.FC<IconProps> = ({
  selected,
  size = 20,
  color = '#666',
  ...rest
}) => (
  <Ionicons
    name={selected ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'}
    size={size}
    color={color}
    {...rest}
  />
);

export const GroupsIcon: React.FC<IconProps> = ({
  selected,
  size = 20,
  color = '#666',
  ...rest
}) => (
  <Ionicons
    name={selected ? 'people' : 'people-outline'}
    size={size}
    color={color}
    {...rest}
  />
);

export const UserIcon: React.FC<IconProps> = ({
  selected,
  size = 20,
  color = '#666',
  ...rest
}) => (
  <Ionicons
    name={selected ? 'person' : 'person-outline'}
    size={size}
    color={color}
    {...rest}
  />
);
