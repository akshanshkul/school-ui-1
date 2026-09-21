import { CalendarDays, Download, FileCheck2 } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';
import { disclosures, notices, site } from '@/data/site';

const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

export default function ParentCorner() {
  return (
    <>
      <Seo
        title="Parent Corner"
        description="News, circulars, school timings and CBSE mandatory public disclosure documents for parents of The Brahmanand Academy, Kaul, Kaithal."
        path="/parent-corner"
        keywords={['school circulars Kaul', 'CBSE mandatory disclosure', 'parent notices Kaithal school']}
        schema={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Parent Corner', href: '/parent-corner' },
        ])}
      />

      <PageHero
        title="News & Updates"
        subtitle="Stay updated with the latest news and updates from The Brahmanand Academy, Kaul, Kaithal."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'News & Updates', href: '/news-updates' },
        ]}
      />

      <section id="news" className="section scroll-mt-32">
        <div className="container">
          <SectionHeading eyebrow="Stay Updated" title="News &" highlight="Updates" />

          <ul className="mx-auto max-w-3xl space-y-4">
            {notices.map((notice) => (
              <li key={notice.title} className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <CalendarDays size={18} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-dark">{notice.tag}</p>
                  <h3 className="mt-0.5 text-[15px] font-medium leading-snug text-navy-700">{notice.title}</h3>
                </div>
                <time dateTime={notice.date} className="text-xs text-slate-500">
                  {formatDate(notice.date)}
                </time>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="disclosure" className="section scroll-mt-32 bg-navy-50">
        <div className="container">
          <SectionHeading
            eyebrow="Transparency"
            title="Mandatory Public"
            highlight="Disclosure"
            description={`As required by CBSE, the following documents of ${site.name} (Affiliation Code ${site.affiliationCode}) are available for public reference.`}
          />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disclosures.map((item) => (
              <li key={item.label}>
                <a
                  href={item.file}
                  className="card flex h-full items-start gap-3 text-sm text-slate-600 hover:text-navy-700"
                >
                  <FileCheck2 size={18} className="mt-0.5 shrink-0 text-navy-600" aria-hidden="true" />
                  <span className="flex-1 font-medium leading-snug">{item.label}</span>
                  <Download size={15} className="mt-0.5 shrink-0 text-slate-400" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-center text-xs text-slate-500">
            Replace the placeholder links in <code className="rounded bg-white px-1.5 py-0.5">src/data/site.js</code>{' '}
            with your uploaded PDF files in <code className="rounded bg-white px-1.5 py-0.5">/public</code>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            { title: 'School Timings', text: `${site.officeHours}. Winter and summer schedules are announced by circular.` },
            { title: 'Parent-Teacher Meeting', text: 'PTMs are held after every assessment cycle. Dates are shared through the class teacher.' },
            { title: 'Uniform & Discipline', text: 'Students must attend in the prescribed uniform. House-wise sports uniform is worn on activity days.' },
          ].map((item) => (
            <article key={item.title} className="card">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
