import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ddd',
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Expo Image + Flashlist',
          tabBarIcon: () => <View style={styles.icon} />,
        }}
      />
      <Tabs.Screen
        name='expo-image'
        options={{
          title: 'Expo Image',
          tabBarIcon: () => <View style={styles.icon} />,
        }}
      />
      <Tabs.Screen
        name='rn-image'
        options={{
          title: 'RN Image',
          tabBarIcon: () => <View style={styles.icon} />,
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    backgroundColor: 'black',
    borderRadius: 12,
  },
})
