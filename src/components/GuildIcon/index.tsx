import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  //const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  const uri = 'http://iconbug.com/data/b8/257/1bd6e282a81fdb221c1f4898e088d465.png';

  return (
    <View style={styles.container}>
      {  
        iconId ?    
        <Image 
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"    
        />
        :
        <DiscordSvg 
          width={40} 
          height={40}
        />
      }
    </View>
  )

}