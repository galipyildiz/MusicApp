import React from 'react';
import {Image, Text, View} from 'react-native';
import stlyes from './SongCard.style';
import SongInterface from '../../resources/SongInterface';

const SongCard = ({
  imageUrl,
  album,
  artist,
  id,
  isSoldOut,
  title,
  year,
}: SongInterface) => {
  return (
    <View key={id} style={stlyes.container}>
      <Image style={stlyes.image} source={{uri: imageUrl}} />
      <View style={stlyes.innerContainer}>
        <Text style={stlyes.title}>{title}</Text>
        <View style={stlyes.content}>
          <View style={stlyes.infoContainer}>
            <Text>{artist}</Text>
            <Text style={stlyes.year}>{year}</Text>
          </View>
          {isSoldOut && (
            <View style={stlyes.soldoutContainer}>
              <Text style={stlyes.soldoutText}>Tükendi</Text>
            </View>
          )}
        </View>
        <View>
          <Text>{album}</Text>
        </View>
      </View>
    </View>
  );
};
export default SongCard;
