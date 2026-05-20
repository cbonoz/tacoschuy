const TIKTOK_VIDEO_ID = '7597205668713549070'

export default function VideoPlayer() {
  return (
    <div className="tiktok-wrapper">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${TIKTOK_VIDEO_ID}?lang=en`}
        className="tiktok-iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title="TikTok Video"
      />
    </div>
  )
}
