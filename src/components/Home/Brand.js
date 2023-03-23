import { brands } from "@/config/constants";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Trusted by open-source communities
      </h2>
      <div className="mt-8 lg:mt-12">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 lg:gap-x-16">
          {brands.map((brand, index) => (
            <div key={index}>
              <Image
                src={`/assets/home/brand/${brand.icon}`}
                alt="icon"
                className="h-8 w-[32px] cursor-pointer rounded-md lg:h-12 lg:w-[48px]"
                width={50}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="brandLine mx-auto my-12 h-[1px] w-full rounded-full lg:w-96"></div>
      <div className="flex items-center justify-center gap-8 text-center lg:gap-16">
        <div className="text-center">
          <p className="text-2xl font-bold">500</p>
          <p>Organizations</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">50k+</p>
          <p>Repositories</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">1M+</p>
          <p>Issues</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
