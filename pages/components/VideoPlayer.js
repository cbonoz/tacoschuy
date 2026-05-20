import Script from 'next/script'

const TIKTOK_VIDEO_ID = '7597205668713549070'
const TIKTOK_CITE = 'https://www.tiktok.com/@taquizachuy253/video/7597205668713549070'

export default function VideoPlayer() {
  return (
    <div style={{ maxWidth: '605px', margin: '0 auto' }}>
      <blockquote
        className="tiktok-embed"
        cite={TIKTOK_CITE}
        data-video-id={TIKTOK_VIDEO_ID}
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a target="_blank" title="@taquizachuy253" href="https://www.tiktok.com/@taquizachuy253?refer=embed">@taquizachuy253</a>
        </section>
      </blockquote>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  )
} 