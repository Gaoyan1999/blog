import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function LogoBadge({ src, alt, className = "" }: Props) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center border border-[color:var(--color-gold)]/40 bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.28)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
