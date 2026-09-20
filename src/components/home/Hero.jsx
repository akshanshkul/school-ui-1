import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '@/components/Icon';
import Photo from '@/components/Photo';
import { heroHighlights, site } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-50">
      <div className="container grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:py-0">
        {/* Copy */}
        <div className="relative z-10 py-4 lg:py-16">
          <p className="eyebrow mb-4 tracking-[0.28em] text-navy-600/70">A Brighter Tomorrow Begins Here</p>

          <h1 className="text-[34px] font-extrabold leading-[1.1] text-navy-700 sm:text-[44px] lg:text-[52px]">
            Nurturing
            <span className="block">Young Minds</span>
            <span className="block text-gold">for a Better World</span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600">
            A premier CBSE school in {site.address.full.replace(' - 136021', '')} committed to academic
            excellence, strong values and holistic development.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/admission" className="btn-gold">
              Admissions Open <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-light border-slate-200">
              Know More
            </Link>
          </div>

          <ul className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            {heroHighlights.map((item) => (
              <li key={item.label} className="text-center sm:text-left">
                <Icon name={item.icon} size={26} strokeWidth={1.6} className="mx-auto text-navy-700 sm:mx-0" />
                <p className="mt-2 text-[11.5px] font-semibold leading-snug text-navy-700">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative lg:h-[560px]">
          <Photo
            src="/images/hero-students.svg"
            alt="Students of The Brahmanand Academy outside the school building in Kaul, Kaithal"
            priority
            width={900}
            height={720}
            className="h-[300px] rounded-2xl shadow-card sm:h-[400px] lg:h-full lg:rounded-none lg:rounded-bl-[3rem]"
          />

          <p className="script-accent absolute bottom-4 right-4 max-w-[190px] text-right text-lg text-navy-700 drop-shadow-sm sm:text-xl lg:bottom-16 lg:text-2xl">
            {site.motto}
            <span aria-hidden="true" className="mt-1 block h-[3px] w-24 rounded-full bg-gold" />
          </p>
        </div>
      </div>
    </section>
  );
}
