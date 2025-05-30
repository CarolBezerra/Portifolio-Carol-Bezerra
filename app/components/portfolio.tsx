import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Campanha E-commerce",
      category: "Social Media",
      description: "Aumento de 300% no engajamento e 150% nas vendas",
      image: "/placeholder.svg?height=300&width=400",
      metrics: { likes: "12.5K", comments: "2.1K", shares: "890" },
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Copy para Landing Page",
      category: "Copywriting",
      description: "Taxa de conversão aumentou de 2% para 8.5%",
      image: "/placeholder.svg?height=300&width=400",
      metrics: { likes: "8.2K", comments: "1.5K", shares: "650" },
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Estratégia de Conteúdo",
      category: "Marketing Digital",
      description: "Crescimento orgânico de 500% em 6 meses",
      image: "/placeholder.svg?height=300&width=400",
      metrics: { likes: "15.8K", comments: "3.2K", shares: "1.2K" },
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "Rebranding Digital",
      category: "Estratégia de Marca",
      description: "Nova identidade visual e posicionamento",
      image: "/placeholder.svg?height=300&width=400",
      metrics: { likes: "9.7K", comments: "1.8K", shares: "720" },
      color: "from-green-500 to-blue-500",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Alguns dos projetos que transformaram negócios</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                />
                <Button
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{project.metrics.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{project.metrics.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    <span>{project.metrics.shares}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
