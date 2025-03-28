import { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import * as VideoThumbnails from 'expo-video-thumbnails'

export const SimpleVideoThumbnail = ({ url, name }: { url: string; name: string }) => {
  const [image, setImage] = useState<string>()

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
        time: 15000,
      })
      setImage(uri)
    } catch (e) {
      console.warn(e)
    }
  }

  useEffect(() => {
    void generateThumbnail()
  }, [url])

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.image} />
      )}
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 32,
    height: 235,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#e8e8e8',
  },
  text: {
    marginHorizontal: 12,
    marginVertical: 8,
    fontWeight: '600',
    fontSize: 14,
  },
})
