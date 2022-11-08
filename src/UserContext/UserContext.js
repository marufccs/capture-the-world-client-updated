import React, { createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const UserContext = ({children}) => {
    const [user, setUser] = useState('');
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

    //get user's data
    // Get the user's data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
             setUser(currentUser);
         })
         return () => {
             unsubscribe();
         }
     }, [])

     //log out
     const logOut = () => {
       return signOut(auth)
     } 

    const authInfo = {signUp, signUpWithGoogle, signIn, user, logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;