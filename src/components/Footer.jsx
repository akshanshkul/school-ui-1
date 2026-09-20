import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from './Logo';
import { mainNav, site } from '@/data/site';

const quickLinks = mainNav.filter((item) => item.href !== '/');

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-slate-300">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-slate-300/90">
            A co-educational English medium CBSE school in Kaul, Kaithal, committed to academic excellence,
            strong values and the holistic development of every child.
          </p>
          <p className="script-accent mt-4 text-xl text-gold">{site.motto}</p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="mb-4 text-base font-semibold text-white">
            Quick Links
          </h2>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-base font-semibold text-white">School Info</h2>
          <ul className="space-y-2.5 text-sm">
            <li>CBSE Affiliation No. {site.affiliationCode}</li>
            <li>Classes: Nursery to XII</li>
            <li>Established: {site.established}</li>
            <li>Session: {site.session}</li>
            <li>{site.officeHours}</li>
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="mb-4 text-base font-semibold text-white">Reach Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="transition hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            {[
              { href: site.social.facebook, label: 'Facebook', Icon: Facebook },
              { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
              { href: site.social.youtube, label: 'YouTube', Icon: Youtube },
            ].map(({ href, label, Icon: SocialIcon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold hover:text-navy-800"
              >
                <SocialIcon size={16} />
              </a>
            ))}
          </div>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.affiliation}</p>
        </div>
      </div>
    </footer>
  );
}
