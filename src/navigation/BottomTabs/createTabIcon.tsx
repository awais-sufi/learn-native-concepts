import React from 'react';
import { ImageSourcePropType } from 'react-native';
import TabIcon from './TabIcon';

export const createTabIcon =
  (source: ImageSourcePropType) =>
  ({
    color,
    size,
    focused,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) =>
    <TabIcon source={source} color={color} size={size} focused={focused} />;
