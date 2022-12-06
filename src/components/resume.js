import React from 'react'

export default function Resume() {
    return(
        <div className="container shadow-lg resume">
            <h1>Resume</h1>
            <a href="https://docs.google.com/document/d/1T-dFancJc6l2MKePY3_kQGXlyu1eQGDd1cKuegvmC0I/edit?usp=sharing" target="blank" id="resumeLink">
                <btn type="submit" className="btn">View and Download Resume</btn>
            </a>
        </div>
    );
}
