import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { site } from '@/data/site';

/** Gold admissions strip used at the bottom of the home page and inner pages. */
export default function AdmissionCta() {
  return (
    <section className="bg-gold-light">
      <div className="container flex flex-col items-center gap-6 py-7 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex items-center gap-4">
          <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
            <path d="M24 44C14 40 8 31 9 20c8 1 14 6 16 13 2-9 8-14 17-15 1 12-6 22-18 26z" fill="#0E4F91" />
            <path d="M24 44c0-11 5-19 14-23 1 11-5 20-14 23z" fill="#F5BE2E" />
          </svg>
          <div>
            <p className="text-lg font-bold uppercase tracking-wide text-navy-700">Admissions Open</p>
            <p className="text-sm text-slate-600">For Session {site.session}</p>
          </div>
        </div>

        <p className="text-[15px] text-slate-700 lg:border-l lg:border-navy-700/15 lg:pl-10">
          Take the first step towards a brighter future.
        </p>

        <Link to="/admission" className="btn-gold shrink-0">
          Register Now <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
