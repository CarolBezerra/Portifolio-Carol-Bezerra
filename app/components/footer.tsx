import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
    { icon: Facebook, href: "#", color: "hover:text-blue-700" },
  ]

  const quickLinks = ["Início", "Serviços", "Portfolio", "Sobre", "Contato"]

  const services = ["Copywriting", "Social Media", "Marketing Digital", "Estratégia de Marca", "Consultoria"]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              CreativeHub
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando marcas através de estratégias digitais inovadoras e conteúdos que realmente convertem.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`text-gray-400 ${social.color} transition-colors hover:bg-white/10`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CreativeHub. Todos os direitos reservados.</p>
            <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
              Feito com <Heart className="w-4 h-4 text-red-500" /> para transformar negócios
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
