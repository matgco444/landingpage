import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Megaphone, Smartphone, Paintbrush, Bot, TrendingUp, Users, Target, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    {
      icon: Megaphone,
      title: "Tráfego Pago",
      description: "Alcance clientes certos no momento certo com campanhas estratégicas que convertem e geram ROI mensurável."
    },
    {
      icon: Smartphone,
      title: "Social Media",
      description: "Construímos presença digital relevante e engajadora, transformando seguidores em clientes e fãs da sua marca."
    },
    {
      icon: Paintbrush,
      title: "Branding",
      description: "Criamos identidades visuais sofisticadas e consistentes que comunicam autoridade e exclusividade."
    },
    {
      icon: Bot,
      title: "Implementação Comercial",
      description: "Automatizamos processos comerciais e de atendimento, aumentando eficiência e maximizando oportunidades de venda."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Branderino transformou nossa presença digital. Resultados reais, estratégicos e consistentes.",
      image: "https://randomuser.me/api/portraits/women/68.jpg" // Female image
    },
    {
      name: "Juliana Costa",
      text: "Com a equipe deles, conseguimos automatizar processos e aumentar nosso faturamento em menos de 6 meses.",
      image: "https://randomuser.me/api/portraits/women/70.jpg" // Female image
    },
    {
      name: "Carlos Andrade",
      text: "Profissionalismo, sofisticação e resultados. Eles são realmente a extensão do nosso negócio.",
      image: "https://randomuser.me/api/portraits/men/80.jpg" // Male image
    }
  ]

  const kpis = [
    { icon: TrendingUp, text: "Até 3x mais crescimento para empresas que investem em marketing" },
    { icon: Target, text: "25% de aumento médio no faturamento em apenas 6 meses" },
    { icon: Users, text: "30% de redução no custo de aquisição de clientes" },
    { icon: Zap, text: "2x mais rápido reconhecimento de marca e autoridade" }
  ]

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-[#f9f9f9]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `
              radial-gradient(circle at 20% 80%, rgba(17, 45, 96, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(182, 192, 197, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, rgba(17, 45, 96, 0.1) 0%, rgba(182, 192, 197, 0.1) 100%)
            `
          }}
        />
        
        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Nós somos a <span className="highlight">extensão do seu negócio</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-trirong">
            Transformamos marketing, branding e vendas em <span className="highlight">resultados estratégicos</span> e mensuráveis. 
            Atuamos lado a lado com você, como uma equipe interna dedicada ao crescimento do seu negócio.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="btn-primary text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://www.notion.so/27ff98b218af8033aff1f2828e4a98ac?pvs=106', '_blank')}
            >
              Agendar Reunião
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5548991369301&text&type=phone_number&app_absent=0', '_blank')}
            >
              Entrar em contato
            </Button>
          </div>
        </div>

        {/* Floating KPI Card */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <div className="floating-card backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chart visualization */}
              <div className="space-y-4">
                {kpis.map((kpi, index) => {
                  const Icon = kpi.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#112d60] to-[#b6c0c5] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#112d60] to-[#b6c0c5] rounded-full animate-pulse"
                            style={{ width: `${75 + index * 5}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* KPI Text */}
              <div className="space-y-4 text-left">
                {kpis.map((kpi, index) => (
                  <p key={index} className="text-sm md:text-base font-trirong leading-relaxed">
                    {kpi.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Nossas <span className="highlight">Soluções</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={index} className="solution-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#112d60] to-[#b6c0c5] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="font-trirong leading-relaxed text-gray-300">{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Nossos Produtos
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="highlight">Jasmine.ai</span>
            </h3>
            <p className="text-lg font-trirong leading-relaxed text-gray-300 max-w-2xl mx-auto mb-8">
              Plataforma inteligente que integra CRM, automação de marketing e atendimento digital, 
              permitindo que você gere leads e converta clientes com precisão e eficiência.
            </p>
            <Button 
              className="btn-primary text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5548991369301&text&type=phone_number&app_absent=0', '_blank')}
            >
              Quero saber mais
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            O que nossos clientes dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`Foto de ${testimonial.name} — cliente Assessoria Branderino`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  </div>
                </div>
                <p className="font-trirong leading-relaxed text-gray-300">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#f9f9f9]">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg font-trirong leading-relaxed text-[#f9f9f9] mb-8 max-w-2xl mx-auto">
              Agende uma reunião e descubra como a Assessoria Branderino pode se tornar sua equipe estratégica de marketing, branding e vendas.
            </p>
            <Button 
              className="btn-primary text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://www.notion.so/27ff98b218af8033aff1f2828e4a98ac?pvs=106', '_blank')}
            >
              Agendar Reunião
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-athiti">
            © {new Date().getFullYear()} Assessoria Branderino. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
