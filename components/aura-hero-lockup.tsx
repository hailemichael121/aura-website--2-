import Image from "next/image";

export function AuraHeroLockup() {
  return (
    <>
      <Image
        src="/images/aura-logo.webp"
        alt=""
        width={112}
        height={112}
        className="h-20 w-20 rounded-full object-cover ring-2 ring-white/90 sm:h-24 sm:w-24"
        priority
      />
      <div className="text-center sm:text-left">
        <p className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          AURA
        </p>
        <p className="mt-1 max-w-md text-sm font-medium leading-snug text-white/95 sm:text-base">
          Alliance for Understanding Recovery &amp; Awareness
        </p>
      </div>
    </>
  );
}
