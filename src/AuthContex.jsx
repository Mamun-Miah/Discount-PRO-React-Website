import { createContext } from "react";
import { auth } from "../firebase.init";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContextProvider = createContext(null);



const AuthContex = ({ children }) => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] =useState(true);

    const register = async (email, password, displayName, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const registeredUser = userCredential.user;

            // Update user profile
            await updateProfile(registeredUser, {
                displayName,
                photoURL,
            });

            setUser(registeredUser); // Update user state
            return registeredUser;
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (provider) => {

        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = () => {
        return auth.signOut();
    };

    const authinfo = {
        user,
        register,
        login,
        googleSignIn,
        logout,

    }

    return (
        <AuthContextProvider.Provider value={authinfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthContex;