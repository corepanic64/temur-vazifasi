import Navbar from "@/components/navbar"
import TopicCards from "@/components/topic-cards"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TopicCards />
      <ChatWidget />
    </main>
  )
}
