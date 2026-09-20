import Icon from '@/components/Icon';
import { stats } from '@/data/site';

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-12 text-white">
      {/* Campus photo washed behind the numbers */}
      <img
        src="/images/campus-wide.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy-700/80" />

      <div className="container relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <dl className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:w-auto lg:grid-cols-5 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 text-center lg:px-7 ${index < stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''}`}
            >
              <Icon name={stat.icon} size={26} strokeWidth={1.7} className="mx-auto text-white" />
              <dd className="mt-2.5 text-xl font-bold text-white md:text-[26px]">{stat.value}</dd>
              <dt className="mt-0.5 text-[12px] text-white/75">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <p className="script-accent shrink-0 text-center text-2xl text-white md:text-[30px] lg:text-right">
          Excellence
          <span className="block lg:pl-8">in Education</span>
          <span aria-hidden="true" className="mt-1 ml-auto block h-[3px] w-28 rounded-full bg-gold" />
        </p>
      </div>
    </section>
  );
}
