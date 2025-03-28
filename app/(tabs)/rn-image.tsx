import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import { SimpleVideoThumbnail } from '@/components/SimpleVideoThumbnail'
import { videosFHD } from '@/constants/data'
import { useState } from 'react'

const HomeScreen = () => {
  const [count, setCount] = useState(0)

  return (
    <ScrollView key={count} style={styles.scrollView}>
      <Text style={styles.text}>RN Image Based (tap to rerender)</Text>
      <Pressable onPress={() => setCount((prev) => prev + 1)} style={styles.container}>
        {videosFHD.map(({ url, name }) => (
          <SimpleVideoThumbnail key={url} url={url} name={name} />
        ))}
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  text: {
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

export default HomeScreen
