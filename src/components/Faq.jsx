import { Plus } from 'lucide-react';

/**
 * Accordion built on <details>/<summary>: answers stay in the HTML
 * (so crawlers read them) and it works without any JavaScript.
 */
export default function Faq({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.q}
          open={index === 0}
          className="group rounded-lg border border-slate-100 bg-white px-5 shadow-sm transition open:shadow-card"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-navy-700 marker:hidden">
            {item.q}
            <Plus
              size={18}
              aria-hidden="true"
              className="shrink-0 text-gold-dark transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <p className="pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
