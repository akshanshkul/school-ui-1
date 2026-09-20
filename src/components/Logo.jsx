import { Link } from 'react-router-dom';
import { site } from '@/data/site';

/** School mark + wordmark, used in the header and footer. */
export default function Logo({ variant = 'dark', compact = false }) {
  const light = variant === 'light';

  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} - home`}>
      <svg
        width={compact ? 38 : 46}
        height={compact ? 38 : 46}
        viewBox="0 0 48 48"
        className="shrink-0"
        role="img"
        aria-label={`${site.name} logo`}
      >
        <path d="M24 44C14 40 8 31 9 20c8 1 14 6 16 13 2-9 8-14 17-15 1 12-6 22-18 26z" fill="#0E4F91" />
        <path d="M24 44c0-11 5-19 14-23 1 11-5 20-14 23z" fill="#F5BE2E" />
        <path d="M24 44C14 40 8 31 9 20c7 5 12 13 15 24z" fill="#3AA17E" opacity="0.9" />
      </svg>

      <span className="leading-tight">
        <span
          className={`block text-[14px] font-bold uppercase tracking-wide md:text-[16px] ${
            light ? 'text-white' : 'text-navy-700'
          }`}
        >
          The Brahmanand
          <span className="block">Academy</span>
        </span>
        <span
          className={`block text-[8.5px] font-semibold uppercase tracking-[0.16em] ${
            light ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          Kaul, Kaithal, Haryana
        </span>
        <span className={`block text-[8.5px] tracking-[0.12em] ${light ? 'text-gold' : 'text-slate-400'}`}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
