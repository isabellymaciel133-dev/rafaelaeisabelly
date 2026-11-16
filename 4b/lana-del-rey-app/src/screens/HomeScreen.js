import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import RoseButton from '../components/RoseButton';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>✿ A LITTLE PIECE OF HEAVEN ✿</Text>
      <Text style={styles.title}>Lana Del Rey</Text>
      <Text style={styles.subtitle}>VINTAGE PARADISE</Text>
      <View style={styles.hero}>
        <Text style={styles.flower}>🌹</Text>
        <Text style={styles.heroTitle}>Bem-vinda ao universo Lana</Text>
        <Text style={styles.body}>Uma viagem por álbuns, melodias, flores e nostalgia. Descubra as eras da artista e monte sua coleção favorita.</Text>
        <RoseButton title="Explorar álbuns →" onPress={() => navigation.navigate('Álbuns')} />
        <RoseButton title="Ver meus favoritos ♡" outline onPress={() => navigation.navigate('Favoritos')} />
      </View>
      <Text style={styles.footer}>♡ Born to be wild, dressed in pink ♡</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: { padding: 24, paddingTop: 50 },
  eyebrow: { color: colors.rose, textAlign: 'center', letterSpacing: 2, fontSize: 11 },
  title: { color: colors.roseDark, fontSize: 43, fontWeight: '700', textAlign: 'center', marginTop: 16 },
  subtitle: { color: colors.muted, letterSpacing: 4, textAlign: 'center', marginTop: 6 },
  hero: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 28, padding: 25, marginTop: 30 },
  flower: { fontSize: 66, textAlign: 'center', marginBottom: 18 },
  heroTitle: { color: colors.roseDark, fontSize: 24, textAlign: 'center', fontWeight: '700' },
  body: { color: colors.text, textAlign: 'center', lineHeight: 24, marginTop: 14, marginBottom: 12 },
  footer: { color: colors.muted, textAlign: 'center', marginTop: 35 },
});
