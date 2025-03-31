import * as VideoThumbnails from 'expo-video-thumbnails'

export const generateThumbnail = async (
  url: string,
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  try {
    const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
      time: 15000,
    })
    setImage(uri)
  } catch (e) {
    void generateThumbnail(url, setImage)
    console.warn(e)
  }
}
