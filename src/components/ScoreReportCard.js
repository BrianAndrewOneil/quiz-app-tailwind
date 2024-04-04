import React, { useState } from 'react';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreReportCard ({
    score,
    quizLength,
    questions,
    handleRetakeQuiz,
    question,
    selectedAnswerID,
    handleNextQuestion,
    handlePrevQuestion,
    handleFirstQuestion,
    handleLastQuestion
    }){

    const domainList = () => {
        const domainNumbers = new Set();
        questions.forEach((question) => domainNumbers.add(question.domain));
        return Array.from(domainNumbers);
    };

    const getDomainScore = (targetDomain) => {
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

    const scorePercentage = Math.round(score/quizLength*100)

    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
        name: 'tab1',
        label: 'Your Overall Results',
        content: (
            <div className="tab-content p-3 flex flex-col sm:flex-row ">
                <div className='w-12/12 sm:w-6/12 items-center justify-between mb-4 text-center space-y-4'>
                    <h2 className='text-xl sm:pb-3 font-bold leading-none text-gray-900 dark:text-white'>
                        Total Score
                    </h2>
                    
                    <div className='px-16'>
                        <CircularProgressbar
                            value={scorePercentage}
                            text={scorePercentage+'%'}
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "#0f766e",
                                trailColor: "#374151",
                            })}
                        />
                        <h3 className='text-xl leading-none text-gray-900 dark:text-white py-3'>
                            {score} of {quizLength} Correct
                        </h3>
                    </div>
                    
                </div>
                <div className='w-12/12 sm:w-6/12 items-center justify-between mb-4 text-center space-y-4'>
                    <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                        Score by Domain
                    </h2>
                    <div className='px-5'>
                        {domainList().map((domain) => {
                            const domainScore = getDomainScore(domain);
                            const progressWidth = `${domainScore}%`;

                            return (
                                <div key={domain}>
                                    <h3 className='text-lg pt-4 pb-3 font-thin leading-none text-gray-900 dark:text-white text-left pl-1'>{domain}</h3>
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700" role="progressbar" aria-label="progress bar" aria-valuenow="{domainScore}" aria-valuemin="0" aria-valuemax="100">
                                        <div className="bg-teal-700 text-sm font-semibold text-teal-100 text-center p-0.5 leading-none rounded-full" style={{ width: progressWidth }}>{progressWidth}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
        },
        {
        name: 'tab2',
        label: 'Review Your Answers',
        content: (
            <div className="tab-content pt-3">
                <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white pl-3'>
                    Question {question.id} of {quizLength}
                </h2>
                <div className='px-5' action=''>
                    <p className="my-6 font-thin text-gray-100 text-lg dark:text-gray-100">{question.questionText}</p>
                    {question.answerOptions.map((answerOption) => (
                        <button 
                            disabled={true} 
                            key={answerOption.answerID}
                            
                            className={
                                //answer was selected and is not correct
                                selectedAnswerID === answerOption.answerID && answerOption.answerID !== question.correctResponse ? 
                                'w-full text-left font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600/50 dark:text-white dark:border-red-800/50 dark:focus:ring-red-600/50'
                                : 
                                //answer was selected and is correct
                                selectedAnswerID === answerOption.answerID && answerOption.answerID === question.correctResponse ?
                                'w-full text-left font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:focus:ring-teal-500'
                                :
                                //everything else
                                'w-full text-left font-thin text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base px-5 py-2.5 mr-2 mb-2 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-gray-800'
                            }
                        >
                            {answerOption.answerText}
                        </button>
                    ))}


                    {selectedAnswerID === question.correctResponse ? 
                    <p className="my-3 text-gray-100 text-base dark:text-teal-500"> <FontAwesomeIcon icon={faCheck} style={{color: "#009688",}} /> You answered this question correctly.</p>
                    : 
                    selectedAnswerID !== question.correctResponse && selectedAnswerID !== null ?
                    <p className="my-3 text-gray-100 text-base dark:text-red-600"> <FontAwesomeIcon icon={faXmark} style={{color: "#DC3545",}} /> You answered this question incorrectly.</p>
                    : 
                    <p className="my-3 text-gray-100 text-base dark:text-red-600"> <FontAwesomeIcon icon={faXmark} style={{color: "#DC3545",}} /> You did not answer this question.</p>
                    }
                    
                    <p className='font-bold text-gray-100 text-base dark:text-gray-300 leading-tight'>Explanation<br/>
                    <span className='font-thin'>{question.questionRationale}</span></p>

                    <hr className="mb-2 mt-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-2" />

                    <div className='flex justify-center p-4'>
                        <button
                        onClick={handleFirstQuestion}
                        type='button'
                        className='mr-4 text-white bg-sky-700 hover:bg-sky-800 rounded-full px-5 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        First
                        </button>
                        <button
                        onClick={handlePrevQuestion}
                        type='button'
                        className='mr-4 text-white bg-sky-700 hover:bg-sky-800 rounded-full px-5 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        Prev
                        </button>
                        <button
                        onClick={handleNextQuestion}
                        type='button'
                        className='mr-4 text-white bg-sky-700 hover:bg-sky-800 rounded-full px-5 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        Next
                        </button>
                        <button
                        onClick={handleLastQuestion}
                        type='button'
                        className='text-white bg-sky-700 hover:bg-sky-800 rounded-full px-5 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        Last
                        </button>
                    </div>
                </div>
            </div>
        )
        },
    ];
    
    return (
        <div className="flex justify-center">
            <div className='w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <div className="flow-root">   
                    <div className="simple-tabs">
                        <div className="tabs">
                            <ul className="flex flex-wrap text-sm sm:text-lg px-2 tracking-tight font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            {
                                tabList.map((tab, i) => (
                                <li 
                                    key={i}
                                    onClick={() => setCurrentTab(tab.name)} 
                                    className={(tab.name === currentTab) ? 
                                        'mr-2 cursor-pointer inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-sky-500 dark:border-sky-500' 
                                        : 
                                        'mr-2 cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                    }>
                                    {tab.label}
                                </li>
                                ))
                            }
                            </ul>
                        </div>

                        <div className='p-4'>
                            {
                            tabList.map((tab, i) => {
                                if(tab.name === currentTab) {
                                    return <div key={i}>{tab.content}</div>;
                                    } else {
                                    return null;
                                    }
                                })
                            }

                            <hr className="mb-2 mt-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-2" />
                            <div className='flex justify-center p-4'>
                                <button onClick={handleRetakeQuiz} type='button' className='text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                                    Retake This Quiz
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

