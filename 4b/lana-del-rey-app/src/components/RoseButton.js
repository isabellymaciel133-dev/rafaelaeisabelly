import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function RoseButton({ title, onPress, outline = false }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.button, outline && styles.outline]}>
      <Text style={[styles.label, outline && styles.outlineLabel]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: colors.rose, paddingVertical: 13, paddingHorizontal: 18, borderRadius: 24, alignItems: 'center', marginTop: 12 },
  outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.rose },
  label: { color: '#fff', fontWeight: '700', fontSize: 14 },
  outlineLabel: { color: colors.roseDark },
});
