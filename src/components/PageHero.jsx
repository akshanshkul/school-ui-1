import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/** Banner + breadcrumb shown at the top of every inner page. */
export default function PageHero({ title, subtitle, trail = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-14 text-white md:py-20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(245,190,46,0.22),transparent_45%)]"
      />
      <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-24 left-10 h-64 w-64 rounded-full border border-white/10" />

      <div className="container relative">
        <h1 className="text-3xl font-bold text-white md:text-[40px]">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">{subtitle}</p>}

        {trail.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/75">
              {trail.map((item, index) => {
                const last = index === trail.length - 1;
                return (
                  <li key={item.href} className="flex items-center gap-1.5">
                    {last ? (
                      <span aria-current="page" className="font-medium text-gold">
                        {item.label}
                      </span>
                    ) : (
                      <>
                        <Link to={item.href} className="transition hover:text-gold">
                          {item.label}
                        </Link>
                        <ChevronRight size={14} aria-hidden="true" className="text-white/40" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
