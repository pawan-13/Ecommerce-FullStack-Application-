import Image from "next/image"
import { CategoryData } from "@/constant/constant"

const Category = () => {
  return (
    <div className="text-white cursor-pointer grid grid-cols-1 gap-8 px-6 py-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-12">
      {CategoryData?.map((category, index) => (
        <article key={index} className="group min-w-0">
          <div className="relative aspect-4/5 overflow-hidden bg-black">
            <Image
              className="h-full w-full object-cover cursor-pointer transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-150"
              src={category.image}
              alt={category.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(0,0,0,0.92) 8%, rgba(0,0,0,0.82) 15%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.68) 50%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.82) 85%, rgba(0,0,0,0.92) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 p-4">
              <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-[#C9A84C] font-bold">{category.pieces} pieces &gt;</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Category