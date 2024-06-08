import React from 'react'
import './error.scss'
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="errormain">
            <div className='error'></div>
            <Link to='/' className="errorbutton">
                <button>Go Back<FaAnglesRight /></button>
            </Link>
        </div>
    )
}
