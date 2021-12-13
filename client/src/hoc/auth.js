import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../_actions/user_action'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute=null) {
    function AuthenticationCheck(props) {
        const history = useHistory()
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(auth())
            .then(response => {
                if(response.payload.isAuth) {
                    history.push('/')
                } else {
                    history.push('/login')
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    
    return AuthenticationCheck    
}