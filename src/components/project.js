import React from 'react'

export default function Projects(props) {
    return(
        <div className="container m-auto shadow-lg" id="portfolio">
        <div>
            <div className="row justify-content-center">
                <h2>Projects</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 p-2">
                    <div className="p-2">
                        <h3>Mass Matchup</h3>
                        <a href="https://github.com/theDomConrad/Mass-Matchup" target="_blank">
                            <img src={require('../img/matchup.png')} alt="Mass Matchup" /></a>
                        <a href="https://mass-matchup.herokuapp.com/" target="_blank">Deployed site</a>
                    </div>
                    <div className="p-2">
                        <h3>Note Taker</h3>
                        <a href="https://github.com/teedaa/note-taker" target="_blank">
                            <img src={require('../img/note-taker.png')} alt="Note Taker" /></a>
                        <a href="https://teedaa.github.io/note-taker/" target="_blank">Deployed Site</a>
                    </div>
                    <div className="p-2" >
                        <h3>Work Day Scheduler</h3>
                        <a href="https://github.com/teedaa/work-day-scheduler/" target="_blank">
                            <img  src={require('../img/work-day.png')} style={{ width: "80%" }} alt="Work Day Scheduler" /></a>
                        <div>
                        <a href="https://teedaa.github.io/work-day-scheduler" target="_blank">Deployed Site</a>
                        </div>
                    </div>
                    </div>
                <div className="col-6 p-2">
                    <div className="p-2">
                        <h3>Weather Dashboard</h3>
                        <a href="https://github.com/teedaa/work-day-scheduler/" target="_blank">
                            <img  src={require('../img/weather.png')} style={{ width: "80%" }} alt="Weather Dashboard" /></a>
                        <a href="https://teedaa.github.io/weather-dashboard" target="_blank">Deployed Site</a>
                    </div>
                    <div className="p-2">
                        <h3>Text Editor</h3>
                        <a href="https://https://github.com/teedaa/text-editor" target="_blank">
                            <img src={require('../img/editor.png')} style={{ width: "80%", height: "50%" }} alt="Text Editor" /></a>
                        <div>
                            <a href="https://glacial-shore-80212.herokuapp.com/" target="_blank">Deployed Site</a>
                        </div>
                    </div>
                    <div className="p-2">
                        <h3>Mickey N' Friends Finder</h3>
                        <a href="https://github.com/wseban/Mickey-n-Friends-Finder" target="_blank">
                            <img  src={require('../img/mickey.png')} alt="Mickey N' Friends Finder"/></a>
                        <a href="https://wseban.github.io/Mickey-n-Friends-Finder/" target="_blank">Deployed Site</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
