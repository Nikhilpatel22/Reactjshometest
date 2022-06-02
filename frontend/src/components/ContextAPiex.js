import React, { useContext } from 'react'
import { Globleinfo } from '../App'

const ContextAPiex = () => {

    const { appcolor } = useContext(Globleinfo);
    return (
        <div>
            <h1 style={{ color: appcolor }}>hello child</h1>
        </div>
    )
}

export default ContextAPiex