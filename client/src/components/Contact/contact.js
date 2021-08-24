import React from 'react'

import './contact.css'

const Contact = () => {

    return (
        <div className='contact-wrapper'>
            <div className='contact-content'>
                <div className='contact-courtesy-text'>
                    THIS is a disclaimer text jus being coutios of how long it may take to eereach out to you. 
                </div>
                <form className='contact-form'>
                    <input className='contact-name' placeholder='NAME BRUH'/>
                    <input className='contact-email' placeholder='PLACE@HOLDER.com'/>
                    <textarea className='contact-body' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                </form>
            </div>
        </div>
    )
}

export default Contact;