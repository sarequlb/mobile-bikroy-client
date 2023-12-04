import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser=(profile) =>{
        return updateProfile(auth.currentUser,profile)
    }

    const loginWithEmail = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const emailReset = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
        
    }

    //google and facebook sign in

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const facebookSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,facebookProvider)
    }

    const authInfo = {
        createUser,
        updateUser,
        loginWithEmail,
        logOut,
        user,
        emailReset,
        googleSignIn,
        facebookSignIn,
        loader
        
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;