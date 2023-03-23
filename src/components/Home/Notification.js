import { notificationCards } from "@/config/constants";
import Image from "next/image";

const Notification = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
      {/***************** Line Start****************/}
      <div className=" mx-auto flex max-w-xs items-center justify-center">
        <div className="line2 -mr-px h-[1px] w-12 rounded-full"></div>
        <div className="relative flex items-center justify-center rounded-full">
          <div className="lineStyle2 absolute -inset-3.5 z-[-1] h-10 w-10 opacity-100 blur-sm will-change-[filter]"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white"></div>
        </div>
        <div className="lineStyle3 -ml-px h-[1px] w-12 rounded-full"></div>
      </div>
      {/***************** Line End****************/}
      <h2 className=" mt-8 text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        Never miss a notification again
      </h2>
      <p className="mx-auto mt-3 max-w-prose text-center text-lg text-gray-500 lg:mt-5">
        Tired of having to check your mails every 5 minutes or to open GitHub to
        see if you have new notifications? Volta is here to help you.
      </p>

      {/***************** Notification Content ****************/}
      <div className="relative mt-16 flex flex-col gap-8 lg:grid lg:auto-rows-[3rem] lg:grid-cols-12">
        {/***************** Notification Content Main Box ****************/}
        <div className="absolute inset-0 z-[-1] opacity-10 blur will-change-[filter]"></div>
        <div className="col-span-12 row-span-6 grid cursor-pointer rounded-lg border border-gray-700/50 bg-gray-800/50 transition-colors hover:border-white/10 hover:bg-white/5 lg:grid-cols-2">
          <div className="z-[2] my-6 mx-4 lg:order-last lg:my-auto lg:-ml-8 lg:mr-8">
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
              An inbox, made easy.
            </h3>
            <p className=" mt-2 lg:mt-4 lg:text-lg">
              Voltas inbox is a real-time view of your notifications. Its a
              powerful tool with instant preview, shortcuts and filters. Its
              time to love notifications again.
            </p>
          </div>
        </div>

        {/***************** Notification Content Cards ****************/}
        {notificationCards.map((notification, index) => (
          <div
            key={index}
            className="col-span-4 row-span-6 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border-gray-700/50 py-4 transition-colors hover:border-white/10 hover:bg-white/5 lg:border lg:bg-gray-800/50 lg:p-8"
          >
            <div className="w-full text-center lg:text-left">
              <div className=" mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-900/90 lg:mx-0 lg:bg-gray-800/75 lg:group-hover:bg-white/5">
                <Image
                  src={`/assets/home/${notification.icon}`}
                  alt="icon"
                  className=" h-5 w-5 flex-shrink-0"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className=" text-lg font-medium tracking-tight">
                {notification?.title}
              </h3>
              <p className="mt-1 text-sm">{notification?.description}</p>
              <p className="mt-3 text-sm lg:hidden"> Read more → </p>
            </div>
            <div className="hidden lg:block">
              <Image
                src={`/assets/home/${notification.image}`}
                alt="icon"
                className="mt-7 flex-shrink-0"
                width={800}
                height={800}
              />
            </div>
          </div>
        ))}

        {/***************** Notification Content Cards End****************/}
      </div>
    </div>
  );
};

export default Notification;
