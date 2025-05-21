import { getPlaylist } from 'lib/spotify'
import { msToTime } from '@lib/helpers'

export default async function handler(req, res) {
  const response = await getPlaylist()
  const { tracks, name, description, images, href, external_urls, followers } =
    await response.json()

  let albumCoverImage = null // Default to null or a placeholder image URL
  if (images && typeof images === 'object' && Object.keys(images).length > 0) {
    albumCoverImage = Object.keys(images).map(function (key) {
      return images[key].url
    })[0]
  } else if (Array.isArray(images) && images.length > 0 && images[0].url) {
    // Fallback for cases where images might be an array as seen in track.track.album.images
    albumCoverImage = images[0].url
  }

  let duration = 0
  let albumLength = '00:00'
  let tracksSelected = []

  if (tracks && tracks.items && Array.isArray(tracks.items)) {
    tracks.items.forEach((track) => {
      if (track && track.track && typeof track.track.duration_ms === 'number') {
        duration += track.track.duration_ms
      }
    })
    albumLength = msToTime(duration)

    tracksSelected = tracks.items.map((track) => {
      const artistNames = track.track && Array.isArray(track.track.artists)
        ? track.track.artists.map((_artist) => _artist.name).join(', ')
        : 'Unknown Artist'
      const albumArtUrl = track.track && track.track.album && Array.isArray(track.track.album.images) && track.track.album.images.length > 0
        ? track.track.album.images[0].url
        : null // Or a placeholder image
      const songUrl = track.track && track.track.external_urls && track.track.external_urls.spotify
        ? track.track.external_urls.spotify
        : '#'
      const albumName = track.track && track.track.album && track.track.album.name
        ? track.track.album.name
        : 'Unknown Album'
      const trackTitle = track.track && track.track.name
        ? track.track.name
        : 'Unknown Title'

      return {
        artist: artistNames,
        albumArt: albumArtUrl,
        songUrl: songUrl,
        album: albumName,
        title: trackTitle,
      }
    })
  }

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')
  // console.log(response.status, response.statusText)
  return res.status(200).json({
    tracksSelected,
    tracks,
    name,
    images,
    external_urls,
    description,
    albumCoverImage,
    followers,
    albumLength,
  })
}
