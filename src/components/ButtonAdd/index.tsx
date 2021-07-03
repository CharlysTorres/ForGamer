import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { themes } from '../../global/styles/themes';

type Props = RectButtonProps;

export function ButtonAdd({...rest}: Props) {
  return (
    <RectButton
     style={styles.container}
     {...rest}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={themes.colors.heading}
        size={24}
      />
    </RectButton>
  );
}