import React, { createContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'
import { linkWithCredential } from 'firebase/auth'
import { FaChampagneGlasses } from 'react-icons/fa6'
import { useContext } from 'react'


export const UserDataContext = createContext()
function UserContext({children}){

    let [userData,setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)
    

    const getCurrentUser = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUserData(null);
            console.log("No token found, skipping getCurrentUser request.");
            return;
        }
        try {
            let result = await axios.get(
                serverUrl + `/api/user/getCurrentUser`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true 
            })

            setUserData(result.data)
            console.log(result.data)
            
        } catch (error) {
            setUserData(null)
            console.log(error)
            
        }
    }

    useEffect (()=>{
        getCurrentUser()
    },[])
    let value = {
        userData,setUserData,getCurrentUser

    }

    return (
        <div>
            <UserDataContext.Provider value={value}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext
