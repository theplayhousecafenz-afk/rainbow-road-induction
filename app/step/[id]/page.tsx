'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { steps } from '@/lib/content';

const TOTAL_STEPS = 4;

export default function StepPage() {
  const router = useRouter();
  const params = useParams();
  const stepId = parseInt(params.id as string);
  const [scrolled, setScrolled] = useState(false);
  const [userName, setUserName] = useState('');

  const step = steps.find(s => s.id === stepId);

  useEffect(() => {
    const stored = sessionStorage.getItem('tickets_user');
    if (!stored) { router.push('/'); return; }
    const user = JSON.parse(stored);
    setUserName(user.name?.split(' ')[0] || '');
    setScrolled(false);
    window.scrollTo({ top: 0 });
  }, [stepId, router]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        setScrolled(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    if (document.body.scrollHeight <= window.innerHeight + 200) setScrolled(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [stepId]);

  if (!step) return <div className="p-8 text-center text-gray-500">Step not found</div>;

  const progressPercent = Math.round((stepId / TOTAL_STEPS) * 100);

  function handleNext() {
    if (stepId < TOTAL_STEPS) {
      router.push(`/step/${stepId + 1}`);
    } else {
      router.push('/quiz');
    }
  }

  function renderBold(text: string) {
    const parts = text.split(/\*\*(.*?)\*\*/);
    return parts.map((part, i) =>
      i % 2 === 1
        ? <strong key={i} className="font-semibold text-gray-800">{part}</strong>
        : part
    );
  }

  function renderContent(text: string) {
    const lines = text.split('\n');
    const output: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('**') && line.endsWith('**')) {
        output.push(<h4 key={i} className="font-bold text-[#1a2f5e] mt-4 mb-1 text-sm uppercase tracking-wide">{line.replace(/\*\*/g, '')}</h4>);
        i++;
      } else if (line.startsWith('• ')) {
        // Group consecutive bullet lines into one <ul>
        const items: React.ReactNode[] = [];
        while (i < lines.length && lines[i].startsWith('• ')) {
          items.push(<li key={i} className="text-gray-600 text-sm">{renderBold(lines[i].slice(2))}</li>);
          i++;
        }
        output.push(<ul key={`ul-${i}`} className="list-disc ml-5 space-y-0.5">{items}</ul>);
      } else if (line.match(/^\d+\. /)) {
        // Group consecutive numbered lines into one <ol> so counter resets each time
        const items: React.ReactNode[] = [];
        while (i < lines.length && lines[i].match(/^\d+\. /)) {
          items.push(<li key={i} className="text-gray-600 text-sm">{renderBold(lines[i].replace(/^\d+\. /, ''))}</li>);
          i++;
        }
        output.push(<ol key={`ol-${i}`} className="list-decimal ml-5 space-y-0.5">{items}</ol>);
      } else if (line.trim() === '') {
        output.push(<div key={i} className="h-2" />);
        i++;
      } else {
        output.push(<p key={i} className="text-gray-600 text-sm leading-relaxed">{renderBold(line)}</p>);
        i++;
      }
    }

    return output;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="text-2xl">🎫</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1a2f5e]">Ticket Office Induction{userName ? ` · ${userName}` : ''}</span>
              <span className="text-xs text-gray-500">Step {stepId} of {TOTAL_STEPS}</span>
            </div>
            <div className="mt-1.5 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%`, background: 'linear-gradient(to right, #1a2f5e, #00b4d8)' }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-4">
        <div className="bg-[#1a2f5e] rounded-2xl px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{step.icon}</span>
            <div>
              <div className="text-xs text-blue-200 font-medium mb-0.5">Step {stepId} of {TOTAL_STEPS}</div>
              <h2 className="text-lg font-bold leading-tight">{step.title}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="space-y-1">{renderContent(step.content)}</div>
        </div>

        {step.keyPoints && step.keyPoints.length > 0 && (
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <h4 className="font-bold text-[#1a2f5e] text-sm mb-3 flex items-center gap-2">
              <span>📌</span> Key Points
            </h4>
            <ul className="space-y-2">
              {step.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#1a2f5e] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step.warning && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
            <h4 className="font-bold text-red-700 text-sm mb-2 flex items-center gap-2">
              <span>⚠️</span> Important
            </h4>
            <p className="text-red-700 text-sm">{step.warning}</p>
          </div>
        )}

        {step.tip && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <h4 className="font-bold text-green-700 text-sm mb-2 flex items-center gap-2">
              <span>💡</span> Good to Know
            </h4>
            <p className="text-green-700 text-sm">{step.tip}</p>
          </div>
        )}

        <div className="flex gap-3 pb-6">
          <button
            onClick={() => stepId > 1 ? router.push(`/step/${stepId - 1}`) : router.push('/')}
            className="flex-1 border-2 border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-[#1a2f5e] text-white font-bold py-3 rounded-xl hover:bg-[#253d7a] transition-colors"
          >
            {stepId < TOTAL_STEPS ? 'Next →' : 'Take Quiz →'}
          </button>
        </div>
      </main>
    </div>
  );
}
