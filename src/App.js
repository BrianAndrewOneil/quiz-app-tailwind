import React, { useState } from 'react';
import questions from './questionsData';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import ScoreReportCard from './components/ScoreReportCard';
import ProgressCard from './components/ProgressCard';
import Footer from './components/Footer';

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswerID, setSelectedAnswerID] = useState(localStorage.getItem(`question_1`) || null);
    const [showScore, setShowScore] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (selectedAnswerID) => {
        localStorage.setItem(`question_${questions[currentQuestion].id}`, selectedAnswerID);
        setSelectedAnswerID(selectedAnswerID);
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswerID(localStorage.getItem(`question_${questions[nextQuestion].id}`) || null);
        }
    };

    const handlePrevQuestion = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
            setSelectedAnswerID(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
        }
    };

    const handleFirstQuestion = () => {
        setCurrentQuestion(0);
        setSelectedAnswerID(localStorage.getItem(`question_1`) || null);
    };

    const handleLastQuestion = () => {
        const lastOne = questions.length
        setCurrentQuestion(lastOne-1);
        setSelectedAnswerID(localStorage.getItem(`question_${lastOne}`) || null);
    };

    const handleProgressToggle = () => {
        setShowProgress(current => !current);
    };

    const handleLinkFromProgress = (questionIndex) => {
        setShowProgress(false);
        setCurrentQuestion(questionIndex);
        setSelectedAnswerID(localStorage.getItem(`question_${questions[questionIndex].id}`) || null);
    };

    const handleClearAnswers = () => {
        // Wipe all localStorage completely,
        localStorage.clear();
        // and then reset the current question to the first and selected-answer state to null.
        setSelectedAnswerID(null);
        setCurrentQuestion(0);
    };

    const handleRetakeQuiz = () => {
        localStorage.clear();
        setSelectedAnswerID(null);
        setShowScore(false);
        setCurrentQuestion(0);
    };

    const handleScoreQuiz = () => {
        let finalScore = 0;
        questions.forEach((question) => {
        const storedAnswer = localStorage.getItem(`question_${question.id}`);
        if (storedAnswer === question.correctResponse) {
            finalScore += 1;
        }
        });
        setScore(finalScore);
        setShowScore(true);
        setCurrentQuestion(0);
        setSelectedAnswerID(localStorage.getItem(`question_1`) || null);
    };

    const domainScore = (targetDomain) => {
        let domainScore=0
        const domainQuestions = questions.filter(question=>question.domain===targetDomain)
        domainQuestions.forEach((q) => {
            const storedAnswer = localStorage.getItem(`question_${q.id}`);
            if (storedAnswer === q.correctResponse) {
                domainScore += 1;
                }
        });
        return Math.round(domainScore/domainQuestions.length*100)
    }

	return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="p-3 mt-5 flex-grow items-center justify-center">
                <div className="p-3">
                    {
                    showProgress? (
                    <ProgressCard
                    questions={questions}
                    handleProgressToggle={handleProgressToggle}
                    handleLinkFromProgress={handleLinkFromProgress}
                    />
                    )
                    :
                    showScore? (
                    <ScoreReportCard
                    score={score}	
                    quizLength={questions.length}
                    questions={questions}
                    domainScore={domainScore}
                    handleRetakeQuiz={handleRetakeQuiz}
                    question={questions[currentQuestion]}
                    selectedAnswerID={selectedAnswerID}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleFirstQuestion={handleFirstQuestion}
                    handleLastQuestion={handleLastQuestion}
                    />
                    ) : (
                    <QuestionCard
                    quizLength={questions.length}
                    question={questions[currentQuestion]}
                    selectedAnswerID={selectedAnswerID}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleScoreQuiz={handleScoreQuiz}
                    handleClearAnswers={handleClearAnswers}
                    handleProgressToggle={handleProgressToggle}
                    />
                    )}
                </div>
            </main>
            <Footer />
        </div>
	);
}
