import SpikLogo from "../../components/SpikLogo";
import BackgroundWords from "../../components/BackgroundWords";
import { User, Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

//mudar nome do arquivo para page.tsx
export default function Register() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#FDFDFD] overflow-hidden">
      
      <BackgroundWords />

      {/* Botão para voltar à raiz (Login) */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-black/50 hover:text-black font-black uppercase text-[10px] tracking-widest transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para Login
      </Link>

      <div className="relative z-10 w-full max-w-[450px] bg-white p-10 rounded-[50px] shadow-[0_25px_60px_rgba(0,0,0,0.1)] border border-gray-100 mx-4 flex flex-col items-center">
        
        <div className="mb-8">
          <SpikLogo size="md" />
          <h2 className="text-center font-black uppercase text-[12px] tracking-[0.3em] text-gray-400 mt-2">Crie sua conta</h2>
        </div>

        <form className="w-full space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black ml-5 text-black uppercase tracking-wider">Como podemos te chamar?</label>
            <div className="relative flex items-center">
              <User className="absolute left-5 text-black/30" size={18} />
              <input 
                type="text" 
                className="w-full bg-[#FFD84D] rounded-full py-3 pl-14 pr-6 text-black font-bold focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Seu nome"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black ml-5 text-black uppercase tracking-wider">E-mail:</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-5 text-black/30" size={18} />
              <input 
                type="email" 
                className="w-full bg-[#FFD84D] rounded-full py-3 pl-14 pr-6 text-black font-bold focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="exemplo@spik.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black ml-5 text-black uppercase tracking-wider">Crie uma senha:</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-5 text-black/30" size={18} />
              <input 
                type="password" 
                className="w-full bg-[#FFD84D] rounded-full py-3 pl-14 pr-6 text-black font-bold focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center gap-6">
            <button className="w-full bg-black text-[#FFD84D] font-black uppercase tracking-[0.2em] py-4 rounded-full shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-sm">
              Finalizar Cadastro
            </button>

            <p className="text-[9px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
              Ao clicar em finalizar, você concorda com nossos <br/>
              <span className="text-black cursor-pointer underline">Termos</span> e <span className="text-black cursor-pointer underline">Privacidade</span>.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
