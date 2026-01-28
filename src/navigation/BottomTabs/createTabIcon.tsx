import { ImageSourcePropType } from 'react-native';
import TabIcon from './TabIcon';

export const createTabIcon =
  (source: ImageSourcePropType) =>
  ({ color, size }: { color: string; size: number }) =>
    <TabIcon source={source} color={color} size={size} />;
