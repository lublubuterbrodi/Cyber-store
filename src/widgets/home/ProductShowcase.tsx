import Image from "next/image";

export default function ProductShowcase() {
  return (
    <div>
      <div>
        <Image
          src="/images/home/Headphones.png"
          alt="iPhone 14 Pro"
          width={192}
          height={200}
          priority
          className="object-cover object-[center_25%]"
        />
      </div>
      <div>
        <Image
          src="/images/home/VR.png"
          alt="iPhone 14 Pro"
          width={192}
          height={200}
          priority
          className="object-cover object-[center_25%]"
        />
      </div>
      <div>
        <Image
          src="/images/home/PlayStation.png"
          alt="iPhone 14 Pro"
          width={192}
          height={200}
          priority
          className="object-cover object-[center_25%]"
        />
      </div>
      <div>
        <Image
          src="/images/home/MacBook.png"
          alt="iPhone 14 Pro"
          width={192}
          height={200}
          priority
          className="object-cover object-[center_25%]"
        />
      </div>
    </div>
  );
}
