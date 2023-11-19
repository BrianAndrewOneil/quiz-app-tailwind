import React from 'react';

const ProgressCard = ({
    questions,
    handleProgressToggle,
    handleLinkFromProgress,
}) => {
    return (
        <div className="flex justify-center">
            <div className='w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-lg sm:text-xl font-bold leading-none text-gray-900 dark:text-white'>
                        Your Progress
                    </h2>
                    <button 
                        type="button" 
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-xs sm:text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={handleProgressToggle}
                        >
                        Return to Quiz
                    </button>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-96">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3  w-1/6">
                                    Question
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question) => (
                                <tr 
                                key = {question.id}
                                onClick={() => handleLinkFromProgress(question.id-1)} 
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:underline cursor-pointer"
                                >
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                        {question.id}
                                    </td>
                                    {localStorage.getItem(`question_${question.id}`) != null ? 
                                        <td className="px-6 py-4">Answered</td>
                                        : 
                                        <td className="px-6 py-4  dark:text-white font:semibold">Not answered</td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;
