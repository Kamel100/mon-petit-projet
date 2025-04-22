import { useState } from 'react'
import html from '../assets/images/HTML5_logo_and_wordmark.svg.png'
import css from '../assets/images/css3-logo-png_seeklogo-186678.png'
import javascript from '../assets/images/javascript-logo-javascript-icon-transparent-free-png.webp'
import python from '../assets/images/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png'

const Languages = () => {



    return (
        <>
            <h1>Les langages</h1>

            <div id="languages">
                <img src={html} alt="HTML" height={100} />
                <img src={css} alt="CSS" height={100} />
                <img src={javascript} alt="JavaScript" height={100} />
                <img src={python} alt="Python" height={100} />
            </div>
        </>
    )
}

export default Languages
