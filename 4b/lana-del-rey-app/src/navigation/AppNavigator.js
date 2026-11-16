import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();
const icons = { Início: '⌂', Álbuns: '♫', Favoritos: '♡' };

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.roseDark,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: '#FFF', borderTopColor: colors.border, height: 65, paddingBottom: 7 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarIcon: ({ color }) => <Text style={{ fontSize: 25, color }}>{icons[route.name]}</Text>,
      })}>
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Álbuns" component={AlbumsScreen} />
        <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
