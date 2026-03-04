import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-black">
      <div className="flex flex-col px-4 lg:flex-row lg:items-center lg:justify-between md:px-6 lg:px-8 max-w-280 lg:mx-auto">
        <div className="flex flex-col gap-8 items-center lg:gap-6 lg:items-start">
          <div className="flex flex-col gap-4 items-center mt-22 lg:items-start">
            <p className="text-[25px] font-semibold leading-8 text-white/40">
              Pro.Beyond.
            </p>
            <h1 className="text-[72px] font-thin leading-18 tracking-[-0.01em] text-white text-center lg:text-left">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <p className="text-[19px] lg:text-[18px] font-medium leading-6 text-[#909090] text-center lg:text-left">
              Created to change everything for the better. For everyone
            </p>
          </div>

          <Link
            href="/category"
            className="
               inline-flex h-14 items-center justify-center
               rounded-md border border-white
               px-14 text-base font-medium leading-6 text-white
               transition
               hover:bg-white hover:text-[#211C24]
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-white/60 focus-visible:ring-offset-2
               focus-visible:ring-offset-[#211C24]
            "
          >
            Shop Now
          </Link>
        </div>

        <div className="relative self-center w-full max-w-101.5 min-h-78.25 mt-12 lg:h-158">
          <Image
            src="/images/home/Iphone.png"
            alt="iPhone 14 Pro"
            fill
            priority
            className="object-cover object-[center_25%]"
          />
        </div>
      </div>
    </section>
  );
}
