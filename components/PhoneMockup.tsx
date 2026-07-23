import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: PhoneMockupProps) {
  return (
    <figure className={`phone-wrap ${className}`}>
      <div className="phone-shot">
        <Image
          src={src}
          alt={alt}
          width={1206}
          height={2622}
          sizes="(max-width: 640px) 72vw, (max-width: 960px) 38vw, 300px"
          priority={priority}
          quality={90}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
