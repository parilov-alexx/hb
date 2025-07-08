import video from './video/video.mp4'
import './video.css'

function VideoLaunch () {
return(
  <div className='videoBox'>
  <video width="100%"  controls autoplay="on" loop src={video} type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>
)
}

export default VideoLaunch;