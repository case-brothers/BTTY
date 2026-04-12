import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const starterPrompts = [
  'What do you actually build?',
  'Who is this for?',
  'How fast can we launch?',
  'What should I do next?',
]

const initialMessage =
  "Hi, I'm Betty. Get it? Better Today Than Yesterday. How can I help you figure out the right next step for your business?"

export default function BettyAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', content: initialMessage }])
  const [draft, setDraft] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [chatError, setChatError] = useState('')

  useEffect(() => {
    function handleOpen() {
      setIsOpen(true)
    }

    window.addEventListener('open-betty-assistant', handleOpen)
    return () => window.removeEventListener('open-betty-assistant', handleOpen)
  }, [])

  async function sendMessage(message: string) {
    const trimmed = message.trim()
    if (!trimmed || isThinking) return

    const nextMessages = [...messages, { role: 'user' as const, content: trimmed }]
    setMessages(nextMessages)
    setDraft('')
    setChatError('')
    setIsThinking(true)

    try {
      const response = await fetch('/api/betty-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: messages,
        }),
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(typeof payload?.error === 'string' ? payload.error : 'Betty ran into a problem.')
      }

      const reply =
        typeof payload?.reply === 'string' && payload.reply.trim()
          ? payload.reply.trim()
          : 'Betty is here, but did not return a usable reply. Please try again.'

      setMessages([...nextMessages, { role: 'assistant', content: reply }])
    } catch (error) {
      setChatError(error instanceof Error ? error.message : 'Betty hit a temporary issue.')
    } finally {
      setIsThinking(false)
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await sendMessage(draft)
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-[#dfe8db] bg-white px-4 py-3 shadow-[0_18px_50px_rgba(29,107,67,0.16)] transition-transform hover:-translate-y-0.5"
      >
        <img
          src="/betty-ai-assistant.png"
          alt="Betty, the BTTY AI assistant"
          className="h-11 w-11 rounded-full object-cover ring-1 ring-[#dfe8db]"
        />
        <div className="text-left">
          <p className="text-sm font-bold text-text-900">Ask Betty</p>
          <p className="text-xs text-text-500">Your BTTY AI assistant</p>
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[min(420px,calc(100vw-24px))] rounded-[1.8rem] border border-[#dfe8db] bg-[#fbfdfb] p-4 shadow-[0_30px_90px_rgba(29,107,67,0.18)]">
      <div className="rounded-[1.5rem] border border-[#e4ece1] bg-white p-4">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/betty-ai-assistant.png"
              alt="Betty, the BTTY AI assistant"
              className="h-12 w-12 rounded-2xl object-cover ring-1 ring-[#dfe8db]"
            />
            <div>
              <p className="text-sm font-bold text-text-900">Betty AI</p>
              <p className="text-xs text-text-500">BTTY sales and ops assistant</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-[#dfe8db] px-3 py-1 text-xs font-semibold text-text-500 transition-colors hover:border-brand-green hover:text-brand-green"
          >
            Close
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {starterPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              disabled={isThinking}
              className="rounded-full border border-[#dfe8db] bg-white px-3 py-2 text-xs font-semibold text-text-700 transition-colors hover:border-brand-green hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-70"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="max-h-[320px] space-y-3 overflow-y-auto pr-1">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={
                message.role === 'user'
                  ? 'ml-auto max-w-[88%] rounded-[1.25rem] rounded-br-md bg-brand-dark px-4 py-3 text-sm leading-relaxed text-white'
                  : 'max-w-[92%] rounded-[1.25rem] rounded-bl-md bg-[#f3f7f1] px-4 py-3 text-sm leading-relaxed text-text-700'
              }
            >
              {message.content}
            </div>
          ))}

          {isThinking ? (
            <div className="max-w-[92%] rounded-[1.25rem] rounded-bl-md bg-[#f3f7f1] px-4 py-3 text-sm leading-relaxed text-text-500">
              Betty is thinking...
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask Betty about BTTY, systems, or next steps"
              className="min-w-0 flex-1 rounded-full border border-[#dfe8db] bg-white px-4 py-3 text-sm text-text-900 focus:border-brand-green focus:outline-none"
            />
            <button
              type="submit"
              disabled={isThinking || !draft.trim()}
              className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light disabled:cursor-not-allowed disabled:opacity-70"
            >
              Send
            </button>
          </div>
        </form>

        {chatError ? <p className="mt-3 text-sm leading-relaxed text-[#9b4b32]">{chatError}</p> : null}
      </div>
    </div>
  )
}
