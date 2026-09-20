import { CheckCircle2 } from 'lucide-react';
import Photo from '@/components/Photo';
import { site, whyChoose } from '@/data/site';

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.6fr)_minmax(0,1fr)] lg:gap-8">
        <div>
          <h2 className="text-2xl font-bold leading-snug md:text-[30px]">
            <span className="block font-medium text-navy-600">Why Choose</span>
            {site.name}?
          </h2>

          <ul className="mt-6 space-y-3.5">
            {whyChoose.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-slate-600">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-navy-600" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="border-l-2 border-slate-200 py-2 pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-navy-700 md:text-2xl">
            &ldquo;Empowering students today for a brighter tomorrow.&rdquo;
          </p>
          <span aria-hidden="true" className="mt-4 block h-[3px] w-14 rounded-full bg-gold" />
        </blockquote>

        <Photo
          src="/images/campus-building.svg"
          alt="The Brahmanand Academy school building surrounded by greenery"
          width={800}
          height={600}
          className="h-[230px] rounded-xl shadow-card md:h-[280px]"
        />
      </div>
    </section>
  );
}
