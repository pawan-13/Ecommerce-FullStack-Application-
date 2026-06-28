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
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-10">
            <button className="rounded-xl border border-white/10 p-2 text-white lg:hidden">
              <Menu size={22} />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-xl font-bold text-white shadow-lg">
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

            <button className="relative hidden rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10 md:block">
              <Bell size={21} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                5
              </span>
            </button>

            <button className="relative rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10">
              <ShoppingCart size={21} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <button className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-2 transition hover:bg-white/10 md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <User size={18} />
              </div>

              <div className="text-left">
                <p className="text-sm font-medium text-white">
                  Hello, John
                </p>

                <p className="text-xs text-slate-400">
                  Premium Member
                </p>
              </div>

              <ChevronDown className="mr-2 text-slate-400" size={18} />
            </button>
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

          <div className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
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