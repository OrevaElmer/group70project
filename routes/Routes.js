import React from 'react'

import { Routes, Route} from 'react-router-dom'
import SignupPage from '../AccountAuth/Signup'
import LoginPage from '../AccountAuth/Login'
import AuthProvider from '../context/AuthContext'
import ChangePass from '../AccountAuth/Changepass'

const EntryPage = () => {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route exact path="/signup" element={<SignupPage/>}/>
                <Route path="/group70project" element={<LoginPage />} />
                
                <Route path="/changePass" element={<ChangePass />} />
            </Routes>
        </AuthProvider>
        </>
    )
}

export default EntryPage