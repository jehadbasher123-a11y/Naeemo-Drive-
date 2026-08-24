import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Car, 
  HelpCircle, 
  Award, 
  CheckCircle, 
  XCircle, 
  Eye, 
  BookOpen, 
  MapPin, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Volume2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  SHOW_ME_TELL_ME_QUESTIONS, 
  THEORY_QUESTIONS, 
  TEST_CENTRES 
} from '../data/mockData';
import { ShowMeTellMeQuestion, TheoryQuestion, TestCenter } from '../types';

export const UkTestPrepFeature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'showMeTellMe' | 'theoryQuiz' | 'testCentres'>('showMeTellMe');
  
  // Show Me Tell Me State
  const [smtmFilter, setSmtmFilter] = useState<'All' | 'Tell Me' | 'Show Me'>('All');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  // Theory Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Test Centres search
  const [tcSearch, setTcSearch] = useState('');

  const toggleAnswer = (id: number) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    THEORY_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const filteredSmtm = SHOW_ME_TELL_ME_QUESTIONS.filter(q => {
    if (smtmFilter === 'Tell Me') return q.type.includes('Tell Me');
    if (smtmFilter === 'Show Me') return q.type.includes('Show Me');
    return true;
  });

  const filteredCentres = TEST_CENTRES.filter(tc => {
    if (!tcSearch.trim()) return true;
    const q = tcSearch.toUpperCase();
    return tc.name.toUpperCase().includes(q) || 
           tc.city.toUpperCase().includes(q) || 
           tc.postcode.toUpperCase().includes(q);
  });

  return (
    <section id="dvsa-prep" className="py-16 sm:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official DVSA Syllabus Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            UK Driving Standards & <span className="text-amber-400">Test Prep Hub</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Master the official UK Highway Code, study official DVSA "Show Me, Tell Me" vehicle safety questions, and discover route insights for your local test centre.
          </p>
        </div>

        {/* Feature Tabs Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('showMeTellMe')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'showMeTellMe'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Show Me, Tell Me Questions</span>
            </button>

            <button
              onClick={() => setActiveTab('theoryQuiz')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'theoryQuiz'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>UK Theory & Hazard Quiz</span>
            </button>

            <button
              onClick={() => setActiveTab('testCentres')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'testCentres'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Local Test Centre Explorer</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Show Me, Tell Me Interactive Questions */}
        {activeTab === 'showMeTellMe' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Filter Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400">Filter Question Type:</span>
                <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                  {(['All', 'Tell Me', 'Show Me'] as const).map(type => (
                    <button
                      key={type}
                      onClick={() => setSmtmFilter(type)}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                        smtmFilter === type ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-400">
                <span className="text-amber-400 font-bold">Examiner Note:</span> You will be asked 1 "Tell Me" question before driving, and 1 "Show Me" question while moving.
              </div>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSmtm.map((q) => {
                const isRevealed = !!revealedAnswers[q.id];
                const isTellMe = q.type.includes('Tell Me');

                return (
                  <div
                    key={q.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-md flex flex-col justify-between transition-all hover:border-slate-700"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          isTellMe ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}>
                          {q.type}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">Q#{q.id} • {q.component}</span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug mt-2">
                        "{q.question}"
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800">
                      {isRevealed ? (
                        <div className="space-y-2.5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 animate-fadeIn">
                          <div className="text-xs text-emerald-300 font-semibold flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span><strong>Official DVSA Answer:</strong> {q.answer}</span>
                          </div>
                          <div className="text-[11px] text-amber-300/90 pl-6 border-l border-amber-400/30">
                            <strong>Examiner Action Guide:</strong> {q.visualGuide}
                          </div>
                          <button
                            onClick={() => toggleAnswer(q.id)}
                            className="text-[11px] text-slate-400 hover:text-white mt-1 block"
                          >
                            Hide Answer
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleAnswer(q.id)}
                          className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Reveal Official Answer & Guide</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Theory Quiz Simulator */}
        {activeTab === 'theoryQuiz' && (
          <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl animate-fadeIn">
            
            {/* Quiz Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">UK Theory Test Simulator</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Test Your Highway Code Knowledge</h3>
              </div>
              <div className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
                5 Questions
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-8">
              {THEORY_QUESTIONS.map((q, idx) => {
                const userSelected = selectedAnswers[q.id];
                const isCorrect = userSelected === q.correctAnswer;

                return (
                  <div key={q.id} className="bg-slate-950 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-bold text-amber-400">Question {idx + 1} of {THEORY_QUESTIONS.length}</span>
                      <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{q.category}</span>
                    </div>

                    <h4 className="text-base font-bold text-white leading-relaxed">
                      {q.question}
                    </h4>

                    {/* Options */}
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userSelected === optIdx;
                        let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                        if (quizSubmitted) {
                          if (optIdx === q.correctAnswer) {
                            btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                          } else if (isThisSelected && !isCorrect) {
                            btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300';
                          }
                        } else if (isThisSelected) {
                          btnStyle = 'bg-amber-400 text-slate-950 border-amber-400 font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            disabled={quizSubmitted}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-all ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation after submission */}
                    {quizSubmitted && (
                      <div className="mt-3 p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-1 animate-fadeIn">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-400" />
                          )}
                          <span>{isCorrect ? 'Correct!' : 'Incorrect Answer'}</span>
                        </div>
                        <p className="text-slate-300">{q.explanation}</p>
                        <span className="text-[11px] text-amber-400 font-mono block pt-1">
                          Ref: {q.highwayCodeRef}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Action / Results */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black text-white">
                    Score: <span className="text-amber-400">{calculateQuizScore()} / 5</span> ({Math.round(calculateQuizScore() / 5 * 100)}%)
                  </div>
                  <span className="text-xs text-emerald-400 font-bold">
                    {calculateQuizScore() >= 4 ? '🎉 Passed Standard!' : '📚 Keep Practising with your Instructor'}
                  </span>
                </div>
              ) : (
                <span className="text-xs text-slate-400">
                  Select your answers for all 5 questions above.
                </span>
              )}

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {quizSubmitted ? (
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs disabled:opacity-50"
                  >
                    Submit & Grade Answers
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Local Test Centre Explorer */}
        {activeTab === 'testCentres' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Search Input */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={tcSearch}
                  onChange={(e) => setTcSearch(e.target.value)}
                  placeholder="Search test centre or city (e.g. Mill Hill, Manchester, B44)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="text-xs text-slate-400">
                All centres supported with test-day car hire & route mock simulations
              </div>
            </div>

            {/* Test Centres Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCentres.map((tc) => (
                <div
                  key={tc.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                        {tc.region}
                      </span>
                      <span className="font-mono text-xs text-slate-400">{tc.postcode}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white">{tc.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{tc.city}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800">
                      <div className="bg-slate-950 p-2 rounded-xl text-center">
                        <div className="text-amber-400 font-bold text-sm">{tc.passRate}%</div>
                        <div className="text-[10px] text-slate-400">Historical Pass Rate</div>
                      </div>
                      <div className="bg-slate-950 p-2 rounded-xl text-center">
                        <div className="text-white font-bold text-sm">{tc.avgWaitWeeks} Weeks</div>
                        <div className="text-[10px] text-slate-400">Avg DVSA Wait</div>
                      </div>
                    </div>

                    {/* Route Features */}
                    <div className="mt-4 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Route Features:</span>
                      <ul className="space-y-1">
                        {tc.features.map((f, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examiner Tip */}
                    <div className="mt-4 p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl text-xs text-amber-200/90">
                      <strong>Examiner Route Tip:</strong> {tc.tips}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800">
                    <a
                      href="#booking-section"
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
                    >
                      <span>Book Mock Test at this Centre</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
