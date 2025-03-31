import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import { longVideosList } from '@/constants/data'
import { ExpoImageVideoThumbnail } from '@/components/ExpoImageVideoThumbnail'
import { useState } from 'react'

const ExpoImageScreen = () => {
  const [count, setCount] = useState(0)

  return (
    <ScrollView key={count} style={styles.scrollView}>
      <Text style={styles.title}>Expo Image Based (tap to rerender)</Text>
      <Pressable onPress={() => setCount((prev) => prev + 1)} style={styles.container}>
        {longVideosList.map(({ url, name }, idx) => (
          <ExpoImageVideoThumbnail key={idx} url={url} name={name} />
        ))}
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  title: {
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
  },
})

export default ExpoImageScreen
