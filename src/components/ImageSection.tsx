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
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl mb-8 text-pretty opacity-90">
              {description}
            </p>
          )}
          <button className="bg-transparent text-white rounded-full border-2 font-semibold px-8 py-3">
            <a href={buttonHref}>{buttonText}</a>
          </button>
        </div>
      </div>
    </section>
  );
}
