import Image from "next/image"
import homeBanner from "@/public/Assets/homebanner.png"
import Counter from "@/components/features/Home/Counter/Counter"
import Category from "@/components/features/Home/Category/Category"
import FeatureProducts from "@/components/features/Home/FeatureProducts/FeatureProducts"
import Link from "next/link"
import editpic from "@/public/Assets/editorialdressing.png"

const Home = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="relative overflow-hidden min-h-screen">
          <Image className="absolute h-full inset-0 w-full opacity-45 object-cover" src={homeBanner} alt="Hero Banner" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 8%, rgba(0,0,0,0.82) 15%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.68) 50%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.82) 85%, rgba(0,0,0,0.92) 100%)'
            }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto p-5 flex flex-col items-start pb-24 min-h-96">
            <div>
              <h1 className="font-bold scale-y-125 my-16 text-white leading-22 mb-12 tracking-tight uppercase text-[clamp(3.5rem,6vw,5rem)]">
                Form
                <br />
                <span className="font-bold text-[#C9A84C]">FOLLOWS</span>
                <br />
                <span>FUNCTION</span>
              </h1>
            </div>
            <div>
              <p className="text-lg max-w-md text-slate-300 mb-8">Considered pieces from the world's most intentional designers. Built to last, worn to age.</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <button className="bg-[#C9A84C] text-black font-semibold text-sm py-3 w-36 hover:bg-[#a88a3a] transition-colors duration-300">
                Shop Now
              </button>
              <button className="bg-transparent border border-slate-300  text-white font-semibold text-sm py-3 w-28 hover:border hover:border-[#C9A84C] transition-colors duration-300">
                New In
              </button>
            </div>
          </div>
          <Counter />
        </section>

        <section className="bg-linear-to-t from-black/30 via-transparent to-transparent"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 8%, rgba(0,0,0,0.82) 15%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.68) 50%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.82) 85%, rgba(0,0,0,0.92) 100%)'
          }}>
          <div>
            <Category />
          </div>
        </section>

        <section className="bg-linear-to-t bg-black/90">
          <FeatureProducts />
        </section>

        <section className="w-full min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center p-4 md:p-8">
          <div className="max-w-350 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            <div className="w-full relative overflow-hidden rounded-sm">
              <Image
                src={editpic}
                alt="Woman with sunglasses and tattoos"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col p-5 bg-[#141414] justify-center max-w-xl mx-auto lg:mx-0">
              <p className="text-[#bfa054] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Editorial &nbsp;·&nbsp; SS26
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8">
                The Art of <br />
                <span className="text-[#bfa054]">Considered</span> <br />
                Dressing
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Our SS26 lookbook explores the space between restraint and expression — how a single garment can anchor a life well lived.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa054] mt-2 shrink-0"></span>
                  <span>No trend-chasing. Only enduring design.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa054] mt-2 shrink-0"></span>
                  <span>Direct relationships with 68+ independent studios.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa054] mt-2 shrink-0"></span>
                  <span>Climate-neutral shipping on every order.</span>
                </li>
              </ul>
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-[#bfa054] text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
              >
                Explore The Story
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
