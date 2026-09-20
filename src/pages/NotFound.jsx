import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Seo from '@/lib/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist on The Brahmanand Academy website."
        path="/404"
        noindex
      />

      <section className="section">
        <div className="container py-16 text-center">
          <p className="text-[72px] font-extrabold leading-none text-navy-50 md:text-[120px]">404</p>
          <h1 className="-mt-6 text-2xl font-bold md:-mt-10 md:text-[32px]">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
            The page you are looking for may have been moved or no longer exists. Let us take you back home.
          </p>
          <Link to="/" className="btn-gold mt-7">
            <Home size={16} aria-hidden="true" /> Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
