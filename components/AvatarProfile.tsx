import React from 'react';
import { Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import { getColorFromName } from '../utils/getColorFromName';

interface AvatarData {
  chat_title: string;
  image: string | null;
  size: number;
}

export const AvatarProfile: React.FC<AvatarData> = (data) => {
  const { chat_title, image, size } = data;

  const bgColor = getColorFromName(chat_title);
  return (
    <>
      {image ? (
        <Image
          style={{ borderRadius: 100, width: size, height: size }}
          source={{
            uri: image,
          }}
        />
      ) : (
        <Avatar.Text
          style={{ backgroundColor: bgColor }}
          size={size}
          label={chat_title.charAt(0).toUpperCase()}
          color="#fff"
        />
      )}
    </>
  );
};
