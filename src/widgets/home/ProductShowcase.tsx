// widgets/home/ui/ProductShowcase.tsx
import { showcaseProducts } from "@/widgets/home/data/products";
import { Tile } from "@/widgets/home/ui/Tile";

export default function ProductShowcase() {
  const [airpods, vr, ps, mac] = showcaseProducts;

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 lg:h-150 lg:max-h-150">
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:h-full">
        <Tile
          product={ps}
          className="order-3 lg:order-0 lg:h-full lg:py-0 lg:px-0"
          mdGapClass="lg:gap-3"
          textMaxWClass="lg:max-w-[288px] lg:maxw-[338px]"
          imageWrapMdClass="lg:h-[328px] lg:overflow-hidden"
          imageFitMdClass="lg:object-cover lg:scale-120 lg:origin-top-right lg:-translate-x-8 lg:-translate-y-5"
          textContainerExtraClass="lg:pr-[32px] xl:pr-[48px]"
          titleClass="md:text-[48px] md:leading-10"
          descClass="md:text-[14px] md:leading-6"
        />

        <div className="lg:grid lg:grid-cols-2 lg:h-full">
          <Tile
            product={airpods}
            className="order-1 lg:order-0 lg:h-full lg:py-0 lg:px-0"
            mdGapClass="lg:gap-3"
            textMaxWClass="lg:max-w-[160px]"
            imageWrapMdClass="lg:h-[272px] lg:overflow-visible"
            imageFitMdClass="md:scale-90 lg:object-cover lg:object-right lg:-translate-x-12"
            textContainerExtraClass="lg:pr-[48px]"
            titleClass="md:text-[48px] md:leading-12 lg:text-[29px] lg:leading-10"
            descClass="md:text-[14px] lg:text-[14px] lg:leading-6"
          />
          <Tile
            product={vr}
            className="order-2 lg:order-0 lg:h-full lg:py-0 lg:px-0"
            mdGapClass="lg:gap-3"
            textMaxWClass="lg:max-w-[160px]"
            imageWrapMdClass="md:scale-70 lg:scale-100 lg:h-[272px] lg:overflow-hidden"
            imageFitMdClass="lg:object-cover lg:object-right lg:-translate-x-8"
            textContainerExtraClass="lg:pr-[48px]"
            titleClass="md:text-[48px] md:leading-12 lg:text-[29px] lg:leading-10"
            descClass="md:text-[14px] lg:text-[14px] lg:leading-6"
          />
        </div>
      </div>

      <Tile
        product={mac}
        className="lg:h-full lg:py-0 lg:px-0"
        showButton
        imageRight
        mdGapClass="lg:gap-3"
        textMaxWClass="lg:max-w-[280px] lg:max-w-[350px]"
        buttonWClass="lg:w-[191px] lg:px-0"
        imageWrapMdClass="lg:h-[502px] lg:overflow-hidden lg:flex lg:items-center"
        imageFitMdClass="lg:object-cover lg:object-left"
        textContainerExtraClass="lg:pl-[24px] xl:pl-[56px]"
        titleClass="md:text-[48px] lg:text-[64px] lg:leading-14"
        descClass="md:text-[14px] lg:leading-6"
      />
    </section>
  );
}
