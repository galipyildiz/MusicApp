import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import music_data from './resources/music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import SongInterface from './resources/SongInterface';

const RenderSong = ({item}: any) => (
  <SongCard
    album={item.album}
    id={item.id}
    title={item.title}
    artist={item.artist}
    year={item.year}
    imageUrl={item.imageUrl}
    isSoldOut={item.isSoldOut}
  />
);

const RenderSeperator = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
);

function App() {
  const [musics, setMusics] = useState<SongInterface[]>([]);

  useEffect(() => {
    setMusics(music_data);
  }, []);

  const handleSearch = (text: string) => {
    const filteredMusics = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setMusics(filteredMusics);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <SearchBar handleSearch={handleSearch} />
      <FlatList
        data={musics}
        renderItem={RenderSong}
        ItemSeparatorComponent={RenderSeperator}
      />
    </SafeAreaView>
  );
}

export default App;
