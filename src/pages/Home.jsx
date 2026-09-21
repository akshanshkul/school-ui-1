import Seo from '@/lib/Seo';
import { schoolSchema, websiteSchema } from '@/lib/schema';
import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import FacilitiesStrip from '@/components/home/FacilitiesStrip';
import StatsBand from '@/components/home/StatsBand';
import WhyChoose from '@/components/home/WhyChoose';
import AdmissionCta from '@/components/AdmissionCta';
import StaffSection from '@/components/StaffSection';

export default function Home() {
  return (
    <>
      <Seo
        title="The Brahmanand Academy | Best CBSE School in Kaul, Kaithal, Haryana"
        description="The Brahmanand Academy is a leading co-educational CBSE school in Kaul, Kaithal, Haryana (Affiliation Code 532002), offering classes from Nursery to XII with academic excellence, modern facilities and holistic development."
        path="/"
        keywords={['CBSE school Nursery to 12th', 'English medium school Kaul', 'admission 2024-25 Kaithal']}
        schema={[schoolSchema(), websiteSchema()]}
      />

      <Hero />
      <Welcome />
      <FacilitiesStrip />
      <StatsBand />
      <WhyChoose />
      <StaffSection
        limit={4}
      />
      <AdmissionCta />
    </>
  );
}
