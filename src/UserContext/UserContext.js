import React, { createContext} from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const UserContext = ({children}) => {
    const auth = getAuth(app);

    // Sign Up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign up with google
    const provider = new GoogleAuthProvider();
    const signUpWithGoogle = () => {
     return signInWithPopup(auth, provider)
    }

    //sign in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {signUp, signUpWithGoogle, signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;