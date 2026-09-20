import { BookMarked, FlaskConical, Library, Presentation } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';
import { academics } from '@/data/site';

const approach = [
  { Icon: Presentation, title: 'Smart Classrooms', text: 'Concepts taught with audio-visual aids and digital boards.' },
  { Icon: FlaskConical, title: 'Practical Labs', text: 'Physics, Chemistry, Biology, Maths and Computer laboratories.' },
  { Icon: Library, title: 'Library & Reading', text: 'A growing collection of reference books, journals and story books.' },
  { Icon: BookMarked, title: 'Regular Assessment', text: 'Periodic tests, revision cycles and parent-teacher feedback.' },
];

export default function Academics() {
  return (
    <>
      <Seo
        title="Academics"
        description="CBSE curriculum at The Brahmanand Academy from Pre-Primary to Senior Secondary - subjects, teaching approach, laboratories and assessment pattern for classes Nursery to XII."
        path="/academics"
        keywords={['CBSE curriculum Kaithal', 'Nursery to 12th classes', 'science commerce humanities Kaul']}
        schema={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
        ])}
      />

      <PageHero
        title="Academics"
        subtitle="A CBSE curriculum delivered stage by stage, from playful early years to focused board preparation."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Curriculum"
            title="Learning Stages at"
            highlight="Our School"
            description="Each stage builds on the last, with age-appropriate teaching methods and a steadily widening subject base."
          />

          <div className="space-y-5">
            {academics.map((stage, index) => (
              <article
                key={stage.stage}
                className="grid gap-5 rounded-xl border border-slate-100 bg-white p-6 shadow-card md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-50 text-sm font-bold text-navy-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="md:mt-3">
                    <h3 className="text-lg font-semibold">{stage.stage}</h3>
                    <p className="text-sm font-medium text-gold-dark">{stage.classes}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[15px] leading-relaxed text-slate-600">{stage.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stage.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="rounded-full bg-navy-50 px-3 py-1 text-[12.5px] font-medium text-navy-700"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container">
          <SectionHeading eyebrow="Our Approach" title="How We" highlight="Teach" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(({ Icon: ApproachIcon, title, text }) => (
              <article key={title} className="card text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-light text-gold-dark">
                  <ApproachIcon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
