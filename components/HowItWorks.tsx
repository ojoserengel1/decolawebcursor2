import React from 'react';
import Button from './ui/Button';
import { MessageSquare, FileText, PenTool, Layout, CheckCircle2, Rocket, Headphones, Globe, ArrowRight } from 'lucide-react';

const ProcessStep: React.FC<{ 
    number: string; 
    title: string; 
    icon: React.ReactNode; 
    children: React.ReactNode; 
    isEven: boolean;
    isLast?: boolean;
}> = ({ number, title, icon, children, isEven, isLast }) => {
    
    return (
        <div className={`relative flex items-center justify-between md:justify-center w-full mb-12 md:mb-24 group`}>
            
            {/* LINHA CENTRAL (Conector) */}
            <div className="absolute left-5 md:left-1/2 w-px h-[calc(100%+4rem)] -top-12 bg-gradient-to-b from-gray-200 via-primary/20 to-gray-200 md:-translate-x-1/2 z-0"></div>

            {/* ÍCONE CENTRAL (Nó) */}
            <div className={`absolute left-5 md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${isLast ? 'bg-primary shadow-primary/30' : 'bg-white shadow-gray-200'}`}>
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${isLast ? 'bg-white' : 'bg-primary'}`}></div>
            </div>

            {/* CONTEÚDO */}
            <div className={`w-full md:w-[45%] pl-14 md:pl-0 flex flex-col ${isEven ? 'md:mr-auto md:items-end md:text-right' : 'md:ml-auto md:items-start md:text-left'}`}>
                
                <div className="relative bg-white p-5 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group w-full">
                    {/* Número Watermark */}
                    <div className={`absolute -top-4 md:-top-6 ${isEven ? 'left-4 md:left-8' : 'right-4 md:right-8'} text-5xl md:text-6xl font-black text-gray-50/80 pointer-events-none select-none z-0 transition-colors group-hover:text-primary/5`}>
                        {number}
                    </div>

                    <div className={`relative z-10 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {icon}
                        </div>

                        <h3 className="text-lg md:text-2xl font-bold text-dark mb-2 md:mb-4 group-hover:text-primary transition-colors">
                            {title}
                        </h3>

                        <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-gray-200 text-dark font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 shadow-sm">
             <Rocket className="w-3 h-3 text-primary" />
             <span>Processo Ágil</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-extrabold text-dark mb-6 md:mb-8 tracking-tight leading-[1.1]">
            Veja como é simples colocar o <br className="hidden md:block" />
            seu site no ar com a <span className="text-primary relative inline-block">
                DecolaWeb
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-2">
            Você entra com as informações do seu negócio, aprova cada etapa, <br className="hidden md:block" /> 
            e nós criamos o site para você. Simples assim.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
            
            {/* Passo 1 */}
            <ProcessStep 
                number="01" 
                title="Contato e contratação" 
                icon={<MessageSquare className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={false}
            >
                <p className="mb-4">Você clica no botão, tira suas dúvidas com nossa equipe e confirma a contratação do plano DecolaWeb.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] md:text-xs font-medium bg-green-100 text-green-800">
                        Sem taxa de criação
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] md:text-xs font-medium bg-blue-100 text-blue-800">
                        Oferta clara
                    </span>
                </div>
            </ProcessStep>

            {/* Passo 2 */}
            <ProcessStep 
                number="02" 
                title="Briefing do seu negócio" 
                icon={<FileText className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={true}
            >
                <p className="mb-2">Você preenche um formulário simples contando sobre sua empresa, serviços e diferenciais.</p>
                <p className="text-xs md:text-sm text-gray-400 italic font-medium">É com base nele que vamos montar o seu site.</p>
            </ProcessStep>

            {/* Passo 3 */}
            <ProcessStep 
                number="03" 
                title="Criação dos textos (copy)" 
                icon={<PenTool className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={false}
            >
                <p>Nossa equipe escreve o texto do site de forma completa focado em venda e conversão de leads.</p>
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                    <strong className="text-primary text-xs md:text-sm">Você revisa e aprova tudo antes do design.</strong>
                </div>
            </ProcessStep>

            {/* Passo 4 */}
            <ProcessStep 
                number="04" 
                title="Design e desenvolvimento" 
                icon={<Layout className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={true}
            >
                <p>Montamos o seu site com um layout design profissional, moderno, otimizado para celular, de altíssima velocidade e focado em conversão.</p>
            </ProcessStep>

            {/* Passo 5 */}
            <ProcessStep 
                number="05" 
                title="Ajustes e Aprovação" 
                icon={<CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={false}
            >
                <p>Você recebe o link do site, analisa e aprova. Garantimos que tudo esteja exatamente como você imaginou.</p>
            </ProcessStep>

            {/* Passo 6 */}
            <ProcessStep 
                number="06" 
                title="Configuração da Infraestrutura" 
                icon={<Rocket className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={true}
            >
                <p className="font-semibold text-dark mb-2 md:mb-3">A DecolaWeb cuida de tudo:</p>
                <ul className="space-y-1 md:space-y-2">
                    {[
                        "Configuração de Domínio",
                        "Configuração da Hospedagem",
                        "Instalação do SSL (Cadeado)",
                        "Criação dos E-mails solicitados"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 shrink-0"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </ProcessStep>

            {/* Passo 7 */}
            <ProcessStep 
                number="07" 
                title="Seu site no ar" 
                icon={<Globe className="w-5 h-5 md:w-6 md:h-6" />}
                isEven={false}
                isLast={true}
            >
                <p className="font-bold text-dark text-base md:text-lg">Pronto, a partir daqui seu site está no ar!</p>
                <p className="text-xs md:text-sm mt-1">Visível para o mundo inteiro.</p>
            </ProcessStep>

             {/* FIM DA LINHA DE TEMPO - ESPAÇO */}
             <div className="h-12 md:h-20"></div>

             {/* Suporte Contínuo - CARTÃO DARK PREMIUM */}
             <div className="relative z-20">
                <div className="bg-[#03041A] rounded-3xl p-6 md:p-12 overflow-hidden shadow-2xl relative text-center group">
                     
                     {/* Efeitos de Fundo */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-500"></div>
                     <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-900/20 rounded-full blur-[60px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                     <div className="relative z-10 flex flex-col items-center">
                         <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 backdrop-blur-sm border border-white/5 shadow-inner">
                            <Headphones className="w-6 h-6 md:w-8 md:h-8" />
                         </div>
                         
                         <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Suporte Contínuo</h3>
                         
                         <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 px-4 text-center">
                            <span className="whitespace-nowrap">Não te abandonamos depois do seu site no ar.</span> <br />
                            <span className="md:whitespace-nowrap">Enquanto seu plano estiver ativo, seu site continua <span className="text-white font-medium">no ar, atualizado e seguro.</span></span> <br />
                            Precisou de ajuda? É só nos chamar.
                         </p>
                         
                         <Button 
                            variant="primary" 
                            className="px-8 py-4 md:px-12 md:py-5 text-base md:text-lg shadow-[0_0_30px_rgba(255,0,46,0.3)] hover:shadow-[0_0_40px_rgba(255,0,46,0.5)] transition-all transform hover:-translate-y-1 w-full md:w-auto"
                            onClick={() => window.open('https://wa.me/5547997094291?text=Quero%20meu%20site%20por%20R%2499%2C90%2Fm%C3%AAs', '_blank')}
                        >
                            Quero começar agora
                            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                     </div>
                </div>
             </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;