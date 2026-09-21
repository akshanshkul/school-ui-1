import { BookOpen, ChevronRight, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { staff } from '@/data/site';

const typeLabels = {
  management: 'Management',
  academic: 'Academic',
  external: 'External',
};

const typeStyles = {
  management: 'bg-gold-50 text-gold-dark',
  academic: 'bg-navy-50 text-navy-700',
  external: 'bg-emerald-50 text-emerald-700',
};

const getInitials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function StaffCard({ member }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 to-slate-100">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-navy-700 text-2xl font-semibold text-white shadow-md">
            {getInitials(member.name)}
          </div>
        )}

        <div
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm ${
            typeStyles[member.type]
          }`}
        >
          {typeLabels[member.type]}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-navy-700">
          {member.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-gold-dark">
          {member.role}
        </p>

        {member.subject && (
          <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
            <BookOpen
              size={15}
              className="shrink-0 text-slate-400"
              aria-hidden="true"
            />

            <span className="text-xs text-slate-500">
              {member.subject}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function StaffSection({
  limit,
  type = 'all',
  showHeading = true,
  showViewAll = true,
  className = '',
}) {
  const filteredStaff =
    type === 'all'
      ? staff
      : staff.filter((member) => member.type === type);

  const visibleStaff = limit
    ? filteredStaff.slice(0, limit)
    : filteredStaff;

  const isLimited = limit && filteredStaff.length > limit;

  return (
    <section className={`section ${className}`}>
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Faculty & Staff"
            title="Meet Our"
            highlight="Team"
            description="Dedicated educators, professionals and support staff working together for our students."
          />
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleStaff.map((member) => (
            <StaffCard
              key={`${member.name}-${member.role}`}
              member={member}
            />
          ))}
        </div>

        {isLimited && (
          <div className="mt-10 text-center">
            <a
              href="/our-team"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              <Users size={17} aria-hidden="true" />
              View All Faculty & Staff
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
