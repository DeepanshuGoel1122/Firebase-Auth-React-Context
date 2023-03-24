import { createContext, useContext, useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase.js';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    function logOut() {
        return signOut(auth);
    }


    async function googleSignInWithPopup() {
        const googleAuthProvider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(auth, googleAuthProvider);
            console.log(res.user.displayName)
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{
                user,
                loading,
                googleSignInWithPopup,
                logOut,
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
