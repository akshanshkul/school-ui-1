import { ShieldCheck } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FacilityCard from '@/components/FacilityCard';
import Photo from '@/components/Photo';
import AdmissionCta from '@/components/AdmissionCta';
import { facilities } from '@/data/site';

const safety = [
  'CCTV coverage across corridors, classrooms and the campus entrance',
  'Trained female attendants on every school bus route',
  'First-aid room with a trained attendant during school hours',
  'Fire safety equipment with periodic drills for students and staff',
  'Visitor entry only through the reception with recorded identification',
];

export default function Facilities() {
  return (
    <>
      <Seo
        title="Facilities"
        description="Facilities at The Brahmanand Academy, Kaul - computer labs, safe transport, nutritious meals, clean drinking water, 24x7 power backup, sports grounds and a secure campus."
        path="/facilities"
        keywords={['school facilities Kaithal', 'school bus Kaul', 'computer lab CBSE school']}
        schema={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' },
        ])}
      />

      <PageHero
        title="School Facilities"
        subtitle="Everything a growing child needs - a safe campus, modern learning spaces and thoughtful daily support."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', href: '/facilities' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Facilities"
            title="School Facilities"
            highlight="We Offer"
            description="From daily essentials to specialised learning spaces, our infrastructure supports both study and play."
          />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Photo
            src="/images/schoo-student.png"
            alt="Safe and well maintained corridors at The Brahmanand Academy"
            width={900}
            height={650}
            className="h-[270px] rounded-xl shadow-card md:h-[360px]"
          />

          <div>
            <p className="eyebrow mb-2">Safety First</p>
            <h2 className="text-2xl font-bold md:text-[30px]">A Secure Campus for Every Child</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Parents trust us with what matters most, and we take that seriously. Safety procedures are reviewed
              regularly and every staff member is trained on them.
            </p>

            <ul className="mt-6 space-y-3">
              {safety.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-slate-600">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-navy-600" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
