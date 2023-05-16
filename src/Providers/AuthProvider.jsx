import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const googleLogin = (email, password) => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        googleLogin,
        logout, 
        userRegister,
        userLogin,
        loading
    }

    //current user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)           

            if(currentUser && currentUser.email){
                const loggedUser = {
                    userEmail: currentUser?.email
                }

                fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.token);
                    localStorage.setItem('volunteerToken', data.token)
                })
            }
            else{
                localStorage.removeItem('volunteerToken')
            }

              
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;