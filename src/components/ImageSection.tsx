import Image from "next/image";

interface ImageSectionProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  height?: string;
  overlayOpacity?: string;
}

export function ImageSection({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText = "View Portfolio",
  buttonHref = "#",
  height = "h-96",
  overlayOpacity = "bg-black/60",
}: ImageSectionProps) {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Content */}
      <div className="relative z-10 flex items-end md:items-center pb-8 justify-center h-full">
        <div className="text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl opacity-60 md:text-5xl font-semibold mb-1 text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-sm leading-4 md:leading-normal max-w-xs opacity-60 mx-auto md:text-xl mb-2 text-pretty">
              {description}
            </p>
          )}
          <button className="bg-transparent md:text-base text-xs text-white rounded-full border-1 opacity-60 font-semibold px-3 py-[5px] md:px-8 md:py-3">
            <a href={buttonHref}>{buttonText}</a>
          </button>
        </div>
      </div>
    </section>
  );
}
