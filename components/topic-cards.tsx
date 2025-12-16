"use client"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topics = [
  {
    id: "network-theory",
    title: "Tarmoq nazaryasi",
    description: "Fundamentals and theory behind computer networks",
    image: "/network-diagram-theory.jpg",
    slug: "network-theory",
  },
  {
    id: "network-tech",
    title: "Tarmoq texnologiyalari",
    description: "Modern networking technologies and protocols",
    image: "/technology-network-infrastructure.jpg",
    slug: "network-technologies",
  },
  {
    id: "network-devices",
    title: "Tarmoq qurilmalari",
    description: "Network devices and hardware components",
    image: "/router-switch-networking-equipment.jpg",
    slug: "network-devices",
  },
  {
    id: "network-security",
    title: "Tarmoq xavfsizligi asoslari",
    description: "Network security principles and best practices",
    image: "/cybersecurity-network-protection.png",
    slug: "network-security",
  },
  {
    id: "network-standards",
    title: "Tarmoq standartlari",
    description: "IEEE and international networking standards",
    image: "/standards-networking-protocols.jpg",
    slug: "network-standards",
  },
]

export default function TopicCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-2">Tarmoq Talimi</h2>
        <p className="text-lg text-muted-foreground">
          Kompyuter tarmoqlari haqida to'liq ma'lumot olish uchun maqolalarni o'qing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/topics/${topic.slug}`}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full overflow-hidden hover:border-primary">
              <div className="relative w-full h-48 bg-muted">
                <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{topic.title}</CardTitle>
                <CardDescription className="line-clamp-2">{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary font-medium hover:underline">O'qish →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
