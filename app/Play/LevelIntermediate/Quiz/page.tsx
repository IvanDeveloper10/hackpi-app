'use client';

import { Fragment, useState } from 'react';
import { Button } from '@heroui/button';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Which of the following is an algebraic expression?',
    options: ['3x² + 2x - 5', '5 + 3 = 8', 'π ≈ 3.14', '√16 = 4'],
    correctAnswer: '3x² + 2x - 5'
  },
  {
    id: 2,
    question: 'What is the solution to the equation 2x + 7 = 15?',
    options: ['x = 4', 'x = 8', 'x = 11', 'x = 22'],
    correctAnswer: 'x = 4'
  },
  {
    id: 3,
    question: 'What is the slope of the line y = -3x + 2?',
    options: ['-3', '2', '3', '-2'],
    correctAnswer: '-3'
  },
  {
    id: 4,
    question: 'Which of these is a quadratic equation?',
    options: ['x + 5 = 0', 'x² - 4x + 4 = 0', '2x - 3 = 7', '3/x = 2'],
    correctAnswer: 'x² - 4x + 4 = 0'
  },
  {
    id: 5,
    question: 'Simplify: (x³)(x⁴)',
    options: ['x⁷', 'x¹²', '7x', 'x⁻¹'],
    correctAnswer: 'x⁷'
  },
  {
    id: 6,
    question: 'What is the distance between points (1, 2) and (4, 6)?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5'
  },
  {
    id: 7,
    question: 'Which property is demonstrated by a(b + c) = ab + ac?',
    options: ['Commutative', 'Associative', 'Distributive', 'Identity'],
    correctAnswer: 'Distributive'
  },
  {
    id: 8,
    question: 'Solve for x: 3(x - 4) = 2x + 5',
    options: ['x = 17', 'x = 7', 'x = -7', 'x = 1'],
    correctAnswer: 'x = 17'
  },
  {
    id: 9,
    question: 'What is the y-intercept of the line 2x - 3y = 12?',
    options: ['(0, 4)', '(0, -4)', '(6, 0)', '(-4, 0)'],
    correctAnswer: '(0, -4)'
  },
  {
    id: 10,
    question: 'Factor completely: x² - 9',
    options: ['(x - 3)²', '(x + 3)(x - 3)', '(x + 9)(x - 1)', 'x(x - 9)'],
    correctAnswer: '(x + 3)(x - 3)'
  }
]

