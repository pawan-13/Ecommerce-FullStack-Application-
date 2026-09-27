'use client'
import {Star} from "lucide-react"
const Counter = () => {
  return (
    <div className="absolute text-white right-10">
        <div className="flex items-center justify-between">
           <div className = "flex items-center flex-col gap-0 w-18">
              <span className = "text-xl tracking-tight text-[#C9A84C] font-bold">60+</span>
              <span className = "text-[9px] text-slate-300 font-normal">STUDIOS</span>
           </div>
           <div className = "flex items-center flex-col gap-0 w-18">
             <span className = "text-xl tracking-tight text-[#C9A84C] font-bold">28K</span>
             <span className = "text-[9px] text-slate-300 font-normal">CUSTOMERS</span>
           </div>
           <div className = "flex items-center flex-col gap-0 w-18">
              <span className = "text-xl flex items-center tracking-tight text-[#C9A84C] font-bold">4.9 <Star size={18}/></span>
              <span className = "text-[9px] text-slate-300 font-normal">RATING</span>
           </div>
        </div>
    </div>
  )
}

export default Counter