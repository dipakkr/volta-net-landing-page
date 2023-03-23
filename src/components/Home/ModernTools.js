import Image from "next/image";

const ModernTools = () => {
  return (
    <div>
      <div className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 ">
        {/***************** Line Start****************/}
        <div className="relative mx-auto flex max-w-xs items-center justify-center">
          <div className="line3 -mr-px h-[1px] w-24 rounded-full"></div>
          <div className="relative flex items-center justify-center rounded-full">
            <div className="lineStyle4 absolute -inset-3.5 z-[-1] h-10 w-10 opacity-100 blur-sm will-change-[filter]"></div>
            <div className="h-3 w-3 rounded-full border-2 border-white"></div>
          </div>
        </div>
        {/***************** Line Start****************/}
        <h2 className=" mt-8 text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Shipped with modern tools
        </h2>
        <p className="u-text-gray-500 mx-auto mt-3 max-w-prose text-center text-lg lg:mt-5">
          Volta is built for speed to become your day-to-day ally. It is built
          with a set of features to increase your productivity.
        </p>
        {/***************** Tool Content ****************/}
        <div className="relative mt-16 flex flex-col gap-8 lg:grid lg:auto-rows-[3rem] lg:grid-cols-12">
          {/***************** Tool Content Main Box ****************/}
          <div className="tool_gradient absolute inset-0 z-[-1] opacity-10 blur will-change-[filter]"></div>
          <div className="relative col-span-12 row-span-6 grid cursor-pointer rounded-lg border border-gray-700/50 bg-gray-800/50 transition-colors hover:border-white/10 hover:bg-white/5 lg:grid-cols-2">
            {/***************** Right ****************/}
            <div className="aspect-w-16 aspect-h-10 z-[2]  my-6 mx-4 lg:order-last lg:my-auto lg:-ml-8 lg:mr-8">
              <Image
                src="/assets/home/inbox.svg"
                width={1200}
                height={1200}
                alt="icon svg"
                className=" flex-shrink-0"
              />
            </div>
            {/***************** Left ****************/}
            <div className="relative flex flex-shrink-0 flex-col justify-center p-6 text-center sm:p-16 lg:order-first lg:text-left">
              <h3 className=" text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                Powerful command menu
              </h3>
              <p className="u-text-gray-500 mt-2 lg:mt-4 lg:text-lg">
                Search a repository, issue, user or manage anything in seconds
                from the command menu. <br />
                <br />
                Open it with{" "}
                <kbd className="!my-0 inline-flex h-5 min-w-[20px] items-center justify-center rounded px-1 align-text-top font-sans text-[11px] font-semibold ring-1">
                  Ctrl
                </kbd>
                <span className="inline-block px-1"></span>
                <kbd className="!my-0 inline-flex h-5 min-w-[20px] items-center justify-center rounded px-1 align-text-top font-sans text-[11px] font-semibold ring-1">
                  K
                </kbd>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTools;
