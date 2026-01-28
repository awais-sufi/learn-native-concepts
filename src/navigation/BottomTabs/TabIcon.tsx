import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

type Props = {
  source: ImageSourcePropType;
  color: string;
  size: number;
};

const TabIcon = React.memo(({ source, color, size }: Props) => {
  return (
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: size,
        height: size,
        tintColor: color,
      }}
    />
  );
});

export default TabIcon;
