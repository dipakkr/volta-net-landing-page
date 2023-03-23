import Image from "next/image";

const Features = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 ">
      <div className=" flex flex-col gap-8 lg:grid lg:auto-rows-[3rem] lg:grid-cols-12">
        <div className="relative col-span-8 row-span-3 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/filter.svg"
                alt="filter icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight">Advanced filters</h3>
            <p className="mt-1">
              Filter notifications and issues by any property with logical
              operators.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more → </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/home/filterImg.svg"
              alt="filter"
              loading="lazy"
              className="absolute left-8 right-0 bottom-4"
              width={700}
              height={300}
            />
          </div>
        </div>
        <div className="relative col-span-4 row-span-6 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/editor.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight">Markdown editor</h3>
            <p className="mt-1">
              Take advantage of our powerful editor to write markdown with ease.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more → </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/home/editorImg.svg"
              alt="Markdown editor"
              loading="lazy"
              className="absolute left-8 right-0 bottom-6"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className=" col-span-4 row-span-3 flex cursor-pointer items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/mobile.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight">Mobile ready</h3>
            <p className="mt-1">
              Take advantage of our PWA to use Volta on your mobile or tablet
              devices.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more → </p>
          </div>
        </div>
        <div className=" col-span-4 row-span-3 flex items-center overflow-hidden rounded-lg border-gray-700/50 py-4 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/darkLight.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight">Light &amp; Dark</h3>
            <p className="mt-1">
              Make the Volta app your own and fit your OS. Can be changed
              anytime.
            </p>
          </div>
        </div>
        <div className=" col-span-6 row-span-3 flex items-center overflow-hidden rounded-lg border-gray-700/50 py-4 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/keyboard.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight">
              Keyboard-first design
            </h3>
            <p className="mt-1">
              Optimized for efficiency with shortcuts for everything.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/home/shortcuts.svg"
              alt="keyboard shortcuts"
              loading="lazy"
              className=" mt-[calc(208px-148px)] ml-9"
              width={400}
              height={800}
            />
          </div>
        </div>
        <div className=" col-span-6 row-span-3 flex cursor-pointer items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8">
          <div className="w-full text-center lg:text-left">
            <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
              <Image
                src="/assets/home/desktop.svg"
                alt="icon"
                className=" h-5 w-5 flex-shrink-0"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight">
              Desktop application
            </h3>
            <p className="mt-1">
              Install Volta on your desktop for a native experience.
            </p>
            <p className="mt-3 text-sm lg:hidden"> Read more → </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/home/desktopImg.svg"
              alt="Desktop application"
              loading="lazy"
              className=" mt-[calc(208px-148px)] ml-9"
              width={400}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
