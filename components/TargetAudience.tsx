import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* FOR YOU */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                <h3 className="text-2xl font-bold text-dark mb-6">Esse plano é perfeito pra você se…</h3>
                <ul className="space-y-4">
                    {[
                        "Você ainda não tem site e sabe que já passou da hora",
                        "Você tem um site velho, feio ou desatualizado e quer algo realmente profissional",
                        "Você quer ser encontrado no Google por pessoas que já procuram o que você vende",
                        "Você quer ter um link profissional para colocar no cartão, na bio do Instagram, no WhatsApp e em anúncios",
                        "Você quer qualidade, rapidez e confiança, sem gastar uma fortuna nem entrar em uma novela com agência ou freela"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="bg-green-100 p-1 rounded-full mt-1 shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium md:whitespace-nowrap">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

             {/* NOT FOR YOU */}
             <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
                <h3 className="text-2xl font-bold text-dark mb-6">E não é pra você se…</h3>
                <ul className="space-y-4">
                    {[
                        "Você quer um sistema complexo, portal gigante ou um projeto totalmente fora de padrão",
                        "Você quer ficar mudando tudo o tempo todo, sem respeitar processo e escopo",
                        "Você ainda não leva sua presença digital a sério e não vê valor em investir menos de R$ 100/mês nisso"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="bg-red-100 p-1 rounded-full mt-1 shrink-0">
                                <X className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-gray-700 font-medium md:whitespace-nowrap">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;