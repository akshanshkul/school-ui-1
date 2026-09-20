/**
 * Image wrapper with sensible SEO / performance defaults.
 *
 * Replace the placeholder files in /public/images with real school photos
 * (keep the same file names, or update the paths in src/data/site.js).
 */
export default function Photo({
  src,
  alt,
  className = '',
  imgClassName = '',
  width = 1200,
  height = 800,
  priority = false,
}) {
  return (
    <figure className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : undefined}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </figure>
  );
}
