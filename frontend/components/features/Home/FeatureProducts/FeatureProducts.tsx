'use client'
import { ArrowRight, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { FeatureProductsData } from '@/utils/constant/constant';
import { featureProductsData } from '@/types/type';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '@/redux/feature/wishlistSlice';

const ProductCard = ({data}: {data: featureProductsData}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const dispatch = useDispatch();
     const wishlistdata = useSelector(
        (state: { wishlist: { wishlist: featureProductsData[] } }) => state.wishlist.wishlist
    );
    const isInWishlist = wishlistdata.some((item) => item.id === data.id);

    return (
        <div className="w-full max-w-100 bg-[#1a1a1a] font-sans">
            <div
                className="relative overflow-hidden w-full bg-[#e8e6e1] cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="absolute top-4 right-4 z-20 bg-black/40 p-2 rounded-sm backdrop-blur-sm">
                    <Heart className="text-white w-5 h-5" fill={isInWishlist ? "#C9A84C" : "transparent"} onClick = {() => dispatch(addToWishList(data))} />
                </div>
                <img
                    src={data.image}
                    alt={data.pname}
                    className={`w-full object-cover max-h-96 transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                <div
                    className={`absolute bottom-0 left-0 w-full bg-[#C9A84C] py-4 text-center text-black font-semibold text-sm tracking-widest transition-transform duration-300 ease-in-out z-20 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
                >
                    {data.viewproduct}
                </div>
            </div>

            <div className="p-5 flex flex-col gap-2 border backdrop:blur-sm border-[#C9A84C]/20 bg-black/40">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{data.bname}</p>
                        <h3 className="text-[16px] text-white font-medium tracking-wide">{data.pname}</h3>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-white font-semibold text-lg">{data.price}</span>
                    </div>
                </div>

                <div className="flex items-center gap-1 mt-0">
                    {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C9A84C]" fill="#C9A84C" strokeWidth={0} />
                    ))}
                    <Star className="w-4 h-4 text-[#C9A84C]" fill="transparent" strokeWidth={2} />
                    <span className="text-gray-400 text-sm ml-1">{data.rating}</span>
                    <span className="text-gray-400 text-sm">{data.reviews}</span>
                </div>
            </div>
        </div>
    );
};
const FeatureProducts = () => {
    return (
        <div className="p-15 flex flex-col w-full">
            <div className="flex items-start justify-between w-full">
                <div>
                    <p className="text-[12px] text-[#C9A84C] font-semibold uppercase mb-3">Selection</p>
                    <h3 className="text-3xl font-bold text-white uppercase">Featured Pieces</h3>
                </div>
                <div className="flex items-center gap-1 cursor-pointer text-white font-base mt-8">
                    <span>view all</span>  <ArrowRight size={18} />
                </div>
            </div>

            <div className="mt-8 flex items-center justify-start gap-6 overflow-x-auto scrollbar-hide">
                {
                    FeatureProductsData.map((product: featureProductsData) => (
                        <ProductCard key={product.id} data={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeatureProducts