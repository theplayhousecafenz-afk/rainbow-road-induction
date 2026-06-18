'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CompletePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const [quiz, setQuiz] = useState<{ score: number; passed: boolean } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('road_user');
    const quizStored = sessionStorage.getItem('road_quiz');
    if (!stored) { router.push('/'); return; }
    setUser(JSON.parse(stored));
    if (quizStored) setQuiz(JSON.parse(quizStored));
  }, [router]);

  const today = new Date().toLocaleDateString('en-NZ', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="text-2xl">🏔️</div>
          <div>
            <h1 className="text-base font-bold text-[#1a2f5e]">Road & Car Park Induction</h1>
            <p className="text-xs text-gray-500">Rainbow Ski Area</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg space-y-4">
          <div className="bg-[#1a2f5e] rounded-2xl p-8 text-white text-center">
            <div className="text-5xl mb-4">🎊</div>
            <h2 className="text-2xl font-bold">Induction Complete!</h2>
            <p className="text-blue-200 text-sm mt-2">
              You have successfully completed the Rainbow Ski Area Road & Car Park induction.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <div className="border-2 border-[#1a2f5e] rounded-xl p-5 text-center space-y-1">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Certificate of Completion</div>
              <div className="text-xl font-bold text-[#1a2f5e] mt-2">{user.name}</div>
              <div className="text-sm text-gray-600">{user.role}</div>
              <div className="text-xs text-gray-400 mt-1">{today}</div>
              <div className="text-sm font-medium text-gray-700 mt-2">Rainbow Ski Area · Road & Car Park Induction 2026</div>
              {quiz && (
                <div className={`mt-3 text-sm font-semibold ${quiz.passed ? 'text-green-600' : 'text-orange-600'}`}>
                  Quiz score: {quiz.score}/5 · {quiz.passed ? 'Passed ✓' : 'Not passed'}
                </div>
              )}
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-bold text-[#1a2f5e] text-sm mb-2">What Happens Next?</h4>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span>•</span><span>Inform your supervisor that you have completed the Road & Car Park induction</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Ask your supervisor about shadowing shifts before working independently</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Refer back to the Section K manual for guidance at any time</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>If in doubt about anything — always ask your supervisor</span></li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => {
              sessionStorage.clear();
              router.push('/');
            }}
            className="w-full border-2 border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Start Over (New User)
          </button>
        </div>
      </main>
    </div>
  );
}
