import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Menu, Search, X, Youtube } from 'lucide-react';
import Logo from './Logo';
import { mainNav, site, topNav } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-700 text-white lg:block">
        <div className="container flex h-10 items-center justify-between text-[12px]">
          <p className="font-medium tracking-wide">{site.affiliation}</p>

          <div className="flex items-center gap-5">
            <nav aria-label="Secondary">
              <ul className="flex items-center gap-4">
                {topNav.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <Link to={item.href} className="transition hover:text-gold">
                      {item.label}
                    </Link>
                    {index < topNav.length - 1 && <span aria-hidden="true" className="text-white/30">|</span>}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-gold">
                <Facebook size={15} />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-gold">
                <Instagram size={15} />
              </a>
              <a href={site.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer" className="hover:text-gold">
                <Youtube size={15} />
              </a>
            </div>

            <Link
              to="/admission"
              className="rounded bg-gold px-4 py-1.5 font-semibold text-navy-800 transition hover:bg-gold-dark"
            >
              Admission Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container flex h-[72px] items-center justify-between gap-4 md:h-[84px]">
          <Logo />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-7 text-[14px] font-medium">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `relative py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px]
                       after:bg-gold after:transition-all ${
                         isActive
                           ? 'text-navy-700 after:w-full'
                           : 'text-slate-600 after:w-0 hover:text-navy-700 hover:after:w-full'
                       }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search the website"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-navy-700 transition hover:bg-navy-50 xl:flex"
            >
              <Search size={18} />
            </button>

            <Link to="/admission" className="btn-gold hidden px-5 py-2.5 text-[13px] md:inline-flex xl:hidden">
              Admission Enquiry
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy-700 xl:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white shadow-lg transition-[max-height] duration-300 xl:hidden ${
          open ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <nav aria-label="Mobile" className="container py-3">
          <ul className="divide-y divide-slate-100">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-3 text-[15px] font-medium ${isActive ? 'text-navy-700' : 'text-slate-600'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 py-4">
            <Link to="/admission" className="btn-gold flex-1 py-2.5 text-[13px]">
              Admission Enquiry
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-outline flex-1 py-2.5 text-[13px]">
              Call School
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