export default function Quiz(): JSX.Element {

  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [quizTime, setQuizTime] = useState(0);

  useState(() => {
    const timer = setInterval(() => {
      setQuizTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  const handleAnswerSelect = (questionId: number, answer: string) => {
    if (!showResults) {
      setUserAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }));
    }
  };

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;

    quizQuestions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer) {
        if (userAnswer === question.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    const unanswered = quizQuestions.length - (correct + incorrect);
    const score = (correct / quizQuestions.length) * 100;
    return { correct, incorrect, unanswered, score };
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
    setReviewMode(false);
    setQuizTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0': ''}${secs}`;
  };

  const results = calculateResults();

  return (
    <Fragment>
      <div className='min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-po'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-extrabold'>Algebra Quiz Challenge</h1>
            <p className='text-lg mb-4'>Test your algebra knowledge with this 10-question intermediate mathematics quiz</p>
            <div className='flex justify-center items-center gap-6 text-sm'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
                <span>{quizQuestions.length} Questions</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                <span>Time: {formatTime(quizTime)}</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-purple-500'></div>
                <span>Single Correct Answer</span>
              </div>
            </div>
          </div>
          <div className='bg-white text-black rounded-2xl shadow-xl overflow-hidden'>
            <div className='bg-gradient-to-r from-blue-500 to-indigo-600 p-4'>
              <div className='flex justify-between items-center text-white mb-2'>
                <span className='font-medium'>Progress</span>
                <span className='font-bold'>{Object.keys(userAnswers).length}/{quizQuestions.length} answered</span>
              </div>
              <div className='w-full bg-blue-300 rounded-full h-3'>
                <div 
                  className='bg-white h-3 rounded-full transition-all duration-500 ease-out' 
                  style={{ width: `${(Object.keys(userAnswers).length / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className='p-6 md:p-8'>
              <div className='space-y-8 mb-10'>
                {quizQuestions.map((q) => {
                  const userAnswer = userAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <div 
                      key={q.id} 
                      className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                        showResults 
                          ? isCorrect 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-red-200 bg-red-50'
                          : userAnswer 
                            ? 'border-blue-300 bg-blue-50' 
                            : 'border-gray-200'
                      }`}
                    >
                      <div className='flex items-start gap-3 mb-4'>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          showResults
                            ? isCorrect
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                            : userAnswer
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-300 text-gray-700'
                        }`}>
                          {q.id}
                        </div>
                        <h3 className='text-lg font-semibold'>{q.question}</h3>
                      </div>
                      
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 ml-11'>
                        {q.options.map((option, idx) => {
                          const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
                          const isSelected = userAnswer === option;
                          const isCorrectOption = option === q.correctAnswer;
                          
                          return (
                            <button
                              key={idx}
                              onClick={() => handleAnswerSelect(q.id, option)}
                              disabled={showResults}
                              className={`p-4 rounded-lg text-left transition-all duration-300 flex items-center gap-3 ${
                                showResults
                                  ? isCorrectOption
                                    ? 'bg-green-100 border-2 border-green-400'
                                    : isSelected && !isCorrectOption
                                      ? 'bg-red-100 border-2 border-red-400'
                                      : 'bg-gray-100 border-2 border-gray-200'
                                  : isSelected
                                    ? 'bg-blue-100 border-2 border-blue-400'
                                    : 'bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                showResults
                                  ? isCorrectOption
                                    ? 'bg-green-500 text-white'
                                    : isSelected && !isCorrectOption
                                      ? 'bg-red-500 text-white'
                                      : 'bg-gray-300 text-gray-700'
                                  : isSelected
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                              }`}>
                                {optionLetter}
                              </div>
                              <span className='font-medium'>{option}</span>
                              
                              {showResults && isCorrectOption && (
                                <span className='ml-auto text-green-600 font-bold'>
                                  ✓ Correct
                                </span>
                              )}
                              {showResults && isSelected && !isCorrectOption && (
                                <span className='ml-auto text-red-600 font-bold'>
                                  ✗ Incorrect
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                      
                      {showResults && !isCorrect && userAnswer && (
                        <div className='mt-4 ml-11 p-3 bg-blue-50 rounded-lg border border-blue-200'>
                          <p className='text-sm font-medium text-blue-800'>
                            <span className='font-bold'>Explanation:</span> The correct answer is <span className='font-bold text-blue-900'>{q.correctAnswer}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                {!showResults ? (
                  <Button
                    onPress={handleSubmit}
                    disabled={Object.keys(userAnswers).length === 0}
                    color='danger'
                    className='w-96'
                  >
                    Submit Quiz & See Results
                  </Button>
                ) : (
                  <div className='flex flex-col sm:flex-row gap-4 w-full'>
                    <Button
                      onPress={() => setReviewMode(!reviewMode)}
                      className='w-96'
                    >
                      {reviewMode ? 'Hide Review' : 'Review Answers'}
                    </Button>
                    <Button
                      onPress={handleReset}
                      className='w-96'
                    >
                      Restart Quiz
                    </Button>
                  </div>
                )}
              </div>
              {showResults && (
                <div className='mt-10 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border-2 border-blue-200'>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quiz Results</h2>
                  
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
                    <div className='bg-white p-5 rounded-xl shadow-md text-center border-t-4 border-green-500'>
                      <div className='text-4xl font-bold text-green-600 mb-2'>{results.correct}</div>
                      <div className='text-sm font-medium'>Correct Answers</div>
                      <div className='text-xs mt-1'>{results.score.toFixed(0)}% of total</div>
                    </div>
                    
                    <div className='bg-white p-5 rounded-xl shadow-md text-center border-t-4 border-red-500'>
                      <div className='text-4xl font-bold text-red-600 mb-2'>{results.incorrect}</div>
                      <div className='text-sm font-medium text-gray-700'>Incorrect Answers</div>
                      <div className='text-xs text-gray-500 mt-1'>{((results.incorrect / quizQuestions.length) * 100).toFixed(0)}% of total</div>
                    </div>
                    
                    <div className='bg-white p-5 rounded-xl shadow-md text-center border-t-4 border-yellow-500'>
                      <div className='text-4xl font-bold text-yellow-600 mb-2'>{results.unanswered}</div>
                      <div className='text-sm font-medium text-gray-700'>Unanswered</div>
                      <div className='text-xs text-gray-500 mt-1'>{((results.unanswered / quizQuestions.length) * 100).toFixed(0)}% of total</div>
                    </div>
                    
                    <div className='bg-white p-5 rounded-xl shadow-md text-center border-t-4 border-blue-500'>
                      <div className='text-4xl font-bold text-blue-600 mb-2'>{formatTime(quizTime)}</div>
                      <div className='text-sm font-medium text-gray-700'>Time Taken</div>
                      <div className='text-xs text-gray-500 mt-1'>Minutes:Seconds</div>
                    </div>
                  </div>
                  <div className='mb-8'>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium text-gray-700'>Your Score</span>
                      <span className='font-bold text-gray-900'>{results.score.toFixed(1)}%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-4'>
                      <div 
                        className='h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out'
                        style={{ width: `${results.score}%` }}
                      ></div>
                    </div>
                    <div className='flex justify-between mt-3 text-sm text-gray-600'>
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className='text-center p-4 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200'>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {results.score >= 80 ? 'Algebra Expert!' : 
                       results.score >= 60 ? 'Good Algebra Skills!' : 
                       results.score >= 40 ? 'Basic Understanding' : 
                       'Needs More Practice'}
                    </h3>
                    <p className='text-gray-700'>
                      {results.score >= 80 ? 'Excellent! You have mastered intermediate algebra concepts!' : 
                       results.score >= 60 ? 'Good job! You understand most algebra fundamentals.' : 
                       results.score >= 40 ? 'You have basic algebra knowledge but need more practice.' : 
                       'Review the algebra guide and try again to improve your understanding.'}
                    </p>
                  </div>
                </div>
              )}
              {reviewMode && showResults && (
                <div className='mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-purple-200'>
                  <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <span className='bg-purple-100 p-2 rounded-lg'></span>
                    Answer Review
                  </h3>
                  <div className='space-y-4'>
                    {quizQuestions.map(q => {
                      const userAnswer = userAnswers[q.id];
                      const isCorrect = userAnswer === q.correctAnswer;
                      
                      return (
                        <div key={q.id} className='bg-white p-4 rounded-lg shadow-sm'>
                          <div className='flex justify-between items-start'>
                            <div>
                              <p className='font-medium text-gray-800'>{q.id}. {q.question}</p>
                              <div className='mt-2 flex flex-wrap gap-2'>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  isCorrect 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  Your answer: {userAnswer || 'No answer'}
                                </span>
                                <span className='px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'>
                                  Correct answer: {q.correctAnswer}
                                </span>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full font-bold ${
                              isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}>
                              {isCorrect ? '✓' : '✗'}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className='bg-gray-50 p-4 border-t border-gray-200 text-center text-sm text-gray-600'>
              <p>Complete all {quizQuestions.length} questions and submit to see your results.</p>
              <p className='mt-1'>Each question has only one correct answer.</p>
            </div>
          </div>
          <div className='mt-8 p-5 bg-white rounded-xl shadow-md border border-gray-200'>
            <h3 className='font-bold text-gray-900 mb-2 flex items-center gap-2'>
              <span className='text-white bg-danger p-2 rounded-full'>ℹ</span> Quiz Instructions
            </h3>
            <ul className='list-disc pl-5 text-gray-700 space-y-1'>
              <li>Select one answer for each question.</li>
              <li>You can change your answer before submitting.</li>
              <li>Click "Submit Quiz" to see your results and statistics.</li>
              <li>After submission, you can review your answers.</li>
              <li>Use "Restart Quiz" to try again.</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}