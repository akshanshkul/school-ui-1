/** Eyebrow + heading block used at the top of most sections. */
export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center', as: Tag = 'h2' }) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} mb-10`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <Tag className="text-2xl font-bold leading-snug md:text-[32px]">
        {title} {highlight && <span className="text-gold-dark">{highlight}</span>}
      </Tag>
      {description && <p className="mt-4 leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}
