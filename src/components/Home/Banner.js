import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/home/hero.png"
        alt="hero"
        className="absolute -top-20 -z-[10] h-[calc(100vh+162px)] w-screen object-cover md:h-[calc(100vh+120px)]"
        width={1440}
        height={1177}
      />

      {/*****************Banner Content ****************/}
      <div className="mx-auto max-w-3xl px-4 pt-20 pb-32 sm:px-6 lg:px-8 lg:pt-28 lg:pb-40">
        <div>
          <div className="-mt-8 mb-8 flex justify-center sm:mt-0">
            <Link
              href="/"
              className="rounded-full border border-[#6d6d6d] bg-gray-900 px-3 py-2 text-sm font-medium  leading-4 hover:bg-gray-900/5"
            >
              {" "}
              See whats new in v1.12.0 →
            </Link>
          </div>
          <div>
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
              Supercharged
              <br />
              GitHub experience
            </h1>
            <p className=" mt-6 text-center text-base leading-8 md:text-lg">
              Work in real-time with your team on open-source and private
              repositories, all in one place. Working on GitHub issues and
              notifications has never been that fun.
            </p>
            <div className="mt-12 flex justify-center gap-x-4">
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-base font-medium shadow-sm backdrop-blur-sm transition-colors duration-100 hover:border-white/30 hover:bg-white/5 "
                type="button"
              >
                <BsGithub size={20} />
                <span>Continue with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/***************** Hero Banner Bottom Image ****************/}
      <div className="relative hidden sm:block">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="border-gradient relative rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/home/screenshot.png"
                alt="Hero"
                width={2878}
                height={1620}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
