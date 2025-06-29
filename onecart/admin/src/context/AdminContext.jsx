import React, { createContext, useEffect } from "react"
import { authDataContext } from "./AuthContext"
import { useContext, useState } from "react"
import axios from "axios"




export const adminDataContext = createContext()
function AdminContext({children}) {
    let [adminData,setAdminData] = useState(null)
    let {serverUrl} = useContext(authDataContext)

    const getAdminData = async () => {
        try {
            let result = await axios.get(serverUrl + '/api/user/getAdmin', {
                withCredentials: true
            })
            setAdminData(result.data)
            console.log(result.data)
        } catch (error) {
            setAdminData(null)
            console.log(error)
            
        }
    }

    useEffect(() => {
        getAdminData()
    }, [])

    let value = { 
        adminData,setAdminData,
        getAdminData
    }
    return (
        <div >
            <adminDataContext.Provider value={value}>
                {children}
            </adminDataContext.Provider>
        </div>
    )
}

export default AdminContext