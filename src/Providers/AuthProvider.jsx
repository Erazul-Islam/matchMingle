/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
                if(currentUser){
                    const userInfo = {email: currentUser.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token)
                        }
                    })
                }else{
                    localStorage.removeItem('access-token')
                }
            setLoading(false)
        })
        return () => {
            unsubsCribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        googleSignIn,
        signInUser,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;