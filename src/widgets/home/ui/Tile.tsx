"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ShowcaseProduct } from "@/widgets/home/data/products";

type Props = {
  product: ShowcaseProduct;
  className?: string;
  showButton?: boolean;
  imageRight?: boolean;

  titleClass?: string;
  descClass?: string;

  textMaxWClass?: string;
  buttonWClass?: string;
  mdGapClass?: string;
  imageWrapMdClass?: string;
  imageFitMdClass?: string;
  textContainerExtraClass?: string;
};

export function Tile({
  product,
  className = "",
  showButton = false,
  imageRight = false,

  titleClass = "text-[34px] leading-10",
  descClass = "text-[16px] leading-6",

  textMaxWClass = "",
  buttonWClass = "",
  mdGapClass = "md:gap-8",
  imageWrapMdClass = "",
  imageFitMdClass = "",
  textContainerExtraClass = "",
}: Props) {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col gap-6 px-4 py-10 ${product.bg} ${className}`}
    >
      <div
        className={[
          "flex flex-col gap-6",
          "md:flex-row md:items-center md:h-full",
          mdGapClass,
          imageRight ? "md:flex-row-reverse" : "md:flex-row",
        ].join(" ")}
      >
        {/* КАРТИНКА — ссылка */}
        <Link
          href={`/product/${product.slug}`}
          className={["relative w-full h-50 md:w-1/2", imageWrapMdClass].join(
            " ",
          )}
          aria-label={`Open ${product.title || product.highlight}`}
        >
          <Image
            src={product.image}
            alt={product.title || product.highlight}
            fill
            className={["object-contain", imageFitMdClass].join(" ")}
          />
        </Link>

        {/* ТЕКСТ */}
        <div
          className={[
            "flex flex-col gap-4 text-center md:text-left md:w-1/2 md:min-w-0",
            textContainerExtraClass,
          ].join(" ")}
        >
          <div className={["w-full", textMaxWClass].join(" ")}>
            {/* Заголовок + описание — ссылка */}
            <Link href={`/product/${product.slug}`} className="block">
              <h2 className={`${titleClass} font-light ${product.textColor}`}>
                {product.title ? (
                  <>
                    <span className="md:hidden">
                      <span className="font-medium">{product.title}</span>{" "}
                      <span className="font-light">{product.highlight}</span>
                    </span>

                    <span className="hidden md:inline">
                      <span className="font-light">{product.title}</span>{" "}
                      <span className="font-medium">{product.highlight}</span>
                    </span>
                  </>
                ) : (
                  <span className="font-medium">{product.highlight}</span>
                )}
              </h2>

              <p className={`mt-2 text-[#909090] ${descClass}`}>
                {product.description}
              </p>
            </Link>
          </div>

          {/* КНОПКА — НЕ ссылка, чтобы не было <a> внутри <a> */}
          {showButton && (
            <button
              type="button"
              onClick={() => router.push("/category")}
              className={[
                "inline-flex h-14 items-center justify-center rounded-md border border-black",
                "px-10 text-base font-medium leading-6 text-black transition hover:bg-black hover:text-white",
                buttonWClass,
              ].join(" ")}
            >
              Shop Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
