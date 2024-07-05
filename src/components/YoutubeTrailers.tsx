'use client'
import ReactPlayer from 'react-player'

interface YoutubeTrailerProps {
  url: string
}

const YoutubeTrailer = ({
  url,
}: YoutubeTrailerProps) => {
  return <ReactPlayer url={url} />
}

export default YoutubeTrailer
