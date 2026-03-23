import { Zap } from 'lucide-react';

export default function SpikLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: { text: 'text-3xl', icon: 20 },
    md: { text: 'text-5xl', icon: 32 },
    lg: { text: 'text-7xl', icon: 48 },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center gap-2 select-none">
      <Zap size={currentSize.icon} className="text-yellow-400 fill-yellow-400 rotate-[-15deg]" />
      <h1 className={`${currentSize.text} font-black italic text-black tracking-tighter`}>
        SPIK
      </h1>
      <Zap size={currentSize.icon} className="text-yellow-400 fill-yellow-400 rotate-[15deg]" />
    </div>
  );
}