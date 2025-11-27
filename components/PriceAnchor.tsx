import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

const PriceAnchor: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-32 bg-[#02030a] text-white relative overflow-hidden">
        
        {/* Background Ambient Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight px-2">
            <span className="whitespace-nowrap">Quebramos a barreira do preço</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 whitespace-nowrap">
                para você ter um site de alto nível.
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed px-2">
             Site profissional, domínio, hospedagem, segurança e suporte. <br className="hidden md:block"/>
             Tudo incluso em um único plano que custa menos que um jantar.
          </p>
        </div>

        {/* Comparison Card Container */}
        <div className="relative max-w-5xl mx-auto">
            {/* Glow Behind Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl -z-10 transform scale-95 translate-y-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                
                {/* LEFT SIDE: THE PROBLEM (Traditional Model) */}
                <div className="bg-[#0b0c15] p-5 md:p-12 relative flex flex-col justify-between group">
                    {/* Inner Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                    
                    <div>
                        <div className="flex items-center gap-2 mb-6 md:mb-8 opacity-70">
                            <div className="h-px flex-grow bg-white/20"></div>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 uppercase">O Jeito Antigo e Caro</span>
                            <div className="h-px flex-grow bg-white/20"></div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 md:mb-10 text-center md:text-left">
                            Quanto custaria fazer sozinho:
                        </h3>
                        
                        <div className="space-y-4 md:space-y-5">
                            {/* Items */}
                            {[
                                { label: "Criação do site (Agência)", value: "R$ 5.000,00" },
                                { label: "Hospedagem (Anual)", value: "R$ 600,00" },
                                { label: "Domínio (Anual)", value: "R$ 40,00" },
                                { label: "Manutenção (Anual)", value: "R$ 3.600,00" },
                                { label: "Backup Diário (Anual)", value: "R$ 2.400,00" },
                                { label: "Suporte Especializado", value: "R$ ???" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-row justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors gap-2">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-900/50" />
                                        <span className="text-gray-400 font-light text-sm md:text-base">{item.label}</span>
                                    </div>
                                    <span className="font-mono text-red-400/70 line-through decoration-red-500/50 text-sm md:text-base text-right whitespace-nowrap">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total Box */}
                    <div className="mt-8 md:mt-12 bg-red-500/5 border border-red-500/10 rounded-2xl p-5 md:p-6 relative overflow-hidden">
                        <div className="flex flex-col gap-2 relative z-10 text-center md:text-left">
                            <div className="mb-2">
                                <span className="text-red-400/80 text-xs md:text-xs font-bold uppercase tracking-wider">
                                    Investimento 1º Ano
                                </span>
                            </div>
                            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-1 md:gap-0">
                                <span className="text-gray-400 text-base md:text-sm">Total acumulado:</span>
                                <span className="text-4xl md:text-3xl font-bold text-white">R$ 11.640,00</span>
                            </div>
                            <div className="h-px w-full bg-red-500/20 my-3"></div>
                            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-1 md:gap-0">
                                <span className="text-red-300 font-medium text-base md:text-sm">Custo mensal aprox.</span>
                                <span className="text-xl md:text-lg font-bold text-red-400">~ R$ 970,00/mês</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: THE SOLUTION (DecolaWeb) */}
                <div className="bg-white text-dark p-6 md:p-12 relative flex flex-col justify-center overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[60px]"></div>

                    {/* Badge Recommended */}
                    <div className="absolute top-0 inset-x-0 flex justify-center">
                        <div className="bg-primary text-white text-[10px] md:text-xs font-bold px-6 md:px-8 py-1.5 md:py-2 rounded-b-2xl shadow-lg shadow-primary/20 uppercase tracking-wider">
                            Escolha Inteligente
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6 md:mb-8 justify-center md:justify-start mt-6 md:mt-0">
                             <div className="h-px w-8 bg-primary/30"></div>
                             <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase">Plano DecolaWeb</span>
                             <div className="h-px w-8 bg-primary/30"></div>
                        </div>

                        {/* Price Display */}
                        <div className="flex flex-col items-center md:items-start mb-8 md:mb-10">
                            <div className="flex items-start tracking-tighter text-dark leading-none">
                                <span className="text-3xl md:text-3xl font-semibold text-gray-400 mt-2 md:mt-4 mr-1 md:mr-2">R$</span>
                                <span className="text-8xl md:text-[8rem] font-black text-dark tracking-tighter">99</span>
                                <div className="flex flex-col mt-2 md:mt-4 ml-1 md:ml-2">
                                    <span className="text-3xl md:text-4xl font-bold text-primary">,90</span>
                                    <span className="text-lg md:text-xl font-medium text-gray-400">/mês</span>
                                </div>
                            </div>
                            <p className="text-gray-500 font-medium mt-4 bg-gray-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-100 text-xs md:text-sm text-center md:text-left">
                                Sem taxa de adesão. Tudo incluso.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4 mb-8 md:mb-10 pl-2 md:pl-0 justify-items-start w-fit mx-auto md:mx-0">
                            {[
                                "Site Profissional",
                                "SEO Básico Incluso",
                                "Entrega em 48h",
                                "Hospedagem Cloud",
                                "Domínio",
                                "Segurança SSL",
                                "Manutenção",
                                "Backup Diário",
                                "E-mails",
                                "Suporte"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-start gap-2 md:gap-3 group">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
                                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 stroke-[3]" />
                                    </div>
                                    <span className="font-bold text-gray-700 text-base whitespace-nowrap text-left">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 text-center md:text-left leading-relaxed max-w-sm mx-auto md:mx-0">
                            É um valor que uma empresa séria consegue pagar e que se paga com <strong className="text-dark">um cliente novo</strong> que encontrar seu site.
                        </p>

                        <Button 
                            fullWidth 
                            className="py-4 md:py-5 text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all w-full"
                            onClick={() => window.open('https://wa.me/5547997094291?text=Quero%20meu%20site%20por%20R%2499%2C90%2Fm%C3%AAs', '_blank')}
                        >
                            Quero meu site completo
                        </Button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PriceAnchor;