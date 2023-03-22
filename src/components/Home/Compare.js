import Image from "next/image"

const Compare = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="relative col-span-12 row-span-3 flex items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className="border-gradient  mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/github.svg"
                alt="github icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className=" text-lg font-medium tracking-tight">
              Always in sync
            </h3>
            <p className=" mt-1">
              Every action is synced between GitHub and Volta in real-time.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more → </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/home/illustration.svg"
              alt="svg"
              className="h-24 pr-16"
              loading="lazy"
              width={326}
              height={96}
            />
            <Image
              src="/assets/home/background.png"
              alt="Background"
              className="absolute inset-y-0 top-0 right-0 z-[-1] h-full"
              loading="lazy"
              width={866}
              height={197}
            />
          </div>
        </div>
    </div>
  )
}

export default Compare