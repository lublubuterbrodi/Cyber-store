export interface ShowcaseProduct {
  title: string;
  highlight: string;
  description: string;
  image: string;
  bg: string;
  textColor: string;
   isButton?: boolean;
   slug: string;
}

export const showcaseProducts: ShowcaseProduct[] = [
  {
    title: "Apple AirPods",
    highlight: "Max",
    slug: "airpods-max",
    description: "Computational audio. Listen, it's powerful",
    image: "/images/home/Headphones.png",
    bg: "bg-[#EDEDED]",
    textColor: "text-black",
  },
  {
    title: "Apple Vision",
    highlight: "Pro",
    slug: "vision-pro",
    description: "An immersive way to experience entertainment",
    image: "/images/home/VR.png",
    bg: "bg-[#353535]",
    textColor: "text-white",
  },
  {
    title: "Playstation",
     highlight: "5",
    slug: "playstation-5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    image: "/images/home/PlayStation.png",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Macbook",
     highlight: "Air",
    slug: "macbook-air",
    description:
      "The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    image: "/images/home/MacBook.png",
    bg: "bg-[#EDEDED]",
    textColor: "text-black",
    isButton: true,
  },
];