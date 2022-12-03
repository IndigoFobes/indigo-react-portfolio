import React from 'react';
import BudgetBuddy from "../../assets/budget_buddy.png"
import WeatherToday from "../../assets/weather-screenshot-copy.png"
import CodingQuiz from "../../assets/coding-quiz.png"
import CodeBlog from "../../assets/code-blog.png"
import CreateReadme from "../../assets/create-readme.png"
import MySQLMan from "../../assets/mysql-manager.png"
import { BsGithub } from "react-icons/bs"

export default function AboutMe () {
    return (
        <div className='container-lg gx-5 h-100'>
            <div className='py-7 px-10'>
                <h1 className='text-4xl text-indigo-900' >Portfolio</h1>
                <p className='pb-2 text-lg font-semibold text-indigo-500'>
                Check out some of my recent work below.
                </p>
            </div>
            {/* container to hold all rows of apps */}
            <div className='portfolio container-lg gx-5 h-100 text-center'>
                {/* First row of two apps */}
                    <div className='shadow-lg rounded-md bg-white m-4 px-3 pt-2 pb-4 mx-auto'>
                        <h2 className='text-lg font-semibold'>Budget Buddy</h2>
                        <figure>
                            <a href="https://budget-buddy-group-project.herokuapp.com/" target="blank"><img src={BudgetBuddy} alt="Budget Buddy App dashboard, with user data and buttons to add data; red, white, and purple."></img></a>
                        </figure>
                        <div>
                            <a href = "https://github.com/shawnbandy/FinancialBudgeting" target="blank">
                                <BsGithub className='text-2xl text-indigo-900 mx-auto mt-3'/>      
                            </a>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-md bg-white m-4 px-3 pt-2 pb-4 mx-auto'>
                        <h2 className='text-lg font-semibold'>Weather Today</h2>
                        <figure>
                            <a href="https://indigofobes.github.io/weather-today-app/develop/" target="blank"><img src={WeatherToday} alt="Weather Today dashboard with search history available to view, and we can see the weather for atlanta on August 15, 2022."></img></a>
                        </figure>
                        <div>
                            <a href = "https://github.com/IndigoFobes/weather-today-app" target="blank">
                                <BsGithub className='text-2xl text-indigo-900 mx-auto mt-3'/>      
                            </a>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-md bg-white m-4 px-3 pt-2 pb-4 mx-auto'>
                        <h2 className='text-lg font-semibold'>Coding Quiz</h2>
                        <figure>
                            <a href="https://indigofobes.github.io/coding-quiz-time/develop/" target="blank"><img src={CodingQuiz} alt="Coding quiz with countdown that asks user basic coding questions; blue and white."></img></a>
                        </figure>
                        <div>
                            <a href = "https://github.com/IndigoFobes/coding-quiz-time" target="blank">
                                <BsGithub className='text-2xl text-indigo-900 mx-auto mt-3'/>      
                            </a>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-md bg-white m-4 px-3 pt-2 pb-4 mx-auto'>
                        <h2 className='text-lg font-semibold'>Doing the Code Thing | Blog</h2>
                        <figure>
                            <a href="https://quiet-sierra-65975.herokuapp.com/" target="blank"><img src={CodeBlog} alt="A coding blog space; dashboard with login and signup buttons at top left; blogs from other users are visible from this page. "></img></a>
                        </figure>
                        <div>
                            <a href = "https://github.com/IndigoFobes/doing-the-code-thing" target="blank">
                                <BsGithub className='text-2xl text-indigo-900 mx-auto mt-3'/>      
                            </a>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-md bg-white m-4 px-3 pt-2 pb-4 mx-auto'>
                        <h2 className='text-lg font-semibold'>Create README | Command Line</h2>
                        <figure>
                            <a href="https://github.com/IndigoFobes/create-readme" target="blank"><img src={CreateReadme} alt="Command line application. User is responding to questions in terminal about the readme they are trying to create."></img></a>
                        </figure>
                        <div>
                            <a href = "https://github.com/IndigoFobes/create-readme" target="blank">
                                <BsGithub className='text-2xl text-indigo-900 mx-auto mt-3'/>      
                            </a>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-md bg-white m-4 px-3 pt-2 pb-4 mx-auto'>
                        <h2 className='text-lg font-semibold'>MySQL Employee Manager | Command Line</h2>
                        <figure>
                            <a href="https://github.com/IndigoFobes/mysql-employee-manager" target="blank"><img src={MySQLMan} alt="Command Line application. User is navigating through options to add, update, view, and delete items from their employee database."></img></a>
                        </figure>
                        <div>
                            <a href = "https://github.com/IndigoFobes/mysql-employee-manager" target="blank">
                                <BsGithub className='text-2xl text-indigo-900 mx-auto mt-3'/>      
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}