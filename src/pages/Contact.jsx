import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema, schoolSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import EnquiryForm from '@/components/EnquiryForm';
import { site } from '@/data/site';

const mapQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);

export default function Contact() {
  const details = [
    { Icon: MapPin, title: 'Address', lines: [site.address.full], href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
    { Icon: Phone, title: 'Phone', lines: [site.phone], href: `tel:${site.phoneHref}` },
    { Icon: Mail, title: 'Email', lines: [site.email], href: `mailto:${site.email}` },
    { Icon: Clock, title: 'Office Hours', lines: [site.officeHours] },
  ];

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact The Brahmanand Academy, Kaul, Kaithal, Haryana. Find the school address, phone number, email, office hours and location map, or send an admission enquiry online."
        path="/contact"
        keywords={['school contact number Kaul', 'Brahmanand Academy address', 'CBSE school Kaithal contact']}
        schema={[
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Contact Us', href: '/contact' },
          ]),
          schoolSchema(),
        ]}
      />

      <PageHero
        title="Contact Us"
        subtitle="We are happy to answer your questions about admissions, transport, fees or anything else."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' },
        ]}
      />

      <section className="section">
        <div className="container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.map(({ Icon: DetailIcon, title, lines, href }) => {
              const content = (
                <>
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-600">
                    <DetailIcon size={21} aria-hidden="true" />
                  </span>
                  <h2 className="text-base font-semibold">{title}</h2>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 text-sm leading-relaxed text-slate-600">
                      {line}
                    </p>
                  ))}
                </>
              );

              return (
                <li key={title}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="card block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card h-full">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section bg-navy-50 pt-0">
        <div className="container grid items-start gap-8 pt-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Find Us" title="Our" highlight="Location" as="h2" />
            <div className="overflow-hidden rounded-xl shadow-card">
              <iframe
                title={`Location map of ${site.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Write to Us" title="Send an" highlight="Enquiry" as="h2" />
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
