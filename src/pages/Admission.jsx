import { FileText, Phone } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import EnquiryForm from '@/components/EnquiryForm';
import Faq from '@/components/Faq';
import { admissionDocuments, admissionSteps, faqs, site } from '@/data/site';

export default function Admission() {
  return (
    <>
      <Seo
        title="Admission 2024-25"
        description="Admissions are open at The Brahmanand Academy, Kaul, Kaithal for session 2024-25 (Nursery to Class XII). See the admission procedure, required documents and submit an online enquiry."
        path="/admission"
        keywords={['school admission Kaithal 2024-25', 'CBSE admission Kaul', 'online admission enquiry']}
        schema={[
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Admission', href: '/admission' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title={`Admissions Open - Session ${site.session}`}
        subtitle="Seats are available from Nursery to Class XII. Apply early, as admissions are granted on a first-come, first-served basis."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How to Apply" title="Admission" highlight="Procedure" />

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <li key={step.title} className="card">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy-50 pt-0 md:pt-0">
        <div className="container grid gap-8 pt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:pt-20">
          <div>
            <p className="eyebrow mb-2">Checklist</p>
            <h2 className="text-2xl font-bold md:text-[30px]">Documents Required</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Please carry the originals along with one set of photocopies when you visit the school office.
            </p>

            <ul className="mt-6 space-y-3">
              {admissionDocuments.map((document) => (
                <li key={document} className="flex items-start gap-3 rounded-lg bg-white p-3.5 text-sm text-slate-600 shadow-sm">
                  <FileText size={17} className="mt-0.5 shrink-0 text-navy-600" aria-hidden="true" />
                  <span>{document}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-lg border border-gold/40 bg-gold-light p-5">
              <p className="flex items-center gap-2 font-semibold text-navy-700">
                <Phone size={17} aria-hidden="true" /> Admission Helpdesk
              </p>
              <p className="mt-1.5 text-sm text-slate-600">
                Call{' '}
                <a href={`tel:${site.phoneHref}`} className="font-semibold text-navy-700 underline">
                  {site.phone}
                </a>{' '}
                &nbsp;&middot;&nbsp; {site.officeHours}
              </p>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-32">
            <p className="eyebrow mb-2">Online Enquiry</p>
            <h2 className="mb-5 text-2xl font-bold md:text-[30px]">Register Your Interest</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Good to Know" title="Frequently Asked" highlight="Questions" />
          <div className="mx-auto max-w-3xl">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
