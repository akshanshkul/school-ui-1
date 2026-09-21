import { CalendarDays, Download, FileCheck2 } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';
import { disclosures, site } from '@/data/site';

export default function MandatoryDisclosure() {
    return (
        <>
            <Seo
                title="Mandatory Disclosure"
                description="News, circulars, school timings and CBSE mandatory public disclosure documents for parents of The Brahmanand Academy, Kaul, Kaithal."
                path="/mandatory-disclosure"
                keywords={['CBSE mandatory disclosure']}
                schema={breadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
                ])}
            />

            <PageHero
                title="Mandatory Disclosure"
                subtitle="Disclosures as required by CBSE for The Brahmanand Academy, Kaul, Kaithal."
                trail={[
                    { label: 'Home', href: '/' },
                    { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
                ]}
            />

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

                    {/* <p className="mt-6 text-center text-xs text-slate-500">
            Replace the placeholder links in <code className="rounded bg-white px-1.5 py-0.5">src/data/site.js</code>{' '}
            with your uploaded PDF files in <code className="rounded bg-white px-1.5 py-0.5">/public</code>.
          </p> */}
                </div>
            </section>

            {/* <section className="section">
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
            </section> */}

            <AdmissionCta />
        </>
    );
}
