import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FacilityCard from '@/components/FacilityCard';
import { facilities } from '@/data/site';

export default function FacilitiesStrip() {
  return (
    <section className="section bg-navy-50">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-2">Our Facilities</p>
          <h2 className="text-2xl font-bold uppercase tracking-wide md:text-[30px]">School Facilities We Offer!</h2>
        </div>

        {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9"> */}
          <div className="mx-auto grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {facilities.slice(0, 6).map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/facilities" className="btn-outline">
            Explore All Facilities <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
