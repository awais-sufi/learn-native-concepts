import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors/colors';

type Props = {
  source: ImageSourcePropType;
  color: string;
  size: number;
  focused: boolean;
};

const TabIcon = React.memo(({ source, color, size, focused }: Props) => {
  return (
    <Image
      source={source}
      resizeMode="contain"
      style={[
        styles.icon,
        { width: size, height: size },
        focused ? styles.active : { tintColor: color },
      ]}
    />
  );
});

export default TabIcon;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
  active: {
    tintColor: COLORS.primary,
  },
});
