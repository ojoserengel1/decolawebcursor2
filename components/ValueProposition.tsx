import React from 'react';
import Button from './ui/Button';
import { Layout, Cloud, Globe, Lock, Wrench, MessageCircle, CheckCircle2, Smartphone, Search, Share2, Mail, Timer, Trophy } from 'lucide-react';

const BentoCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  className?: string;
  theme?: 'light' | 'dark' | 'primary';
}> = ({ title, description, icon, className = '', theme = 'light' }) => {
  
  const themeStyles = {
    light: "bg-white text-dark border-gray-100 hover:border-gray-200",
    dark: "bg-dark text-white border-gray-800",
    primary: "bg-primary text-white border-primary"
  };

  const iconBgStyles = {
    light: "bg-gray-50 text-primary",
    dark: "bg-white/10 text-primary",
    primary: "bg-white/20 text-white"
  };

  return (
    <div className={`p-5 md:p-8 rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${themeStyles[theme]} ${className}`}>
      <div>
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 ${iconBgStyles[theme]}`}>
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h3>
        <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const ValueProposition: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Premium */}
        <div className="text-center max-w-full mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 mb-4 md:mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Ecossistema Completo</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold text-dark mb-4 md:mb-6 tracking-tight flex flex-col items-center">
            <span className="md:whitespace-nowrap">Tudo o que você precisa para existir na internet.</span>
            <span className="text-primary mt-1 md:mt-2 md:whitespace-nowrap">Em um único plano mensal.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto font-light px-2">
            Esqueça a dor de cabeça de contratar hospedagem aqui, domínio ali e freela lá. <br className="hidden md:block" />
            Centralizamos a tecnologia em uma assinatura que cabe no seu bolso.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-fr">
          
          {/* Card Principal - Site (Destaque Visual Aumentado) */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-3 bg-white rounded-3xl p-5 md:p-8 border border-gray-100 shadow-lg relative overflow-hidden group flex flex-col">
            <div className="relative z-10 flex-grow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center mb-4 md:mb-6 text-white shadow-lg shadow-primary/30">
                <Layout className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3 md:mb-4 md:whitespace-nowrap">Site Profissional & Moderno</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
                Layout responsivo, desenhado estrategicamente para <br className="hidden md:block" />
                converter visitantes em clientes. Mostre o que <br className="hidden md:block" />
                você faz com clareza e autoridade.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base">
                  <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-primary" /> 
                  <span>Otimizado para Mobile</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" /> 
                  <span>Design Focado em Vendas</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base">
                  <Cloud className="w-4 h-4 md:w-5 md:h-5 text-primary" /> 
                  <span>Carregamento Rápido</span>
                </div>
                 <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" /> 
                  <span>Botão de WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base">
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-primary" /> 
                  <span>SEO Básico Incluso</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base">
                  <Share2 className="w-4 h-4 md:w-5 md:h-5 text-primary" /> 
                  <span>Integração Redes Sociais</span>
                </div>
              </div>

              {/* Blocos Premium */}
              <div className="space-y-3 md:space-y-4">
                  {/* Bloco 1: Entrega de Qualidade */}
                  <div className="bg-dark rounded-2xl p-4 md:p-6 relative overflow-hidden flex flex-col xs:flex-row items-start xs:items-center gap-3 md:gap-5 shadow-lg border border-dark group-hover:border-gray-800 transition-colors">
                      {/* Glow effect */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                      
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 relative z-10">
                          <Timer className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      
                      <div className="relative z-10">
                          <h4 className="text-white font-bold text-base md:text-xl leading-none mb-1">Entrega de Qualidade</h4>
                          <p className="text-gray-400 text-xs md:text-base font-medium">Sua empresa no digital em 48 horas.</p>
                      </div>
                  </div>

                  {/* Bloco 2: Sucesso */}
                  <div className="bg-dark rounded-2xl p-4 md:p-6 relative overflow-hidden flex flex-col xs:flex-row items-start xs:items-center gap-3 md:gap-5 shadow-lg border border-dark group-hover:border-gray-800 transition-colors">
                      {/* Glow effect */}
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                      
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 relative z-10">
                          <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      
                      <div className="relative z-10">
                          <h4 className="text-white font-bold text-base md:text-xl leading-none mb-1">Toda empresa de sucesso tem um site</h4>
                          <p className="text-gray-400 text-xs md:text-base font-medium">Agora é sua vez de ter o seu.</p>
                      </div>
                  </div>
              </div>

            </div>
            {/* Elemento Decorativo */}
            <div className="absolute top-1/2 -right-20 w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>

          {/* Infraestrutura (Cards Menores) - Row 1 */}
          <BentoCard 
            title="Hospedagem Cloud" 
            description="Ambiente 100% cloud, estável e veloz. Nada de servidor caindo."
            icon={<Cloud className="w-5 h-5 md:w-6 md:h-6" />}
          />
          <BentoCard 
            title="Domínio Grátis" 
            description="SuaMarca.com.br registrado e configurado por nós."
            icon={<Globe className="w-5 h-5 md:w-6 md:h-6" />}
          />
          
          {/* Segurança & Manutenção - Row 2 */}
          <BentoCard 
            title="Segurança SSL" 
            description="O cadeado verde que transmite confiança para o seu cliente."
            icon={<Lock className="w-5 h-5 md:w-6 md:h-6" />}
          />
          <BentoCard 
            title="Manutenção Total" 
            description="Atualizações técnicas constantes. Sem bugs."
            icon={<Wrench className="w-5 h-5 md:w-6 md:h-6" />}
          />

          {/* E-mails & Suporte - Row 3 */}
           <BentoCard 
            title="E-mails" 
            description="Contas profissionais (email@suaempresa.com.br) para passar mais credibilidade."
            icon={<Mail className="w-5 h-5 md:w-6 md:h-6" />}
          />

          {/* Suporte (Agora ocupando 1 espaço para fechar o grid ao lado do email) */}
          <div className="bg-white rounded-3xl p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-green-600">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Suporte Humanizado</h3>
              <p className="text-gray-600 text-sm">
                  Precisa alterar uma foto? Mudar um texto? Tirar uma dúvida? 
                  Fale diretamente com nossa equipe via Ticket.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;