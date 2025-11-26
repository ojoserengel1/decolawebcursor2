import React, { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
    <div className={`group border transition-all duration-300 rounded-2xl overflow-hidden mb-4 ${isOpen ? 'border-primary/30 bg-white shadow-lg shadow-primary/5' : 'border-gray-100 bg-white hover:border-primary/20 hover:shadow-md'}`}>
        <button 
            className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
            onClick={onClick}
        >
            <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-dark group-hover:text-gray-900'}`}>
                {question}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-gray-50 border-gray-200 text-gray-400 group-hover:border-primary/30 group-hover:text-primary'}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </div>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg border-t border-transparent">
                {answer}
            </div>
        </div>
    </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F9FAFB] relative">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                <MessageCircleQuestion className="w-4 h-4" />
                <span>Dúvidas Comuns</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                As perguntas que você faria pra gente <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                    (e as respostas sinceras).
                </span>
            </h2>
        </div>

        <div className="space-y-4">
            <FAQItem 
                isOpen={openIndex === 0}
                onClick={() => toggleIndex(0)}
                question="Mas eu já tenho Instagram, preciso mesmo de site?"
                answer={
                    <>
                        <p className="mb-4"><strong>Instagram é ótimo, mas não é sua casa própria.</strong> É uma rede que muda algoritmo, derruba alcance e não aparece quando a pessoa pesquisa no Google.</p>
                        <p>O site é o seu endereço oficial na internet, a base de tudo. Você pode usar o Instagram pra atrair pessoas e o site pra organizar e apresentar sua empresa com autoridade e profissionalismo.</p>
                    </>
                }
            />
             <FAQItem 
                isOpen={openIndex === 1}
                onClick={() => toggleIndex(1)}
                question="Por que pagar por mês e não fazer um site à vista?"
                answer={
                    <>
                        <p className="mb-4">Porque aqui você não está comprando só um “site pronto”. <strong>Você está contratando site + hospedagem + domínio + SSL + manutenção + suporte.</strong></p>
                        <p>Se você fizer tudo separado, vai pagar criação cara (R$ 3k+), hospedagem anual, domínio anual e manutenção por hora. Na DecolaWeb, isso vira um único valor mensal fixo, simples de entender e de encaixar no caixa da empresa.</p>
                    </>
                }
            />
            <FAQItem 
                isOpen={openIndex === 2}
                onClick={() => toggleIndex(2)}
                question="Domínio e hospedagem realmente estão incluídos?"
                answer="Sim. No plano da DecolaWeb, você não precisa contratar hospedagem em outro lugar, nem registrar seu domínio sozinho. Nós cuidamos do processo completo pra você, deixando tudo pronto e configurado — tudo dentro do valor de R$ 99,90/mês, enquanto o plano estiver ativo."
            />
            <FAQItem 
                isOpen={openIndex === 3}
                onClick={() => toggleIndex(3)}
                question="E se der algum problema no site?"
                answer="É exatamente pra isso que você tem a DecolaWeb. Se o site cair, travar ou apresentar algum erro técnico, você não precisa sair procurando “um cara de TI”. Você chama a gente e resolvemos dentro da nossa rotina de manutenção e suporte inclusa no plano."
            />
            <FAQItem 
                isOpen={openIndex === 4}
                onClick={() => toggleIndex(4)}
                question="Não tenho tempo pra ficar envolvido com isso agora…"
                answer={
                    <>
                        <p className="mb-4">O processo foi pensado justamente para quem não tem tempo. Você só precisa: <strong>Assinar o plano, preencher um briefing simples e aprovar.</strong></p>
                        <p>A parte pesada — técnica, criativa e de configuração — fica 100% com a DecolaWeb. Nós trabalhamos para você, não o contrário.</p>
                    </>
                }
            />
        </div>

      </div>
    </section>
  );
};

export default FAQ;