import Link from "next/link";
import Image from "next/image";

const NavLinks = () => {
  return (
    <div className="flex-1 justify-items-end hidden md:block">
      <div className="flex items-center gap-3 md:gap-5 font-semibold">
        <Link href="/" className="text-[#F54748]">Why Pizzateria?</Link>
        <Link href="/offering" className="flex items-center gap-[3px]">
          <span>Offering</span>
          <span>
            <Image src="/assets/arrow-down.svg" alt="arrow" width={15} height={10} />
          </span>
        </Link>
        <Link href="/selection" className="flex items-center gap-[3px]">
          <span>Selection</span>
          <span>
            <Image src="/assets/arrow-down.svg" alt="arrow" width={15} height={10} />
          </span>
        </Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavLinks;
