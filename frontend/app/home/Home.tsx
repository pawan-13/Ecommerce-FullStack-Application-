import Image from "next/image"
import homeBanner from "@/public/Assets/homebanner.png"

const Home = () => {
  return (
    <div>
      {/* Hero Banner Section */}
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
              <h1 className="font-bold scale-y-125 my-20 text-white leading-22 mb-10 tracking-tight uppercase text-[clamp(3.5rem,6vw,5rem)]">
                Form
                <br />
                <span className="font-bold text-[#C9A84C]">FOLLOWS</span>
                <br />
                <span>FUNCTION</span>
              </h1>
            </div>
            <div>
              <p className="text-lg max-w-md text-slate-300">Considered pieces from the world's most intentional designers. Built to last, worn to age.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
