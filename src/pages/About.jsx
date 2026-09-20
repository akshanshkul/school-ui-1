import { Eye, HeartHandshake, Target } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';
import { site, whyChoose } from '@/data/site';

const pillars = [
  {
    Icon: Target,
    title: 'Our Mission',
    text: 'To provide quality, value-based education that develops confident, compassionate and capable learners who contribute meaningfully to society.',
  },
  {
    Icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted school in the Kaithal region, known for academic rigour, character building and an environment where every child belongs.',
  },
  {
    Icon: HeartHandshake,
    title: 'Our Values',
    text: 'Discipline, knowledge, character and respect - the four pillars that shape every classroom, activity and interaction at the academy.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about The Brahmanand Academy - a CBSE affiliated co-educational school established in 2019 in Kaul, Kaithal, Haryana, with a mission of academic excellence and holistic development."
        path="/about"
        keywords={['about Brahmanand Academy', 'CBSE school history Kaul', 'school mission vision Kaithal']}
        schema={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ])}
      />

      <PageHero
        title="About Our School"
        subtitle={`Established in ${site.established}, ${site.name} has grown into one of the most trusted CBSE schools in Kaul, Kaithal.`}
        trail={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Photo
            src="/images/campus-building.svg"
            alt="Front view of The Brahmanand Academy campus in Kaul, Kaithal"
            width={900}
            height={650}
            className="h-[280px] rounded-xl shadow-card md:h-[380px]"
          />

          <div>
            <p className="eyebrow mb-2">Who We Are</p>
            <h2 className="text-2xl font-bold md:text-[30px]">A Place to Learn, Grow and Lead</h2>

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>
                {site.name} is a co-educational English medium school affiliated to the Central Board of Secondary
                Education (CBSE), New Delhi, under affiliation code {site.affiliationCode}, offering classes from
                Nursery to XII.
              </p>
              <p>
                Since {site.established} the school has built a reputation for academic excellence combined with a
                strong co-curricular programme. Spacious classrooms, well-equipped laboratories, a resourceful library
                and safe transport allow every child to learn comfortably and confidently.
              </p>
              <p>
                Our teachers are qualified, experienced and continuously trained, and our small class sizes let them
                give each student personal attention - the reason parents across Kaithal district trust us with their
                children.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision &"
            highlight="Values"
            description="Everything we do at the academy is guided by three simple commitments."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ Icon: PillarIcon, title, text }) => (
              <article key={title} className="card text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-100 text-navy-600">
                  <PillarIcon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-2">The Difference</p>
            <h2 className="text-2xl font-bold md:text-[30px]">Why Parents Choose Us</h2>
            <ul className="mt-6 space-y-3.5">
              {whyChoose.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-slate-600">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="rounded-xl bg-navy-50 p-8">
            <blockquote className="font-serif text-xl italic leading-relaxed text-navy-700">
              &ldquo;Discipline, knowledge, character - a brighter tomorrow.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-slate-500">The academy creed</figcaption>
            <p className="script-accent mt-6 text-2xl text-navy-600">{site.motto}</p>
          </figure>
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
