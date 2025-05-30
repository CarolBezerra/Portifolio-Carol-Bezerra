import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Megaphone, TrendingUp, Target, Users, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: PenTool,
      title: "Copywriting",
      description: "Textos persuasivos que convertem visitantes em clientes",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Megaphone,
      title: "Social Media",
      description: "Estratégias de conteúdo para engajar sua audiência",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Campanhas completas para aumentar suas vendas",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Target,
      title: "Estratégia de Marca",
      description: "Posicionamento estratégico no mercado digital",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Gestão de Comunidade",
      description: "Relacionamento próximo com seus seguidores",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Fluxos automatizados para nutrir leads",
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meus Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para fazer sua marca brilhar no digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
