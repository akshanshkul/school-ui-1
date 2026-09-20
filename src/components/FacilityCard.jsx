import Icon from './Icon';

// Tailwind needs complete class names, so the tones are written out in full.
const tones = {
  rose: 'bg-rose-100 text-rose-500',
  amber: 'bg-amber-100 text-amber-500',
  green: 'bg-green-100 text-green-600',
  blue: 'bg-sky-100 text-sky-500',
  violet: 'bg-violet-100 text-violet-500',
  orange: 'bg-orange-100 text-orange-500',
  teal: 'bg-teal-100 text-teal-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  pink: 'bg-pink-100 text-pink-500',
};

export default function FacilityCard({ icon, title, description, tone = 'blue' }) {
  return (
    <article className="card flex flex-col items-center p-5 text-center">
      <span className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${tones[tone] ?? tones.blue}`}>
        <Icon name={icon} size={24} strokeWidth={1.9} />
      </span>
      <h3 className="text-[13.5px] font-semibold leading-snug text-navy-700">{title}</h3>
      <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">{description}</p>
    </article>
  );
}
