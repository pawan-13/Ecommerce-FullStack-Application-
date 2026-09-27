'use client'
import { featureProductsData } from '@/types/type';
import { Heart, ArrowRight, X, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux'

const WishList = () => {
  const wishlistdata = useSelector((state: { wishlist: { wishlist: featureProductsData[] } }) => state.wishlist.wishlist);

  return (
    <div className="p-15 container min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500/30">
      <div className="max-w-400 mx-auto px-6 py-8 md:px-10 md:py-12">
        <header className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6 md:gap-0">
          <div>
            <div className="flex items-center gap-3">
              <Heart
                className="w-7 h-7 md:w-8 md:h-8 text-[#eab308]"
                strokeWidth={2.5}
              />
              <h1 className="lg:text-3xl md:text-[2.5rem] leading-none font-black tracking-tight uppercase">
                Wishlist
              </h1>
            </div>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mt-3 ml-0.5">
              {wishlistdata.length} Saved Item
            </p>
          </div>
          <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mt-2 md:mt-4">
            Continue Shopping
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" strokeWidth={2} />
          </button>
        </header>
        <main className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            wishlistdata.map((data) => (
              <div key={data.id} className="border border-neutral-800 bg-[#0a0a0a] flex flex-col group/card">
                <div className="relative aspect-4/5 bg-[#f4f4f4] overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.image}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-neutral-800/80 hover:bg-neutral-700 backdrop-blur-sm flex items-center justify-center transition-colors">
                    <X className="w-4 h-4 text-white" strokeWidth={2} />
                  </button>
                </div>
                <div className="p-5 grow">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-1">
                    {data.bname}
                  </p>
                  <h3 className="text-[14px] font-semibold tracking-wide mb-2">
                    {data.pname}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-bold text-white">
                      {data.price}
                    </span>
                    <span className="text-[14px] font-medium text-neutral-500 line-through">
                      $250
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-t border-neutral-800 mt-auto">
                  <button className="py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors border-r border-neutral-800">
                    {(data.viewproduct).split(" ")[0]}
                  </button>
                  <button className="py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white flex items-center justify-center gap-2 hover:bg-neutral-900 transition-colors">
                    <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2} />
                    Add
                  </button>
                </div>
              </div>
            ))
          }
        </main>
      </div>
    </div>
  );
};

export default WishList;