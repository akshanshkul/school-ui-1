import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { site } from '@/data/site';

/** Scrolls to the top on navigation, and to the #hash target when one is present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <ScrollManager />
      <Header />

      <main id="main">
        <Outlet />
      </main>

      <Footer />

      <a
        href={`tel:${site.phoneHref}`}
        aria-label={`Call ${site.name}`}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full
                   bg-gold text-navy-800 shadow-lift transition hover:bg-gold-dark md:hidden"
      >
        <Phone size={20} />
      </a>
    </>
  );
}
