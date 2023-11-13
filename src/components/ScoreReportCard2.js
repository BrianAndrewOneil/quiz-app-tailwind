import React, { useState } from 'react';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreReportCard (props){

    const domainList = () => {
        const domainNumbers = new Set();
        props.questions.forEach((question) => domainNumbers.add(question.domain));
        return Array.from(domainNumbers);
    };

    const scorePercentage = Math.round(props.score/props.quizLength*100)

    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
        name: 'tab1',
        label: 'Your Overall Results',
        content: (
            <div className="tab-content p-3 flex flex-col sm:flex-row ">
                <div className='w-12/12 sm:w-6/12 items-center justify-between mb-4 text-center space-y-4'>
                    <h2 className='text-2xl font-bold leading-none text-gray-900 dark:text-white'>
                        Total Score
                    </h2>
                    
                    <div className='px-16'>
                        <CircularProgressbar
                            value={scorePercentage}
                            text={scorePercentage+'%'}
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "#0f766e",
                                trailColor: "#374151"
                            })}
                        />
                        <h3 className='text-2xl font-thin leading-none text-gray-900 dark:text-white  py-3'>
                            {props.score} of {props.quizLength} Correct
                        </h3>
                    </div>
                    
                </div>
                <div className='w-12/12 sm:w-6/12 items-center justify-between mb-4 text-center space-y-4'>
                    <h2 className='text-2xl font-bold leading-none text-gray-900 dark:text-white'>
                        Score by Domain
                    </h2>
                    <div className='px-5'>
                        {domainList().map((domain) => {
                            const domainScore = props.domainScore(domain);
                            const progressWidth = `${domainScore}%`;

                            return (
                                <div key={domain}>
                                    <h3 className='text-xl py-4 font-thin leading-none text-gray-900 dark:text-white text-left pb-3 pl-1'>{domain}</h3>
                                    <div className="w-full bg-gray-200 rounded-md dark:bg-gray-700" role="progressbar" aria-label="progress bar" aria-valuenow="{domainScore}" aria-valuemin="0" aria-valuemax="100">
                                        <div className="bg-teal-700 text-sm font-semibold text-teal-100 text-center p-0.5 leading-none rounded-md" style={{ width: progressWidth }}>{progressWidth}</div>
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
                <h2 className='text-2xl font-bold leading-none text-gray-900 dark:text-white pl-3'>
                    Question {props.question.id} of {props.quizLength}
                </h2>
                <div className='px-5' action=''>
                    <p className="my-6 font-thin text-gray-100 text-xl dark:text-gray-300">{props.question.questionText}</p>
                    {props.question.answerOptions.map((answerOption) => (
                        <button  disabled={true} 
                            key={answerOption.answerID}
                            
                            className={
                                //answer was selected and is not correct
                                props.selectedAnswerID === answerOption.answerID && answerOption.answerID !== props.question.correctResponse ? 
                                'w-full text-left text-lg font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600/50 dark:text-white dark:border-red-800/50 dark:focus:ring-red-600/50'
                                : 
                                //answer was selected and is correct
                                props.selectedAnswerID === answerOption.answerID && answerOption.answerID === props.question.correctResponse ?
                                'w-full text-left text-lg font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:focus:ring-teal-500'
                                :
                                //everything else
                                'w-full text-left text-lg font-thin text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-gray-800'
                            }
                            >
                            {answerOption.answerText}
                        </button>
                    ))}


                    {props.selectedAnswerID === props.question.correctResponse ? 
                    <p className="my-3 text-gray-100 text-lg dark:text-teal-500"> <FontAwesomeIcon icon={faCheck} style={{color: "#009688",}} /> You answered this question correctly.</p>
                    : 
                    props.selectedAnswerID !== props.question.correctResponse && props.selectedAnswerID !== null ?
                    <p className="my-3 text-gray-100 text-lg dark:text-red-800"> <FontAwesomeIcon icon={faXmark} style={{color: "#DC3545",}} /> You answered this question incorrectly.</p>
                    : 
                    <p className="my-3 text-gray-100 text-lg dark:text-red-800"> <FontAwesomeIcon icon={faXmark} style={{color: "#DC3545",}} /> You did not answer this question.</p>
                    }
                    
                    <p className='font-bold text-gray-100 text-lg dark:text-gray-300 leading-tight'>Explanation<br/>
                    <span className='font-thin'>{props.question.questionRationale}</span></p>

                    <hr className="mb-2 mt-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-2" />

                    <div className='flex justify-center p-4'>
                        <button
                        onClick={props.handleFirstQuestion}
                        type='button'
                        className='mr-4 text-white bg-sky-700 hover:bg-sky-800 rounded-md px-3 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        First
                        </button>
                        <button
                        onClick={props.handlePrevQuestion}
                        type='button'
                        className='mr-4 text-white bg-sky-700 hover:bg-sky-800 rounded-md px-3 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        Prev
                        </button>
                        <button
                        onClick={props.handleNextQuestion}
                        type='button'
                        className='mr-4 text-white bg-sky-700 hover:bg-sky-800 rounded-md px-3 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                        >
                        Next
                        </button>
                        <button
                        onClick={props.handleLastQuestion}
                        type='button'
                        className='text-white bg-sky-700 hover:bg-sky-800 rounded-md px-3 py-2 text-sm font-medium dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
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
                            <ul className="text-lg md:text-2xl font-extralighttext-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                                {
                                tabList.map((tab, i) => (
                                    <li className="w-full">
                                        <button
                                            key={i}
                                            onClick={() => setCurrentTab(tab.name)} 
                                            className={(tab.name === currentTab) ? 
                                                'inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-sky-500' 
                                                : 
                                                'inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600'
                                            }>
                                            {tab.label}
                                        </button>
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
                                <button onClick={props.handleRetakeQuiz} type='button' className='text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 font-medium rounded-md text-base px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
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

