import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import Photo from '@/components/Photo';
import { site } from '@/data/site';

export default function Welcome() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="mb-1 text-lg font-medium tracking-[0.18em] text-gold-dark">Welcome to</p>
          <h2 className="text-2xl font-bold md:text-[32px]">{site.name}</h2>

          <div className="prose-school mt-5 space-y-4 text-[15px]">
            <p>
              {site.name} is a co-educational English Medium School in Kaul, Kaithal, Haryana, affiliated to the Central Board of Secondary Education (CBSE), New Delhi. Established in {site.established},
              it is a leading CBSE school in the region, known for academic excellence and a strong focus on
              extra-curricular activities.
            </p>
            <p>
              We believe in nurturing well-rounded individuals who can thrive inside and outside the classroom. Our
              holistic approach focuses on the physical, emotional and social well-being of students, empowering them to
              ask insightful questions, explore new ideas and reach their full potential.
            </p>
          </div>

          <Link to="/about" className="btn-gold mt-7">
            Know More About Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Quote card overlapping the campus photo */}
        <div className="relative">
          <Photo
            src="/images/school-infra.png"
            alt="Corridor inside The Brahmanand Academy campus"
            width={800}
            height={600}
            className="ml-auto h-[260px] w-full rounded-xl shadow-card sm:h-[320px] lg:w-[78%]"
          />

          <figure className="relative -mt-16 max-w-[330px] rounded-xl bg-white p-6 shadow-lift lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
            <Quote size={30} className="mb-3 text-slate-200" aria-hidden="true" />
            <blockquote className="font-serif text-[17px] italic leading-relaxed text-navy-700">
              Education is not preparation for life; education is life itself.
            </blockquote>
            <figcaption className="mt-3 text-sm text-slate-500">&mdash; John Dewey</figcaption>
            <span aria-hidden="true" className="mt-4 block h-[3px] w-12 rounded-full bg-gold" />
          </figure>
        </div>
      </div>
    </section>
  );
}
