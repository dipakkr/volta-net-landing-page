import Image from "next/image";

const IssueBoard = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-8 lg:px-8 ">
      {/***************** Line Start****************/}
      <div className=" mx-auto flex max-w-xs items-center justify-center">
        <div className="relative flex items-center justify-center rounded-full">
          <div className="line1 absolute -inset-3.5 z-[-1] h-10 w-10 opacity-100 blur-sm will-change-[filter]"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white"></div>
        </div>
        <div className="lineStyle -ml-px h-[1px] w-24 rounded-full"></div>
      </div>
      {/***************** Line End****************/}

      <h2 className=" mt-8 text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        Breeze through issues at light speed
      </h2>
      <p className=" mx-auto mt-3 max-w-prose text-center text-lg lg:mt-5">
        Having trouble keeping track of your issues and their corresponding
        status as well as your team progress? Volta introduces the ultimate
        solution to manage your GitHub issues.
      </p>

      {/***************** Issue Box Content ****************/}
      <div className=" mt-16 flex flex-col gap-8 lg:grid lg:auto-rows-[3rem] lg:grid-cols-12">
        <div className=" col-span-12 row-span-6 grid rounded-lg border border-gray-700/50 bg-gray-800/50 transition-colors hover:border-white/10 hover:bg-white/5 lg:grid-cols-2">
          <div className=" z-[2] my-auto mx-4 lg:order-last lg:my-auto lg:-ml-8 lg:mr-8">
            <Image
              src="/assets/home/inbox.svg"
              width={1200}
              height={1200}
              alt="icon svg"
              className=" flex-shrink-0"
            />
          </div>
          <div className=" flex flex-shrink-0 flex-col justify-center p-6 text-center sm:p-16 lg:order-first lg:text-left">
            <h3 className=" text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
              Issue boards, out of the box.
            </h3>
            <p className=" mt-2 lg:mt-4 lg:text-lg">
              Import and manage your issues and pull requests on our kanban
              boards with zero configuration. Its a real-time view with built-in
              automation and a drag and drop interface. Each repository and user
              gets its own board. <br />
            </p>
          </div>
        </div>
      </div>
      {/***************** Issue Box Content End****************/}
    </div>
  );
};

export default IssueBoard;
