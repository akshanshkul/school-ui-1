import {
    Download,
    ExternalLink,
    FileCheck2,
    Info,
    School,
    Users,
} from 'lucide-react';

import Seo from '@/lib/Seo';
import { breadcrumbSchema } from '@/lib/schema';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCta from '@/components/AdmissionCta';

import {
    site,
    staff,
    mandatoryDisclosure,
} from '@/data/site';

function DocumentTable({ title, documents }) {
    return (
        <div className="card overflow-hidden">
            <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
                <h3 className="text-lg font-semibold text-navy-900">
                    {title}
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="w-16 px-5 py-3 font-semibold text-slate-700">
                                S.No.
                            </th>

                            <th className="px-5 py-3 font-semibold text-slate-700">
                                Documents / Information
                            </th>

                            <th className="w-40 px-5 py-3 text-center font-semibold text-slate-700">
                                Upload Document
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {documents.map((item, index) => (
                            <tr
                                key={item.label}
                                className="transition hover:bg-slate-50"
                            >
                                <td className="px-5 py-4 text-slate-500">
                                    {index + 1}
                                </td>

                                <td className="px-5 py-4 font-medium text-slate-700">
                                    {item.label}
                                </td>

                                <td className="px-5 py-4 text-center">
                                    {item.file ? (
                                        <a
                                            href={item.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-navy-50 px-3 py-2 text-xs font-semibold text-navy-700 transition hover:bg-navy-100"
                                        >
                                            <Download size={15} />
                                            View Document
                                        </a>
                                    ) : (
                                        <span className="text-xs text-slate-400">
                                            Not Uploaded
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ResultTable({ title, results }) {
    return (
        <div className="card overflow-hidden">
            <div className="border-b border-slate-200 px-5 py-4">
                <h3 className="text-lg font-semibold text-navy-900">
                    {title}
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left text-sm">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-5 py-3 font-semibold text-slate-700">
                                Year
                            </th>
                            <th className="px-5 py-3 font-semibold text-slate-700">
                                Registered Students
                            </th>
                            <th className="px-5 py-3 font-semibold text-slate-700">
                                Students Passed
                            </th>
                            <th className="px-5 py-3 font-semibold text-slate-700">
                                Pass Percentage
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {results.map((item) => (
                            <tr key={item.year}>
                                <td className="px-5 py-4 font-semibold text-slate-700">
                                    {item.year}
                                </td>

                                <td className="px-5 py-4 text-slate-600">
                                    {item.registered}
                                </td>

                                <td className="px-5 py-4 text-slate-600">
                                    {item.passed}
                                </td>

                                <td className="px-5 py-4 font-semibold text-green-700">
                                    {item.percentage}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function MandatoryDisclosure() {
    const {
        documents,
        academicDocuments,
        results,
        staffSummary,
        infrastructure,
        annualReport,
        inspectionVideo,
    } = mandatoryDisclosure;

    const academicStaff = staff.filter(
        (member) => member.type === 'academic'
    );

    return (
        <>
            <Seo
                title="Mandatory Disclosure"
                description="CBSE mandatory public disclosure information and documents for The Brahmanand Academy, Kaul, Kaithal."
                path="/mandatory-disclosure"
                keywords={['CBSE mandatory disclosure']}
                schema={breadcrumbSchema([
                    {
                        label: 'Home',
                        href: '/',
                    },
                    {
                        label: 'Mandatory Disclosure',
                        href: '/mandatory-disclosure',
                    },
                ])}
            />

            <PageHero
                title="Mandatory Disclosure"
                subtitle="Disclosures as required by CBSE for The Brahmanand Academy, Kaul, Kaithal."
                trail={[
                    {
                        label: 'Home',
                        href: '/',
                    },
                    {
                        label: 'Mandatory Disclosure',
                        href: '/mandatory-disclosure',
                    },
                ]}
            />

            {/* Introduction */}
            <section className="section bg-navy-50">
                <div className="container">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                                <Info size={21} />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-navy-900">
                                    Mandatory Public Disclosure
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    As required by CBSE, the following
                                    information and documents of{' '}
                                    <strong>{site.name}</strong> are available
                                    for public reference.
                                </p>

                                <p className="mt-3 text-sm font-medium text-slate-700">
                                    Affiliation Code:{' '}
                                    {site.affiliationCode}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Information */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        eyebrow="School Information"
                        title="General"
                        highlight="Information"
                        description="Basic information about the school."
                    />

                    <div className="card overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px] text-left text-sm">
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="w-16 px-5 py-4 text-slate-500">
                                            1
                                        </td>
                                        <td className="w-1/2 px-5 py-4 font-medium text-slate-700">
                                            Name of the School
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">
                                            {site.name}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-5 py-4 text-slate-500">
                                            2
                                        </td>
                                        <td className="px-5 py-4 font-medium text-slate-700">
                                            Affiliation No.
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">
                                            {site.affiliationCode}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-5 py-4 text-slate-500">
                                            3
                                        </td>
                                        <td className="px-5 py-4 font-medium text-slate-700">
                                            Complete Address with PIN Code
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">
                                            {site.address.full}
                                        </td>
                                    </tr>

                                    {site.principal && (
                                        <tr>
                                            <td className="px-5 py-4 text-slate-500">
                                                4
                                            </td>
                                            <td className="px-5 py-4 font-medium text-slate-700">
                                                Principal
                                            </td>
                                            <td className="px-5 py-4 text-slate-600">
                                                {site.principal}
                                            </td>
                                        </tr>
                                    )}

                                    <tr>
                                        <td className="px-5 py-4 text-slate-500">
                                            5
                                        </td>
                                        <td className="px-5 py-4 font-medium text-slate-700">
                                            School Email ID
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">
                                            {site.email}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-5 py-4 text-slate-500">
                                            6
                                        </td>
                                        <td className="px-5 py-4 font-medium text-slate-700">
                                            Contact Details
                                        </td>
                                        <td className="px-5 py-4 text-slate-600">
                                            {site.phone}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents */}
            <section className="section bg-slate-50">
                <div className="container">
                    <SectionHeading
                        eyebrow="Transparency"
                        title="Documents &"
                        highlight="Information"
                        description="Important certificates and documents related to the school's affiliation and statutory requirements."
                    />

                    <div className="space-y-6">
                        <DocumentTable
                            title="Documents and Information"
                            documents={documents}
                        />

                        <DocumentTable
                            title="Result and Academics"
                            documents={academicDocuments}
                        />
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        eyebrow="Academic Performance"
                        title="Board Examination"
                        highlight="Results"
                        description="Last three-year board examination results."
                    />

                    <div className="grid gap-6 lg:grid-cols-2">
                        <ResultTable
                            title="Result Class: X"
                            results={results.classX}
                        />

                        <ResultTable
                            title="Result Class: XII"
                            results={results.classXII}
                        />
                    </div>
                </div>
            </section>

            {/* Staff */}
            <section className="section bg-slate-50">
                <div className="container">
                    <SectionHeading
                        eyebrow="Faculty"
                        title="Staff"
                        highlight="Information"
                        description="Teaching staff strength and the teaching staff currently listed by the school."
                    />

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="card overflow-hidden lg:col-span-2">
                            <div className="border-b border-slate-200 px-5 py-4">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-navy-900">
                                    <Users size={19} />
                                    Teaching Staff Strength
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3">
                                <div className="p-5">
                                    <p className="text-2xl font-bold text-navy-800">
                                        {staffSummary.totalTeachers}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Total Teachers
                                    </p>
                                </div>

                                {staffSummary.categories.map((item) => (
                                    <div
                                        key={item.label}
                                        className="p-5"
                                    >
                                        <p className="text-2xl font-bold text-navy-800">
                                            {item.count}
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card p-6">
                            <h3 className="text-lg font-semibold text-navy-900">
                                Teacher Section Ratio
                            </h3>

                            <div className="mt-4 space-y-3">
                                {staffSummary.sectionRatio.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                                    >
                                        <span className="text-sm text-slate-600">
                                            {item.label}
                                        </span>

                                        <span className="font-semibold text-navy-700">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 border-t border-slate-100 pt-4">
                                <p className="text-xs uppercase tracking-wide text-slate-400">
                                    Special Educator
                                </p>

                                <p className="mt-1 text-sm text-slate-600">
                                    {staffSummary.specialEducator ||
                                        'Not Available'}
                                </p>
                            </div>

                            <div className="mt-4 border-t border-slate-100 pt-4">
                                <p className="text-xs uppercase tracking-wide text-slate-400">
                                    Counsellor & Wellness Teacher
                                </p>

                                <p className="mt-1 text-sm text-slate-600">
                                    {staffSummary.counsellorWellnessTeacher ||
                                        'Not Available'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Existing staff data */}
                    {academicStaff.length > 0 && (
                        <div className="mt-6 card overflow-hidden">
                            <div className="border-b border-slate-200 px-5 py-4">
                                <h3 className="text-lg font-semibold text-navy-900">
                                    Teaching Staff
                                </h3>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[650px] text-left text-sm">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-5 py-3 font-semibold text-slate-700">
                                                S.No.
                                            </th>
                                            <th className="px-5 py-3 font-semibold text-slate-700">
                                                Name
                                            </th>
                                            <th className="px-5 py-3 font-semibold text-slate-700">
                                                Designation
                                            </th>
                                            <th className="px-5 py-3 font-semibold text-slate-700">
                                                Subject
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-slate-100">
                                        {academicStaff.map(
                                            (member, index) => (
                                                <tr key={`${member.name}-${index}`}>
                                                    <td className="px-5 py-4 text-slate-500">
                                                        {index + 1}
                                                    </td>

                                                    <td className="px-5 py-4 font-medium text-slate-700">
                                                        {member.name}
                                                    </td>

                                                    <td className="px-5 py-4 text-slate-600">
                                                        {member.role}
                                                    </td>

                                                    <td className="px-5 py-4 text-slate-600">
                                                        {member.subject}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Infrastructure */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        eyebrow="Campus"
                        title="School"
                        highlight="Infrastructure"
                        description="Infrastructure information as provided for the school's mandatory disclosure."
                    />

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="card p-5">
                            <School
                                size={24}
                                className="text-navy-600"
                            />

                            <p className="mt-4 text-2xl font-bold text-navy-900">
                                {infrastructure.campusArea}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Total Campus Area
                            </p>
                        </div>

                        <div className="card p-5">
                            <p className="text-2xl font-bold text-navy-900">
                                {infrastructure.rooms.total}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Total Rooms
                            </p>

                            <div className="mt-4 space-y-1 text-xs text-slate-500">
                                <p>
                                    Less than 400 Sqft:{' '}
                                    {infrastructure.rooms.below400Sqft}
                                </p>

                                <p>
                                    400-500 Sqft:{' '}
                                    {infrastructure.rooms.between400And500Sqft}
                                </p>

                                <p>
                                    More than 500 Sqft:{' '}
                                    {infrastructure.rooms.above500Sqft}
                                </p>
                            </div>
                        </div>

                        <div className="card p-5">
                            <p className="text-2xl font-bold text-navy-900">
                                {infrastructure.laboratories.length}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Laboratories
                            </p>

                            <p className="mt-4 text-sm font-semibold text-green-700">
                                Internet Facility:{' '}
                                {infrastructure.internetFacility
                                    ? 'Yes'
                                    : 'No'}
                            </p>
                        </div>

                        <div className="card p-5">
                            <p className="text-2xl font-bold text-navy-900">
                                {infrastructure.toilets.girls +
                                    infrastructure.toilets.boys}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Student Toilets
                            </p>

                            <div className="mt-4 space-y-1 text-xs text-slate-500">
                                <p>
                                    Girls:{' '}
                                    {infrastructure.toilets.girls}
                                </p>

                                <p>
                                    Boys:{' '}
                                    {infrastructure.toilets.boys}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Laboratories */}
                    <div className="mt-6 card overflow-hidden">
                        <div className="border-b border-slate-200 px-5 py-4">
                            <h3 className="text-lg font-semibold text-navy-900">
                                Laboratories
                            </h3>
                        </div>

                        <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-5">
                            {infrastructure.laboratories.map((lab) => (
                                <div
                                    key={lab.name}
                                    className="bg-white p-5"
                                >
                                    <p className="font-semibold text-slate-700">
                                        {lab.name}
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {lab.area}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Toilets */}
                    <div className="mt-6 card overflow-hidden">
                        <div className="border-b border-slate-200 px-5 py-4">
                            <h3 className="text-lg font-semibold text-navy-900">
                                Toilet Facilities
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4">
                            <div className="p-5">
                                <p className="text-xl font-bold text-navy-800">
                                    {infrastructure.toilets.girls}
                                </p>
                                <p className="text-sm text-slate-500">
                                    Girls Toilets
                                </p>
                            </div>

                            <div className="p-5">
                                <p className="text-xl font-bold text-navy-800">
                                    {infrastructure.toilets.boys}
                                </p>
                                <p className="text-sm text-slate-500">
                                    Boys Toilets
                                </p>
                            </div>

                            <div className="p-5">
                                <p className="text-xl font-bold text-navy-800">
                                    {infrastructure.toilets.femaleStaff}
                                </p>
                                <p className="text-sm text-slate-500">
                                    Female Staff Toilets
                                </p>
                            </div>

                            <div className="p-5">
                                <p className="text-xl font-bold text-navy-800">
                                    {infrastructure.toilets.maleStaff}
                                </p>
                                <p className="text-sm text-slate-500">
                                    Male Staff Toilets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Annual Report / Inspection */}
            <section className="section bg-slate-50">
                <div className="container">
                    <SectionHeading
                        eyebrow="Additional Information"
                        title="Annual Report &"
                        highlight="Inspection"
                        description="Additional information required as part of the school's public disclosure."
                    />

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="card p-6">
                            <FileCheck2
                                size={25}
                                className="text-navy-600"
                            />

                            <h3 className="mt-4 text-lg font-semibold text-navy-900">
                                Annual Report
                            </h3>

                            {annualReport ? (
                                <a
                                    href={annualReport}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
                                >
                                    View Annual Report
                                    <ExternalLink size={15} />
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-slate-500">
                                    Annual report will be uploaded here.
                                </p>
                            )}
                        </div>

                        <div className="card p-6">
                            <ExternalLink
                                size={25}
                                className="text-navy-600"
                            />

                            <h3 className="mt-4 text-lg font-semibold text-navy-900">
                                School Inspection Video
                            </h3>

                            {inspectionVideo ? (
                                <a
                                    href={inspectionVideo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
                                >
                                    Watch on YouTube
                                    <ExternalLink size={15} />
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-slate-500">
                                    Inspection video will be added here.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <AdmissionCta />
        </>
    );
}