import {
    Award,
    BookOpen,
    ChevronRight,
    GraduationCap,
    HeartHandshake,
    Users,
} from 'lucide-react';
import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';
import PageHero from '@/components/PageHero';
import StaffSection from '@/components/StaffSection';
import AdmissionCta from '@/components/AdmissionCta';
import { teamHighlights } from '@/data/site';

export default function OurTeam() {
    return (
        <>
            <Seo
                title="Our Team"
                description="Meet the dedicated teaching, administrative and support staff of The Brahmanand Academy, Kaul, Kaithal."
                path="/our-team"
                keywords={[
                    'school teachers Kaul',
                    'The Brahmanand Academy staff',
                    'school faculty Kaithal',
                    'teachers in Kaul',
                ]}
                schema={breadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Our Team', href: '/our-team' },
                ])}
            />

            <PageHero
                title="Our Team"
                subtitle="Meet the dedicated educators and staff who make learning, growth and student care possible every day."
                trail={[
                    { label: 'Home', href: '/' },
                    { label: 'Our Team', href: '/our-team' },
                ]}
            />

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                            Our People
                        </span>

                        <h2 className="mt-2 text-2xl font-semibold text-navy-700 sm:text-3xl">
                            The People Behind
                            <span className="text-gold-dark"> Every Student's Journey</span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                            Our team brings together experienced educators, caring primary
                            teachers, subject specialists, coaches and dedicated support
                            staff who work together to create a positive school environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Highlights */}
            <section className="section bg-navy-50">
                <div className="container">
                    <div className="grid gap-5 sm:grid-cols-3">
                        {teamHighlights.map((item) => {
                            const Icon =
                                item.icon === 'graduation'
                                    ? GraduationCap
                                    : item.icon === 'book'
                                        ? BookOpen
                                        : HeartHandshake;

                            const iconBackground =
                                item.color === 'gold'
                                    ? 'bg-gold-500'
                                    : 'bg-navy-700';

                            return (
                                <div
                                    key={`${item.value}-${item.title}`}
                                    className="card text-center"
                                >
                                    <span
                                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${iconBackground} text-white`}
                                    >
                                        <Icon size={22} aria-hidden="true" />
                                    </span>

                                    <h3 className="mt-4 text-2xl font-bold text-navy-700">
                                        {item.value}
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-600">
                                        {item.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Complete Staff Directory */}
            <StaffSection
                showHeading
                showViewAll={false}
            />

            {/* Our Philosophy */}
            <section className="section bg-slate-50">
                <div className="container">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                                Our Commitment
                            </span>

                            <h2 className="mt-2 text-2xl font-semibold text-navy-700 sm:text-3xl">
                                Teaching With
                                <span className="text-gold-dark"> Purpose & Care</span>
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                Education goes beyond textbooks and examinations. Our teachers
                                strive to understand every learner, encourage curiosity and
                                create opportunities for students to develop confidence,
                                discipline and responsibility.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                From the classroom to sports and co-curricular activities, our
                                team works together to support the academic and personal growth
                                of every child.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-navy-700 p-7 text-white shadow-xl sm:p-9">
                            <Award
                                size={30}
                                className="text-gold-300"
                                aria-hidden="true"
                            />

                            <h3 className="mt-5 text-xl font-semibold">
                                A Community of Educators
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-navy-100">
                                Our school community is built on collaboration between
                                teachers, students and parents. Together, we work towards
                                creating a safe, respectful and inspiring environment for
                                learning.
                            </p>

                            <a
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-700 transition hover:bg-gold-50"
                            >
                                Get in Touch
                                <ChevronRight size={16} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="rounded-2xl bg-gold-50 px-6 py-10 text-center sm:px-10">
                        <Users
                            size={28}
                            className="mx-auto text-gold-dark"
                            aria-hidden="true"
                        />

                        <h2 className="mt-4 text-2xl font-semibold text-navy-700">
                            Learn More About Our School
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            Discover our academic programmes, campus, activities and the
                            learning environment we create for our students.
                        </p>

                        <a
                            href="/about"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
                        >
                            About The School
                            <ChevronRight size={16} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>

            <AdmissionCta />
        </>
    );
}