import { useState } from 'react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';
import { galleryCategories, galleryItems } from '@/data/site';

export default function Gallery() {
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <Seo
        title="Gallery"
        description="Photo gallery of The Brahmanand Academy, Kaul, Kaithal - campus, smart classrooms, sports day, cultural events, science exhibitions and student activities."
        path="/gallery"
        keywords={['school photos Kaul', 'Brahmanand Academy gallery', 'school events Kaithal']}
        schema={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ])}
      />

      <PageHero
        title="School Gallery"
        subtitle="Moments from our classrooms, grounds and celebrations through the year."
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Life at School" title="Campus &" highlight="Activities" />

          <div className="mb-8 flex flex-wrap justify-center gap-2.5">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
                  active === category
                    ? 'bg-navy-700 text-white'
                    : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <li key={item.title} className="group overflow-hidden rounded-xl shadow-card">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={`${item.title} - The Brahmanand Academy, Kaul`}
                    width={640}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-800/85 to-transparent p-4">
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-[11.5px] text-white/75">{item.category}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {visible.length === 0 && (
            <p className="py-10 text-center text-sm text-slate-500">No photos in this category yet.</p>
          )}
        </div>
      </section>

      <AdmissionCta />
    </>
  );
}
