import React from 'react'


export default function Footer() {
  return (
    <footer>
        <ul className='list-group-flush list-group-horizontal d-flex horizontal justify-content-evenly'>
            <li className='list-group-item'><a href='https://linkedin.com/in/pengteda-cheng'><img className='footicon' src={require('../img/linked.png')} alt={"Linkedin logo"} /></a></li>
            <li className='list-group-item'><a href='https://github.com/teedaa'><img className='footicon' src={require('../img/github.png')} alt={"Github logo"} /></a></li>
            <li  className='list-group-item'><a href='https://stackoverflow.com/users/20698795/teedaa'><img className='footicon' src={require('../img/stack-overflow.png')} alt={"Stack overflow logo"} /></a></li>
        </ul>
        </footer>
  )
}
