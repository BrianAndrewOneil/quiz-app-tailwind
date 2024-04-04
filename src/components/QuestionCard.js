import React from 'react';

const QuestionCard = ({
    quizLength,
    question,
    selectedAnswerID,
    handleAnswerOptionClick,
    handleNextQuestion,
    handlePrevQuestion,
    handleScoreQuiz,
    handleClearAnswers,
    handleProgressToggle,
}) => {
    return (
        <div className="flex justify-center">
            <div className='w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Question {question.id} of {quizLength}
                    </h2>
                    <button 
                        type="button" 
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={handleProgressToggle}
                    >
                        Progress
                    </button>
                </div>
                <div className="flow-root">
                    <hr className=" border-gray-200 sm:mx-auto dark:border-gray-300" />
                    <div className='px-4' action=''>
                        <p className="my-6 font-thin text-gray-100 text-lg dark:text-gray-100">{question.questionText}</p>
                        {question.answerOptions.map((answerOption) => (
                            <button
                                key={answerOption.answerID}
                                onClick={() => handleAnswerOptionClick(answerOption.answerID)}
                                className={
                                    selectedAnswerID === answerOption.answerID
                                    ? 'w-full text-left font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-500'
                                    : 'w-full text-left font-thin text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-base px-5 py-2.5 mr-2 mb-2 dark:border-gray-600 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                                }
                            >
                                {answerOption.answerText}
                            </button>
                        ))}

                        <div className='flex justify-center p-4'>
                            <button
                                onClick={handlePrevQuestion}
                                type='button'
                                className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-full text-sm px-5 py-2.5 mr-6 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                            >
                                Prev
                            </button>
                            <button
                                onClick={handleNextQuestion}
                                type='button'
                                className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                            >
                                Next
                            </button>
                        </div>
                        <hr className="mb-2 border-gray-200 sm:mx-auto dark:border-gray-300 lg:mb-2" />
                    </div>
                </div>

                <div className='flex justify-center pt-4'>
                    <button onClick={handleScoreQuiz} type='button' className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-7 py-2.5 mr-6 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'>
                        Score My Quiz
                    </button>
                    <button onClick={handleClearAnswers} type='button' className='text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                        Clear My Answers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
