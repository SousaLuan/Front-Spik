import SpikLogo from "../components/SpikLogo";
import BackgroundWords from "../components/BackgroundWords";
import { LogIn, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#FDFDFD] overflow-hidden">
      
      <BackgroundWords />

      <div className="relative z-10 w-full max-w-[420px] bg-white p-10 rounded-[50px] shadow-[0_25px_60px_rgba(0,0,0,0.1)] border border-gray-100 mx-4 flex flex-col items-center">
        
        <div className="mb-12">
          <SpikLogo size="md" />
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-black ml-5 text-black uppercase tracking-wider">E-mail:</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-5 text-black/30" size={20} />
              <input 
                type="email" 
                className="w-full bg-spikYellow rounded-full py-4 pl-14 pr-6 text-black font-bold focus:outline-none focus:ring-2 focus:ring-black transition-all placeholder:text-black/20"
                placeholder="exemplo@spik.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black ml-5 text-black uppercase tracking-wider">Senha:</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-5 text-black/30" size={20} />
              <input 
                type="password" 
                className="w-full bg-spikYellow rounded-full py-4 pl-14 pr-6 text-black font-bold focus:outline-none focus:ring-2 focus:ring-black transition-all placeholder:text-black/20"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex justify-between px-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">
            {/* LINK PARA CADASTRO */}
            <Link href="/register/pageCadastro" className="hover:text-black transition-colors font-sans underline decoration-spikYellow decoration-2 underline-offset-4">
              Cadastre-se
            </Link>
            <button type="button" className="hover:text-black transition-colors font-sans">Esqueceu a senha</button>
          </div>

          <div className="flex flex-col items-center pt-8 gap-8">
            <button className="bg-spikYellow p-6 rounded-full shadow-lg border border-white hover:scale-110 active:scale-95 transition-all group">
              <LogIn size={32} className="text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex items-center gap-3 border border-gray-200 rounded-full px-12 py-3 hover:bg-gray-50 transition-all shadow-sm">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">Entrar com Google</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}