
import React from 'react';

export default function About() {
    return(
        <div className="container-fluid">
            <div className="container shadow-lg" id="about">
                <div className="row mb-5 rounded">
                    <div className="col-sm-4 p-4 m-auto aboutText">
                        <h2 className="text-center">About Me</h2>
                        <p>My name is Pengteda, and I currently reside in Lake County, California. My previous academic background includes a Bachelor of Arts in Spanish from Sonoma State University, and a minor in Astronomy. I am currently a student at the UC Berkeley Full Stack Coding Bootcamp and I am set to earn my certificate in mid-December.
                        </p>
                    </div>
                    <div className="col-sm-4 m-auto">
                        <img src={require('../img/me.png')} alt='a portrait of me' className="about"/>
                    </div>
                </div>
            </div>
        </div>
    );
}