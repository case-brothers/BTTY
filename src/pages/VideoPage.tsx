type VideoPageProps = {
  booked: boolean
}

const calendarUrl = 'https://link.btty.ai/widget/booking/ANIqkqlsUOfycji0w2QZ'
const paymentUrl = 'https://link.fastpaydirect.com/payment-link/6a620ab5a655fa0b802a5c31'

export default function VideoPage({ booked }: VideoPageProps) {
  const videoFile = booked ? '/btty-postbooking.mp4' : '/btty-nurture.mp4'
  const captionsFile = booked ? '/btty-postbooking-captions.srt' : '/btty-nurture-captions.srt'

  return (
    <main className="min-h-screen bg-surface-100 px-6 py-12 text-text-900 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <a href="/" className="mb-10 text-sm font-black tracking-[0.28em] text-brand-green">
          BTTY<span className="text-text-900">.AI</span>
        </a>
        <video
          className="w-full rounded-2xl border border-surface-300 bg-black shadow-xl"
          controls
          playsInline
          preload="metadata"
          poster="/btty-video-poster.jpg"
        >
          <source src={videoFile} type="video/mp4" />
          <track kind="captions" src={captionsFile} srcLang="en" label="English captions" default />
          Your browser does not support the video tag.
        </video>

        <div className="mt-8 flex w-full flex-col items-center text-center">
          {!booked ? (
            <a
              href={calendarUrl}
              className="rounded-full bg-brand-green px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Book twenty minutes
            </a>
          ) : null}
          <p className="mt-6 text-sm text-text-500">
            If you already know you want it, you can start right here without talking to me.
          </p>
          <a
            href={paymentUrl}
            className="mt-2 text-sm font-bold text-brand-green underline underline-offset-4 hover:opacity-80"
          >
            Start now
          </a>
        </div>
      </div>
    </main>
  )
}
