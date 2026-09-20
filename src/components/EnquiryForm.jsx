import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { site } from '@/data/site';

/**
 * Admission enquiry form - frontend only.
 *
 * This site has no backend. Set FORM_ENDPOINT to any form service URL
 * (Formspree, Getform, Web3Forms, Google Apps Script, your own API...) and the
 * form will POST the JSON payload there. While it is empty, submitting opens
 * the visitor's mail client with the enquiry pre-filled, so nothing is lost.
 */
const FORM_ENDPOINT = '';

const classOptions = [
  'Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII',
];

const emptyForm = { name: '', parent: '', phone: '', email: '', grade: '', message: '' };

export default function EnquiryForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter the student name.';
    if (!values.parent.trim()) next.parent = 'Please enter the parent or guardian name.';
    if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s|-/g, ''))) next.phone = 'Enter a valid 10-digit mobile number.';
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.';
    if (!values.grade) next.grade = 'Please select a class.';
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
      } catch {
        // Ignore network errors: the confirmation below still tells the visitor
        // how to reach the school directly.
      }
    } else {
      const body = [
        `Student name: ${values.name}`,
        `Parent / guardian: ${values.parent}`,
        `Mobile: ${values.phone}`,
        `Email: ${values.email || '-'}`,
        `Class sought: ${values.grade}`,
        '',
        values.message,
      ].join('\n');

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Admission enquiry - ${values.name} (${values.grade})`
      )}&body=${encodeURIComponent(body)}`;
    }

    setValues(emptyForm);
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <div className="rounded-xl border border-green-100 bg-green-50 p-8 text-center">
        <CheckCircle2 size={44} className="mx-auto text-green-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-navy-700">Thank you for your enquiry!</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Our admission team will get in touch with you shortly. For anything urgent, call us at{' '}
          <a href={`tel:${site.phoneHref}`} className="font-semibold text-navy-700 underline">
            {site.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-outline mt-6">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-slate-100 bg-white p-6 shadow-card md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" value={values.name} onChange={update} className="field" placeholder="Full name of the student" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="label" htmlFor="parent">
            Parent / Guardian Name <span className="text-red-500">*</span>
          </label>
          <input id="parent" name="parent" value={values.parent} onChange={update} className="field" placeholder="Your full name" />
          {errors.parent && <p className="mt-1 text-xs text-red-600">{errors.parent}</p>}
        </div>

        <div>
          <label className="label" htmlFor="phone">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input id="phone" name="phone" type="tel" inputMode="numeric" value={values.phone} onChange={update} className="field" placeholder="10-digit mobile number" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input id="email" name="email" type="email" value={values.email} onChange={update} className="field" placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="label" htmlFor="grade">
            Class Sought <span className="text-red-500">*</span>
          </label>
          <select id="grade" name="grade" value={values.grade} onChange={update} className="field">
            <option value="">Select a class</option>
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.grade && <p className="mt-1 text-xs text-red-600">{errors.grade}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" rows="4" value={values.message} onChange={update} className="field resize-y" placeholder="Anything you would like us to know?" />
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-gold mt-6 w-full disabled:opacity-70 sm:w-auto">
        {status === 'sending' ? 'Sending...' : 'Submit Enquiry'} <Send size={16} aria-hidden="true" />
      </button>

      <p className="mt-3 text-xs text-slate-500">
        We respect your privacy. Your details are used only to respond to this admission enquiry.
      </p>
    </form>
  );
}
