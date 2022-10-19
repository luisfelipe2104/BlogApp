import { createContext, useEffect, useState } from "react";
import axios from "axios";
// stores user's information in the local storage


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // creates a state and set its value to the user info that is in the local storage
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    // logs the user in and set the state to the login data
    const login = async(inputs) => {
        const res = await axios.post("/auth/login", inputs)
        setCurrentUser(res.data)
    }

    // log the user out and erasess it from the local storage
    const logout = async(inputs) => {
        const res = await axios.post("/auth/logout", inputs)
        setCurrentUser(null)
    }

    // updates the local storage info whenever the user state changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        // enables us to use this state everywhere
        <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
    )
}