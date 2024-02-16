import React from 'react'
import { Outlet } from 'react-router-dom'
import StakeTopBar from '../topBars/StakeTopBar'

function StakeContainer() {
    return (
        <div className='stake_root'>
            <StakeTopBar />
            <div className="stake_content">
                <Outlet />
            </div>
        </div>
    )
}

export default StakeContainer