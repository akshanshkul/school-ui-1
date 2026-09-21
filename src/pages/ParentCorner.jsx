import {
  BookOpen,
  ChevronRight,
  HelpCircle,
  Phone,
} from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';
import { resources, importantInfo, parentFaqs } from '@/data/site';

export default function ParentCorner() {
  return (
    <>
      <Seo
        title="Parent Corner"
        description="Useful information, academic resources, school guidelines and support for parents of The Brahmanand Academy, Kaul, Kaithal."
        path="/parent-corner"
        keywords={[
          'parent corner school Kaul',
          'school parent resources Kaithal',
          'The Brahmanand Academy parents',
          'school guidelines Kaul',
        ]}
        schema={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Parent Corner', href: '/parent-corner' },
        ])}
      />

      <PageHero
        title="Parent Corner"
        subtitle="Everything parents need to stay informed, connected and involved in their child's school journey."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Parent Corner', href: '/parent-corner' },
        ]}
      />

      {/* Welcome */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              For Our Parents
            </span>

            <h2 className="mt-2 text-2xl font-semibold text-navy-700 sm:text-3xl">
              A Helpful Space for Every Parent
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The Parent Corner brings together useful academic information,
              school routines, parent guidelines and resources to help families
              stay connected with school life.
            </p>
          </div>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="section bg-navy-50">
        <div className="container">
          <SectionHeading
            eyebrow="Parent Resources"
            title="Everything You"
            highlight="Need"
            description="Explore useful resources and information designed to make communication and school life easier for parents."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group card flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700 group-hover:bg-navy-700 group-hover:text-white">
                      <Icon size={20} aria-hidden="true" />
                    </span>

                    <ChevronRight
                      size={18}
                      className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-navy-600"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-navy-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Good to Know"
            title="Important"
            highlight="Information"
            description="A few everyday guidelines that help students and parents have a smooth school experience."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {importantInfo.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-50 text-gold-dark">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-base font-semibold text-navy-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section id="academics" className="section bg-slate-50 scroll-mt-32">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                Academic Support
              </span>

              <h2 className="mt-2 text-2xl font-semibold text-navy-700 sm:text-3xl">
                Supporting Your Child's
                <span className="text-gold-dark"> Learning Journey</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Parents play an important role in helping children develop
                positive learning habits. Regular communication, attendance,
                encouragement and a comfortable study environment at home can
                make a meaningful difference.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Encourage regular study and reading habits.',
                  'Check school communications regularly.',
                  'Help children maintain a balanced daily routine.',
                  'Stay connected with teachers regarding academic progress.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-700 text-white">
                      ✓
                    </span>
                    <p className="text-sm text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-navy-700 p-7 text-white shadow-xl sm:p-9">
              <BookOpen size={30} className="text-gold-300" aria-hidden="true" />

              <h3 className="mt-5 text-xl font-semibold">
                Stay Connected With School
              </h3>

              <p className="mt-3 text-sm leading-7 text-navy-100">
                Your involvement helps create a strong connection between home
                and school. Please keep your contact details updated and stay
                informed about important school communications.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-700 transition hover:bg-gold-50"
              >
                Contact School
                <ChevronRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Guidelines */}
      <section id="wellbeing" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Parent Guidelines"
            title="Building a Positive"
            highlight="School Community"
            description="Simple practices that help children, parents and teachers work together effectively."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Be Punctual',
                text: 'Ensure your child arrives at school on time and follows the daily routine.',
              },
              {
                title: 'Stay Informed',
                text: 'Read school communications and keep track of important dates.',
              },
              {
                title: 'Encourage Respect',
                text: 'Promote respectful behaviour towards teachers, staff and fellow students.',
              },
              {
                title: 'Communicate Early',
                text: 'Share concerns with the school at the earliest opportunity.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-navy-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-navy-50">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Parent"
            highlight="FAQs"
            description="Quick answers to some common questions from parents."
          />

          <div className="mx-auto max-w-3xl space-y-3">
            {parentFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-semibold text-navy-700">
                  <HelpCircle
                    size={18}
                    className="shrink-0 text-gold-dark"
                    aria-hidden="true"
                  />

                  <span className="flex-1">{faq.question}</span>

                  <ChevronRight
                    size={17}
                    className="shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>

                <p className="mt-4 pl-7 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="rounded-2xl bg-gold-50 px-6 py-10 text-center sm:px-10">
            <Phone
              size={28}
              className="mx-auto text-gold-dark"
              aria-hidden="true"
            />

            <h2 className="mt-4 text-2xl font-semibold text-navy-700">
              Need Help?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              For questions regarding academics, attendance, school routines or
              other parent-related concerns, please get in touch with the school
              office.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Contact School
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
