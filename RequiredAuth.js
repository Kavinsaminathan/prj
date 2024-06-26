import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export default function RequiredAuth(props) {
    const Auth = useAuth()
    if (!Auth.Admin){
        return<>{props.children}</>
    }
    else{
        return<Navigate to ='/login'/>
    }
}
