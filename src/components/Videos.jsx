import { Stack, Box } from '@mui/material'
import { VideoCard,ChannelCard } from './'

const Videos = ({ videos }) => {
  // console.log(videos);

  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="start">
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
