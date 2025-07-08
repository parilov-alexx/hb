import video from './video/video.mp4'



function VideoLaunch () {
return(
  <div>
  <video width="800"  controls autoplay loop src={video} type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>
)
}

export default VideoLaunch;