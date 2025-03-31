import { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { generateThumbnail } from '@/utils/generateThumbnail'

const blurhash = 'L6D0ih}m00oe00pI%#xZ4U4m9Z%M'

export const ExpoImageVideoThumbnail = ({ url, name }: { url: string; name: string }) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {
    generateThumbnail(url, setImage)
  }, [url])

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        transition={500}
        placeholder={Platform.OS === 'ios' ? { blurhash } : null}
        placeholderContentFit='cover'
        style={styles.image}
      />
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
