import React from 'react'
import './profile.scss'
import { useSelector } from 'react-redux'

export default function Profile() {
    const userName = useSelector(state => state.user.users)
    return (
        <div className='profile'>
            <div className="heading">
                {
                    userName.map(item => (
                        <div key={item}>
                            <h5>{item.name}</h5>
                            <p>{item.surname}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
