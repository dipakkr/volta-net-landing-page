import Image from "next/image";
import { BsApple, BsArrowRight } from "react-icons/bs";

const Cta = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/home/cta.png"
        alt="Background"
        class="absolute inset-x-0 bottom-[-162px] -z-[10] md:bottom-[-120px]"
        loading="lazy"
        width={1200}
        height={1200}
      />
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
        <div class="text-center">
          <Image
            src="/assets/home/brand/icon.png"
            alt=" logo"
            width={20}
            height={20}
            class="sh-20 mx-auto mb-5 w-20"
          />
          <h2 class=" text-3xl font-bold tracking-tight sm:text-4xl">
            Start with Volta, today.
          </h2>
          <div class="mt-12 flex items-center justify-center gap-4 sm:mx-auto">
            <button
              class="flex items-center gap-2 rounded-full border border-transparent bg-white/10 px-4 py-2 text-sm font-medium shadow-sm duration-100 hover:bg-white/5 "
              type="button"
            >
              <span class="">Sign up for free</span>
              <BsArrowRight size={20} />
            </button>
            <div class="flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-[#d1cfcf]">
              <span class="flex cursor-pointer items-center gap-2">
                <BsApple />
                <span class="">Get the app</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
