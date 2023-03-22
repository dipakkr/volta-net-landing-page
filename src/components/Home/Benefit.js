import Image from "next/image"

const Benefit = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 ">
      <div className=" mt-8 flex flex-col gap-8 lg:grid lg:auto-rows-[3rem] lg:grid-cols-12">
        <div className=" col-span-6 row-span-6 flex flex-col items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/automationIcon.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className=" text-lg font-medium tracking-tight">
              Powerful automation
            </h3>
            <p className=" mt-1">
              Volta will save you time by smartly moving issues and pull
              requests across your board.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more → </p>
          </div>
          <div className="hidden pt-4 lg:block">
            <Image
              src="/assets/home/automation.svg"
              alt="automation bg"
              className="  flex-shrink-0"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="relative col-span-6 row-span-3 flex items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className="border-gradient relative mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/boardIcon.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className=" text-lg font-medium tracking-tight">
              Embed boards
            </h3>
            <p className=" mt-1">
              Share repository boards with your community to keep them in the
              loop of your progress.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more →</p>
          </div>
        </div>
        <div className="relative col-span-6 row-span-3 flex items-center overflow-hidden rounded-lg border-gray-700/50 py-4 hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className="border-gradient relative mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/empoweredIcon.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className=" text-lg font-medium tracking-tight">
              Empowered issues
            </h3>
            <p className=" mt-1">
              Do anything like on GitHub, and more. Real-time comments, due
              dates, archive issues...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit