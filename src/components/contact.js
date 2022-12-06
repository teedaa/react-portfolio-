import React from 'react'

export default function ContactForm() {
    return (
        <div className='container-sm'>
            <h1>Contact Me</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
            <button type='submit' className='submit-button btn btn-round'>Submit</button>
        </div>
    );
};
   