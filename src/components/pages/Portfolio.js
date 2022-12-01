import React from 'react';
import BudgetBuddy from "../../assets/budget_buddy.png"
import WeatherToday from "../../assets/weather-screenshot-copy.png"

export default function AboutMe () {
    return (
        <div className='port-cont container-lg gx-5 h-100'>
            <h1>Portfolio</h1>
            <p>
                Check out some of my recent work below.
            </p>
            {/* container to hold all rows of apps */}
            <div className='portfolio container-lg gx-5 h-100 text-center'>
                {/* First row of two apps */}
                <div className='row'>
                    <div className='col project m-4 p-2'>
                        <h2>Budget Buddy</h2>
                        <figure>
                            <a href="https://budget-buddy-group-project.herokuapp.com/" target="blank"><img src={BudgetBuddy} alt="Budget Buddy App dashboard, with user data and buttons to add data; red, white, and purple."></img></a>
                        </figure>

                    </div>
                    <div className='col project m-4 p-2'>
                        <h2>Weather Today</h2>
                        <figure>
                            <a href="https://indigofobes.github.io/weather-today-app/develop/" target="blank"><img src={WeatherToday} alt="Weather Today dashboard with search history available to view, and "></img></a>
                        </figure>
                    </div>
                </div>
                <div className='row'>
                    <div className='col project m-4 p-2'>
                        <h2>Project 3</h2>
                    </div>
                    <div className='col project m-4 p-2'>
                        <h2>Project 4</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col project m-4 p-2'>
                        <h2>Project 5</h2>
                    </div>
                    <div className='col project m-4 p-2'>
                        <h2>Project 6</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}