import React, { useState, useEffect } from 'react';
import { 
  Bed, 
  MapPin, 
  Clock, 
  Info, 
  Fuel, 
  Car, 
  Utensils, 
  CreditCard,
  X,
  ChevronRight,
  Wallet
} from 'lucide-react';

export default function App() {
  // Estados do Simulador Financeiro
  const gasolinaTotal = 430.57; // Valor fixo conforme solicitado
  const [alimentacao, setAlimentacao] = useState(200);
  const [pedagios, setPedagios] = useState(0);
  const [hospedagemType, setHospedagemType] = useState('duplo');
  
  // Estado do Modal do Hotel
  const [showHotelModal, setShowHotelModal] = useState(false);

  const hospedagemValores = {
    individual: 180,
    duplo: 220,
    triplo: 320,
    master: 430
  };

  const getHospedagemValue = () => hospedagemValores[hospedagemType];
  
  // Cálculo: Gasolina fixa dividida por 3 + Alimentação + Pedágios + Hospedagem (O usuário preenche o tipo que vai ficar)
  const custoIndividualGasolina = gasolinaTotal / 3;
  const custoTotal = custoIndividualGasolina + alimentacao + pedagios + getHospedagemValue();

  const whatsappMessage = encodeURIComponent("Olá Daiane, gostaria de fazer uma reserva. Fui indicado pela Verônica e vou para o casamento de Douglas.");
  const whatsappLink = `https://wa.me/5587996350011?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen relative font-sans text-slate-800 overflow-x-hidden bg-[#eef2f6] selection:bg-blue-300 selection:text-blue-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
        }
        
        .floating-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.6;
          animation: float 20s infinite ease-in-out alternate;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
          100% { transform: translate(-20px, 20px) scale(0.9); }
        }
        `}
      </style>
      
      {/* Background Fluid Shapes */}
      <div className="floating-blob bg-cyan-300/40 w-[40vw] h-[40vw] top-[-10%] left-[-10%]"></div>
      <div className="floating-blob bg-blue-400/30 w-[50vw] h-[50vw] bottom-[-20%] right-[-10%]" style={{ animationDelay: '-5s' }}></div>
      <div className="floating-blob bg-purple-300/30 w-[30vw] h-[30vw] top-[30%] left-[40%]" style={{ animationDelay: '-10s' }}></div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 relative z-10 space-y-8">
        
        {/* Header */}
        <header className="text-center mb-8">
          <div className="glass-panel rounded-3xl p-6 md:p-8 inline-block mx-auto max-w-2xl w-full">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 flex items-center justify-center gap-3 pb-3">
              <span className="text-3xl">💍</span> Missão: Casamento de Douglas
            </h1>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Igreja Matriz de Nossa Senhora De Lourdes, Praça Nossa Sra. de Lourdes, 215, Calçado - PE<br/>
              19/12/2026 - Sábado | 20:00h
            </p>
          </div>
        </header>

        {/* Roteiro e Hospedagem (Vertical Block) */}
        <section className="glass-panel rounded-[2rem] p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Roteiro e Hospedagem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ida */}
            <div className="relative border-l-2 border-blue-400/30 pl-6 pb-2">
              <div className="absolute w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <h3 className="text-lg font-bold mb-4 text-blue-700">Ida (19/12) - Casamento</h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                  <span><strong>09:00h - Partida:</strong><br/>Candeias, Jaboatão dos Guararapes.</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                  <div className="flex flex-col gap-2">
                    <span><strong>Parada 1:</strong> Paróquia N. Sra. da Conceição (Barro) - Casa de Guilherme</span>
                    <span><strong>Parada 2:</strong> Santa Luzia (Estância) - Casa de Vinícius</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span><strong>12:40h - Previsão de Chegada:</strong><br/>Hotel Lucena - Lajedo (209km).</span>
                </li>
                <li className="flex gap-3 mt-4 bg-white/60 p-3 rounded-xl border border-white/80">
                  <Info className="w-5 h-5 text-purple-500 shrink-0" />
                  <span><strong>20:00h - Casamento:</strong><br/>Igreja Matriz de N. Sra. De Lourdes, Calçado - PE.</span>
                </li>
              </ul>
            </div>

            {/* Volta */}
        <div className="relative border-l-2 border-purple-400/30 pl-6">
          <div className="absolute w-4 h-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
          <h3 className="text-lg font-bold mb-4 text-indigo-700">Volta (20/12) - Retorno</h3>
          <ul className="space-y-4 text-sm text-slate-700">
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-slate-400 shrink-0" />
              <span><strong>10:30h - Saída:</strong><br/>Hotel Lucena, Lajedo.</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
              <div className="flex flex-col gap-2">
                <span><strong>Parada 1:</strong> Santa Luzia (Estância) - Casa de Vinícius</span>
                <span><strong>Parada 2:</strong> Paróquia N. Sra. da Conceição (Barro) - Casa de Guilherme</span>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
              <span><strong>14:00h - Previsão de Chegada:</strong><br/>Jaboatão dos Guararapes.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Simulador de Custos (Vertical Block) */}
    <section className="glass-panel rounded-[2rem] p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
          <Wallet className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Simulador de Custos</h2>
      </div>

      <div className="bg-white/60 border border-white rounded-3xl p-6 text-center shadow-sm relative overflow-hidden mb-6">
         <h3 className="text-slate-500 font-medium text-lg mb-1">Seu custo estimado</h3>
         <div className="text-4xl md:text-5xl font-extrabold text-slate-800">
           R$ {custoTotal.toFixed(0)}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Gasolina Fixa */}
        <div className="bg-white/50 border border-white p-5 rounded-2xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2 text-slate-700">
              <Fuel className="w-4 h-4 text-blue-500" /> Gasolina (Sua parte fixa)
            </h3>
            <span className="font-bold text-blue-600">R$ {custoIndividualGasolina.toFixed(2)}</span>
          </div>
          
          <div className="text-sm text-slate-600 space-y-1 bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
            <p>- 209km até o Hotel</p>
            <p>- + 22km para o casamento (ida e volta)</p>
            <p>- + 209km de volta.</p>
            <p>- Total: 440km</p>
            <p className="font-semibold text-slate-700 mt-2">- Custo total estimado: R$ 430,57</p>
          </div>
        </div>

        {/* Hospedagem Seleção */}
        <div className="bg-white/50 border border-white p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2 text-slate-700">
              <Bed className="w-4 h-4 text-purple-500" /> Hospedagem
            </h3>
            <span className="font-bold text-purple-600">R$ {getHospedagemValue()}</span>
          </div>
          <select 
            value={hospedagemType}
            onChange={(e) => setHospedagemType(e.target.value)}
            className="w-full bg-white/80 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
          >
            <option value="individual">Quarto Individual - R$ 180 (Sem desconto)</option>
            <option value="duplo">Quarto Duplo/Casal - R$ 220 (Com desconto)</option>
            <option value="triplo">Quarto Triplo - R$ 320</option>
            <option value="master">Suíte Master - R$ 430</option>
          </select>
        </div>

        {/* Alimentação Slider */}
        <div className="bg-white/50 border border-white p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2 text-slate-700">
              <Utensils className="w-4 h-4 text-orange-400" /> Alimentação
            </h3>
            <span className="font-bold text-orange-500">R$ {alimentacao}</span>
          </div>
          <input 
            type="range" min="50" max="600" step="10" 
            value={alimentacao} 
            onChange={(e) => setAlimentacao(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-400"
          />
        </div>

        {/* Pedágios Slider */}
        <div className="bg-white/50 border border-white p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2 text-slate-700">
              <Car className="w-4 h-4 text-slate-500" /> Pedágios (Opcional)
            </h3>
            <span className="font-bold text-slate-600">R$ {pedagios}</span>
          </div>
          <input 
            type="range" min="0" max="100" step="5" 
            value={pedagios} 
            onChange={(e) => setPedagios(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-500"
          />
        </div>
      </div>
    </section>

    {/* Mapa Google Maps */}
    <section className="glass-panel rounded-[2rem] p-4 md:p-6 mb-24">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" /> Rota da Viagem (Ida)
            </h2>
            <a 
              href="https://www.google.com/maps/dir/?api=1&origin=Rua+Minas+Gerais,+186+-+Candeias,+Jaboatão+dos+Guararapes+-+PE&waypoints=R.+Dorothéia+Vieira,+54+-+Barro,+Recife+-+PE%7CSanta+Luzia+-+Estância,+Recife+-+PE&destination=Hotel+Lucena,+Lajedo+-+PE" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full hover:bg-blue-200 transition-colors"
            >
              Abrir no Maps
            </a>
          </div>
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <iframe 
              src="https://maps.google.com/maps?saddr=Rua+Minas+Gerais,+186,+Candeias,+Jaboatao+dos+Guararapes,+PE&daddr=R.+Dorotheia+Vieira,+54,+Barro,+Recife,+PE+to:Santa+Luzia,+Estancia,+Recife,+PE+to:Hotel+Lucena,+Lajedo,+PE&output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Rota de Ida da Viagem"
            ></iframe>
          </div>
        </section>

      </div>

      {/* Botão Flutuante (Hotel) */}
      <button 
        onClick={() => setShowHotelModal(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 rounded-full shadow-lg shadow-purple-500/40 hover:scale-105 transition-transform flex items-center justify-center"
        aria-label="Informações do Hotel"
      >
        <Bed className="w-6 h-6" />
      </button>

      {/* Modal do Hotel */}
      {showHotelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay escuro */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setShowHotelModal(false)}
          ></div>
          
          {/* Conteúdo do Modal */}
          <div className="bg-white rounded-3xl w-full max-w-sm relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 text-white relative">
              <button 
                onClick={() => setShowHotelModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <Bed className="w-8 h-8 mb-3 opacity-90" />
              <h3 className="text-2xl font-bold">Hotel Lucena</h3>
              <p className="text-purple-100 text-sm opacity-90">Lajedo - PE</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-amber-800 font-bold flex items-center gap-2 mb-2 text-sm">
                  <Info className="w-4 h-4" /> Atenção para o Desconto
                </h4>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Para garantir a diária promocional de casal (R$ 220,00), você deve informar à Daiane que: <br/><br/>
                  <strong>1) Foi indicação da Verônica.<br/>2) Está indo para o casamento de Douglas.</strong>
                </p>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/20"
              >
                Reservar via WhatsApp <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}