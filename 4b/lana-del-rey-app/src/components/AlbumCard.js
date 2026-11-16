import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoseButton from './RoseButton';
import { useFavorites } from '../context/FavoritesContext';
import colors from '../theme/colors';

export default function AlbumCard({ album }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(album.id);
  return (
    <View style={styles.card}>
      <Text style={styles.ornament}>✿  ♡  ✿</Text>
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.year}>{album.year} · {album.mood}</Text>
      <Text style={styles.songs}>Destaques: {album.songs.join(' • ')}</Text>
      <RoseButton
        title={isFavorite ? '♥ Remover dos favoritos' : '♡ Adicionar aos favoritos'}
        onPress={() => toggleFavorite(album.id)}
        outline={isFavorite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 20, padding: 20, marginBottom: 16 },
  ornament: { color: colors.rose, fontSize: 19, marginBottom: 8 },
  title: { color: colors.roseDark, fontSize: 21, fontWeight: '700' },
  year: { color: colors.muted, marginTop: 6, fontSize: 13 },
  songs: { color: colors.text, lineHeight: 21, marginTop: 12 },
});
