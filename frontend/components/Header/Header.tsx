'use client'
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Search,
  User,
  Menu,
  Bell,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { profileData } from "@/constant/constant"
import { useState } from "react";
import { useGetLogoutMutation } from "@/services/api"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"
import {logoutSuccess} from "@/redux/feature/loginSlice"

export default function Header() {
  const userdata = useSelector((state: any) => state.login.user)
  const dispatch = useDispatch();
  const [isprofileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [getlogout] = useGetLogoutMutation();
  const router = useRouter();

  const handleLogout = async (item: any) => {
    if (item?.name === "Logout") {
      try {
        const logout = await getlogout({}).unwrap();
        dispatch(logoutSuccess(false));
        toast.success(logout?.message);
        router.push('/');
      }
      catch(err:any){
        toast.error(err?.message);
      }
      
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-10">
            <button className="rounded-xl border border-white/10 p-2 text-white lg:hidden">
              <Menu size={22} />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 via-violet-500 to-pink-500 text-xl font-bold text-white shadow-lg">
                S
              </div>

              <div className="hidden sm:block">
                <h1 className="text-xl font-bold tracking-wide text-white">
                  ShopNova
                </h1>

                <p className="-mt-1 text-xs text-slate-400">
                  Premium Shopping
                </p>
              </div>
            </Link>

            <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:bg-white/10 lg:flex">
              Categories
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="mx-8 hidden flex-1 lg:flex">
            <div className="relative w-full">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search products..."
                className="h-12 w-full rounded-full border border-white/10 bg-white/5 pl-14 pr-5 text-white outline-none transition-all placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10 lg:hidden">
              <Search size={20} />
            </button>

            <button className="relative rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10">
              <Heart size={21} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
                2
              </span>
            </button>

            {/* <button className="relative hidden rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10 md:block">
              <Bell size={21} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                5
              </span>
            </button> */}

            <button className="relative rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10">
              <ShoppingCart size={21} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <div className="relative hidden md:block">
              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-2 transition hover:bg-white/10 cursor-pointer" onClick={() => setIsProfileOpen(!isprofileOpen)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white">
                  <User size={18} />
                </div>

                <div className="text-left">
                  <p className="text-sm font-medium text-white">
                    Hello, {userdata?.name.slice(0, 1).toUpperCase() + userdata?.name?.slice(1)}
                  </p>
                </div>

                {isprofileOpen ? <ChevronUp className="mr-2 text-slate-400" size={18} /> : <ChevronDown className="mr-2 text-slate-400" size={18} />}
              </button>

              {
                isprofileOpen && (
                  <div className="absolute right-0 top-full mt-1 min-w-full text-center rounded-xl border border-indigo-400/20 bg-indigo-950/90 p-2 text-sm text-slate-100 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
                    <ul className="space-y-1">
                      {
                        profileData?.map((item, index) => (
                          <li key={index} onClick={() => handleLogout(item)}>
                            <Link
                              href={item?.link}
                              className="block rounded-lg px-3 py-2 text-left transition hover:bg-indigo-500/20 hover:text-white"
                            >
                              {item?.name}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className="hidden h-14 items-center justify-between border-t border-white/10 lg:flex">
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/" className="transition hover:text-white">
              New Arrivals
            </Link>

            <Link href="/" className="transition hover:text-white">
              Electronics
            </Link>

            <Link href="/" className="transition hover:text-white">
              Fashion
            </Link>

            <Link href="/" className="transition hover:text-white">
              Shoes
            </Link>

            <Link href="/" className="transition hover:text-white">
              Beauty
            </Link>

            <Link href="/" className="transition hover:text-white">
              Furniture
            </Link>
          </nav>

          <div className="rounded-full bg-linear-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            🔥 Summer Sale 50% OFF
          </div>
        </div>

        <div className="pb-4 lg:hidden">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search products..."
              className="h-12 w-full rounded-full border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
