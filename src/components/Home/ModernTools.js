import Image from "next/image";

const ModernTools = () => {
  return (
    <div>
      <div class="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 ">
        {/***************** Line Start****************/}
        <div class="relative mx-auto flex max-w-xs items-center justify-center">
          <div class="line3 -mr-px h-[1px] w-24 rounded-full"></div>
          <div class="relative flex items-center justify-center rounded-full">
            <div class="lineStyle4 absolute -inset-3.5 z-[-1] h-10 w-10 opacity-100 blur-sm will-change-[filter]"></div>
            <div class="h-3 w-3 rounded-full border-2 border-white"></div>
          </div>
        </div>
        {/***************** Line Start****************/}
        <h2 class=" mt-8 text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Shipped with modern tools
        </h2>
        <p class="u-text-gray-500 mx-auto mt-3 max-w-prose text-center text-lg lg:mt-5">
          Volta is built for speed to become your day-to-day ally. It is built
          with a set of features to increase your productivity.
        </p>
        {/***************** Tool Content ****************/}
        <div class="relative mt-16 flex flex-col gap-8 lg:grid lg:auto-rows-[3rem] lg:grid-cols-12">
          {/***************** Tool Content Main Box ****************/}
          <div class="tool_gradient absolute inset-0 z-[-1] opacity-10 blur will-change-[filter]"></div>
          <div class="relative col-span-12 row-span-6 grid cursor-pointer rounded-lg border border-gray-700/50 bg-gray-800/50 transition-colors hover:border-white/10 hover:bg-white/5 lg:grid-cols-2">
            {/***************** Right ****************/}
            <div class="aspect-w-16 aspect-h-10 z-[2]  my-6 mx-4 lg:order-last lg:my-auto lg:-ml-8 lg:mr-8">
              <Image
                src="/assets/home/inbox.svg"
                width={1200}
                height={1200}
                alt="icon svg"
                className=" flex-shrink-0"
              />
            </div>
            {/***************** Left ****************/}
            <div class="relative flex flex-shrink-0 flex-col justify-center p-6 text-center sm:p-16 lg:order-first lg:text-left">
              <h3 class=" text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                Powerful command menu
              </h3>
              <p class="u-text-gray-500 mt-2 lg:mt-4 lg:text-lg">
                Search a repository, issue, user or manage anything in seconds
                from the command menu. <br />
                <br />
                Open it with{" "}
                <kbd class="!my-0 inline-flex h-5 min-w-[20px] items-center justify-center rounded px-1 align-text-top font-sans text-[11px] font-semibold ring-1">
                  Ctrl
                </kbd>
                <span class="inline-block px-1"></span>
                <kbd class="!my-0 inline-flex h-5 min-w-[20px] items-center justify-center rounded px-1 align-text-top font-sans text-[11px] font-semibold ring-1">
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
