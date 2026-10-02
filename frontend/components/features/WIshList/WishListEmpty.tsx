'use client';
import { Heart, ArrowRight } from 'lucide-react';
import {useRouter} from 'next/navigation';

const WishListEmpty = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500/30">
      <div className="max-w-350 mx-auto px-6 py-8 md:px-10 md:py-12">        
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <Heart 
              className="w-8 h-8 md:w-9 md:h-9 text-[#eab308]" 
              strokeWidth={2}
            />
            
            <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
              Wishlist
            </h1>
          </div>          
          <p className="text-[10px] md:text-xs font-bold tracking-widest text-neutral-500 uppercase mt-2 ml-1">
            0 Saved Items
          </p>
        </header>

        <main className="border border-neutral-800 bg-[#0a0a0a] min-h-125 md:min-h-150 flex flex-col items-center justify-center p-6 text-center">          
          <div className="w-20 h-20 border border-neutral-800 flex items-center justify-center mb-8">
            <Heart 
              className="w-8 h-8 text-[#525252]" 
              strokeWidth={1.5}
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">
            Your Wishlist Is Empty
          </h2>
          
          <p className="text-neutral-500 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10 font-medium">
            Save pieces you love and come back to them anytime.
          </p>

          <button className="bg-[#d4b055] hover:bg-[#c2a04d] text-black text-xs md:text-sm font-bold cursor-pointer uppercase tracking-widest px-8 py-4 transition-colors duration-200 flex items-center gap-2 group" onClick ={() => router.push('/home')}>
            Explore The Collection
            <ArrowRight 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              strokeWidth={2.5}
            />
          </button>
        </main>
      </div>
    </div>
  );
};

export default WishListEmpty;