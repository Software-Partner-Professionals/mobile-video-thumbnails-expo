import { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { generateThumbnail } from '@/utils/generateThumbnail'

export const SimpleVideoThumbnail = ({ url, name }: { url: string; name: string }) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {
    generateThumbnail(url, setImage)
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
