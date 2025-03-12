import Button from "@/components/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-black hero-bg min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="max-w-6xl mx-auto px-10 flex items-center justify-center">
        <div className="text-center text-white z-10 py-36 space-y-10">
          <div className="flex items-center gap-2 justify-center bg-[#FDD6D6] text-[#F54748] px-6 py-3 rounded-full w-max mx-auto">
            <p>Beyond Speedy</p>
            <Image
              src="/assets/pizza-slice.svg"
              alt="hero"
              width={30}
              height={50}
            />
          </div>
          <h1 className="font-bold text-4xl md:text-[75px] leading-tight">
            Ensure Your <span className="text-[#F54748]">Food</span> is
            Delivered with Speed
          </h1>
          <p className="md:max-w-[650px] mx-auto md:text-[20px]">
            Our mission is to satisfy your appetite with delectable dishes,
            delivered swiftly and at no extra cost
          </p>
          <div className="flex items-center justify-center">
            <Button name="Get Started" icon={null} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
