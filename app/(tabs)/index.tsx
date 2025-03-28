import { Dimensions, Pressable, StyleSheet, Text } from 'react-native'

import { videosFHD } from '@/constants/data'
import { ExpoImageVideoThumbnail } from '@/components/ExpoImageVideoThumbnail'
import { useState } from 'react'
import { FlashList } from '@shopify/flash-list'

const ExpoImageScreen = () => {
  const [count, setCount] = useState(0)

  return (
    <FlashList
      key={count}
      data={videosFHD}
      drawDistance={Dimensions.get('window').height / 2}
      renderItem={({ item: { url, name } }) => (
        <Pressable onPress={() => setCount((prev) => prev + 1)} style={styles.container}>
          <ExpoImageVideoThumbnail key={url} url={url} name={name} />
        </Pressable>
      )}
      ListHeaderComponent={
        <Text style={styles.title}>Expo Image + FlashList (tap to rerender)</Text>
      }
      estimatedItemSize={250}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
})

export default ExpoImageScreen
