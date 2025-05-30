import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

export default function About() {
  const stats = [
    { icon: Users, number: "200+", label: "Clientes Atendidos" },
    { icon: TrendingUp, number: "500%", label: "Crescimento Médio" },
    { icon: Award, number: "50+", label: "Projetos Entregues" },
    { icon: Clock, number: "5+", label: "Anos de Experiência" },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sou uma apaixonada por marketing digital com mais de 5 anos transformando ideias em campanhas de sucesso.
              Especializada em copywriting persuasivo e estratégias de social media que realmente convertem.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Minha missão é ajudar marcas a encontrarem sua voz única no digital e construírem relacionamentos
              autênticos com sua audiência, sempre focando em resultados mensuráveis.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-white to-purple-50">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Sobre mim"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl -z-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
