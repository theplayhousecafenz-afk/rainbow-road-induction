'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', role: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    if (!form.role) e.role = 'Please select your role';
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    sessionStorage.setItem('road_user', JSON.stringify(form));
    router.push('/step/1');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <div className="text-3xl">🏔️</div>
          <div>
            <h1 className="text-lg font-bold text-[#1a2f5e]">Road & Car Park Induction</h1>
            <p className="text-sm text-gray-500">Rainbow Ski Area · Section K · 2026</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg space-y-5">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-[#1a2f5e] px-6 py-5 text-white">
              <div className="text-3xl mb-2">🚗</div>
              <h2 className="text-xl font-bold">Welcome to Rainbow Ski Area</h2>
              <p className="text-blue-200 text-sm mt-1">Rainbow Ski Area · Nelson Lakes · Te Tau Ihu</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                This induction covers the <strong>Road & Car Park manual (Section K)</strong> — car park management, the chains policy, health & safety on the road, and what to do in an emergency. It takes approximately <strong>10–15 minutes</strong>. A short quiz at the end confirms your understanding.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500">
                <span>📖 5 induction steps</span>
                <span>❓ 5-question quiz</span>
                <span>✅ Pass mark: 4/5</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-[#1a2f5e] mb-5 text-base">Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2f5e] text-gray-800"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Role *</label>
                <select
                  value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a2f5e] text-gray-800 bg-white"
                >
                  <option value="">Select your role</option>
                  <option>Volunteer</option>
                  <option>Car Park Volunteer</option>
                  <option>Road Patrol Volunteer</option>
                  <option>Staff Member</option>
                  <option>Seasonal Employee</option>
                </select>
                {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a2f5e] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#253d7a] transition-colors duration-200 text-base mt-2"
              >
                Start Induction →
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
