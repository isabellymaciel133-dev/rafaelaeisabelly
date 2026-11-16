import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AlbumCard from '../components/AlbumCard';
import { albums } from '../data/albums';
import colors from '../theme/colors';

export default function AlbumsScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Discografia ♫</Text>
      <Text style={styles.intro}>Escolha seus álbuns favoritos tocando no coração.</Text>
      {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingTop: 42, paddingBottom: 36 },
  heading: { fontSize: 32, color: colors.roseDark, fontWeight: '700' },
  intro: { color: colors.muted, marginTop: 8, marginBottom: 22 },
});
