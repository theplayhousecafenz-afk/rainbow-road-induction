'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions } from '@/lib/content';

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem('tickets_user');
    if (!stored) { router.push('/'); return; }
  }, [router]);

  function selectAnswer(optionIndex: number) {
    if (submitted) return;
    const updated = [...answers];
    updated[currentQ] = optionIndex;
    setAnswers(updated);
  }

  function handleSubmit() {
    if (answers.some(a => a === null)) {
      alert('Please answer all questions before submitting.');
      return;
    }
    const score = answers.filter((a, i) => a === quizQuestions[i].correct).length;
    sessionStorage.setItem('tickets_quiz', JSON.stringify({ answers, score, passed: score >= 4 }));
    setSubmitted(true);
  }

  const score = answers.filter((a, i) => a === quizQuestions[i].correct).length;
  const passed = score >= 4;
  const allAnswered = answers.every(a => a !== null);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
            <div className="text-2xl">🎫</div>
            <div>
              <h1 className="text-base font-bold text-[#1a2f5e]">Ticket Office Induction</h1>
              <p className="text-xs text-gray-500">Rainbow Ski Area</p>
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-lg space-y-4">
            <div className={`rounded-2xl p-6 text-center ${passed ? 'bg-green-600' : 'bg-orange-500'} text-white`}>
              <div className="text-5xl mb-3">{passed ? '🎉' : '📚'}</div>
              <h2 className="text-2xl font-bold">{passed ? 'Quiz Passed!' : 'Not quite...'}</h2>
              <p className="text-lg mt-1">{score} / {quizQuestions.length} correct</p>
              <p className="text-sm mt-2 opacity-90">
                {passed
                  ? 'Great work! Your Rentals induction is now complete.'
                  : 'You need 4/5 to pass. Review the induction steps and try again.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <h3 className="font-bold text-[#1a2f5e]">Question Review</h3>
              {quizQuestions.map((q, i) => {
                const isCorrect = answers[i] === q.correct;
                return (
                  <div key={q.id} className={`rounded-xl p-4 border-2 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                    <div className="flex items-start gap-2">
                      <span>{isCorrect ? '✅' : '❌'}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{q.question}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Correct answer: <strong>{q.options[q.correct]}</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-1 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 pb-6">
              {passed ? (
                <button
                  onClick={() => router.push('/complete')}
                  className="flex-1 bg-[#1a2f5e] text-white font-bold py-3 rounded-xl hover:bg-[#253d7a] transition-colors"
                >
                  Finish →
                </button>
              ) : (
                <>
                  <button
                    onClick={() => router.push('/step/1')}
                    className="flex-1 border-2 border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Review Steps
                  </button>
                  <button
                    onClick={() => {
                      setAnswers(Array(quizQuestions.length).fill(null));
                      setSubmitted(false);
                      setCurrentQ(0);
                    }}
                    className="flex-1 bg-[#1a2f5e] text-white font-bold py-3 rounded-xl hover:bg-[#253d7a] transition-colors"
                  >
                    Retry Quiz
                  </button>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const q = quizQuestions[currentQ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="text-2xl">🎫</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1a2f5e]">Ticket Office Quiz</span>
              <span className="text-xs text-gray-500">Question {currentQ + 1} of {quizQuestions.length}</span>
            </div>
            <div className="mt-1.5 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 bg-[#1a2f5e]"
                style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 space-y-4">
        <div className="bg-[#1a2f5e] rounded-2xl px-6 py-5 text-white">
          <div className="text-xs text-blue-200 mb-2">Question {currentQ + 1} of {quizQuestions.length}</div>
          <h2 className="text-base font-bold leading-snug">{q.question}</h2>
        </div>

        <div className="space-y-3">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              className={`w-full text-left border-2 rounded-xl p-4 transition-all duration-200 flex items-center gap-3 ${
                answers[currentQ] === i
                  ? 'border-[#1a2f5e] bg-blue-50'
                  : 'border-gray-200 hover:border-[#1a2f5e] hover:bg-blue-50 bg-white'
              }`}
            >
              <span className={`w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                answers[currentQ] === i
                  ? 'border-[#1a2f5e] bg-[#1a2f5e] text-white'
                  : 'border-gray-300 text-gray-500'
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm text-gray-700">{option}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2 py-2">
          {quizQuestions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQ(i)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                i === currentQ
                  ? 'bg-[#1a2f5e] text-white'
                  : answers[i] !== null
                  ? 'bg-blue-200 text-[#1a2f5e]'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="flex gap-3 pb-6">
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ(currentQ - 1)}
              className="flex-1 border-2 border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
          )}
          {currentQ < quizQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQ(currentQ + 1)}
              disabled={answers[currentQ] === null}
              className={`flex-1 font-bold py-3 rounded-xl transition-colors ${
                answers[currentQ] !== null
                  ? 'bg-[#1a2f5e] text-white hover:bg-[#253d7a]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`flex-1 font-bold py-3 rounded-xl transition-colors ${
                allAnswered
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Quiz ✓
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
