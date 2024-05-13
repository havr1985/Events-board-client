import { Fan } from "lucide-react"

export const Logo = () => {
  return (
      <div className=" flex gap-x-2 items-center md:gap-x-4">
          <Fan className=" text-prim-green md:w-8 md:h-8 xl:w-10 xl:h-10" />
              <p className=" font-bold md:text-lg xl:text-2xl">Events<span className=" text-prim-green">Board</span></p>
      </div>
  )
}
