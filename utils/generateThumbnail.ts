import * as VideoThumbnails from 'expo-video-thumbnails'
import { Dispatch, SetStateAction } from 'react'

export const generateThumbnail = async (
  url: string,
  setImage: Dispatch<SetStateAction<string | undefined>>,
) => {
  try {
    const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
      quality: 0.2,
      time: 1000,
    })
    setImage(uri)
  } catch (e) {
    setImage(undefined)
  }
}
