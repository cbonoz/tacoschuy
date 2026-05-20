import { useEffect, useRef } from 'react'

const TIKTOK_VIDEO_ID = '7597205668713549070'
const TIKTOK_CITE = 'https://www.tiktok.com/@taquizachuy253/video/7597205668713549070'

export default function VideoPlayer() {
  const containerRef = useRef(null)

  useEffect(() => {
    // TikTok's embed script only processes blockquotes on initial load.
    // If it missed ours, force a re-process after the component mounts.
    const ensureEmbed = () => {
      if (!containerRef.current) return
      const hasIframe = containerRef.current.querySelector('iframe')
      if (hasIframe) return // Already rendered

      // Try to trigger TikTok embed manually
      if (window.tiktokEmbed) {
        window.tiktokEmbed.render()
      } else if (window.tiktok) {
        window.tiktok.render()
      }
    }

    // Give the script a moment to load, then check
    const timer = setTimeout(ensureEmbed, 1000)
    const fallbackTimer = setTimeout(ensureEmbed, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ maxWidth: '605px', margin: '0 auto' }}>
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
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  )
}
