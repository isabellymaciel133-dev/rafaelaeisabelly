import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { albums } from '../data/albums';
import { useFavorites } from '../context/FavoritesContext';
import AlbumCard from '../components/AlbumCard';
import RoseButton from '../components/RoseButton';
import colors from '../theme/colors';

export default function FavoritesScreen({ navigation }) {
  const { favoriteIds } = useFavorites();
  const favorites = albums.filter((album) => favoriteIds.includes(album.id));
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Meus favoritos ♡</Text>
      <Text style={styles.intro}>{favorites.length} álbum(ns) salvo(s) nesta sessão.</Text>
      {favorites.length === 0 ? (
        <>
          <Text style={styles.empty}>Nenhum álbum favorito ainda. Explore a discografia e escolha seus preferidos! 🌷</Text>
          <RoseButton title="Escolher álbuns →" onPress={() => navigation.navigate('Álbuns')} />
        </>
      ) : favorites.map((album) => <AlbumCard key={album.id} album={album} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingTop: 42, paddingBottom: 36 },
  heading: { fontSize: 32, color: colors.roseDark, fontWeight: '700' },
  intro: { color: colors.muted, marginTop: 8, marginBottom: 22 },
  empty: { backgroundColor: colors.surface, color: colors.text, padding: 25, borderRadius: 20, lineHeight: 24, textAlign: 'center' },
});
