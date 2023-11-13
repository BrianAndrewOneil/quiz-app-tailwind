import React from "react"
import { faHand, faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-2xl flex flex-wrap items-baseline justify-between mx-auto px-2 py-1">
                <div className="flex items-center">
                    <span className="hidden md:block pr-2"><FontAwesomeIcon icon={faPersonCircleQuestion} size="2xl" style={{color: "#0ea5e9",}} /> </span>
                    <span className="self-center text-lg md:text-xl font-semibold whitespace-nowrap dark:text-white"> Quiz App Built with React & Tailwind</span>
                </div>
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full" id="navbar-hamburger">
                    <ul className="flex flex-col text-sm sm:text-lg font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                        <a href="https://brianoneil.netlify.app/" target="_blank" className="text-right block mr-1 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><FontAwesomeIcon icon={faHand} style={{color: "#0ea5e9",}} shake /> About me</a>
                        </li>
                        <li>
                        <a href="https://react.dev/" target="_blank" className="text-right block mr-1 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About react</a>
                        </li>
                        <li>
                        <a href="https://github.com/BrianAndrewOneil/quiz-app-tailwind" target="_blank" className="text-right block mr-1 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">See this code on my github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}