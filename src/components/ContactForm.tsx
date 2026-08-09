'use client';

import { useState } from 'react';

const projectTypes = [
  'Research project request',
  'Data analysis consultancy',
  'Grant or partnership discussion',
  'Health/public health research support',
  'Field data collection',
  'Participant recruitment',
  'Other'
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(form.entries());

    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      setStatus('success');
      event.currentTarget.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink">Full name</span>
          <input name="name" required className="focus-ring mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Organization</span>
          <input name="organization" className="focus-ring mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Email</span>
          <input name="email" type="email" required className="focus-ring mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Phone</span>
          <input name="phone" className="focus-ring mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-ink">What do you need?</span>
          <select name="projectType" required className="focus-ring mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm">
            <option value="">Select one</option>
            {projectTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-ink">Project details</span>
          <textarea name="message" rows={6} required className="focus-ring mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm" placeholder="Tell us the research problem, location, target population, timeline, budget range, or partnership idea." />
        </label>
      </div>
      <button className="focus-ring mt-6 w-full rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-plum" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Submit request'}
      </button>
      {status === 'success' ? <p className="mt-4 rounded-2xl bg-mint px-4 py-3 text-sm font-semibold text-ink">Thank you. Your request has been received.</p> : null}
      {status === 'error' ? <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Something went wrong. Please email us directly.</p> : null}
    </form>
  );
}
