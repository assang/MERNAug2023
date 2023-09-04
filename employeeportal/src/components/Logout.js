import { useEffect, useState } from "react"

export const Logout = () => {

    const [logoutState, setLogoutState] = useState()

    useEffect(() => {
        sessionStorage.removeItem('token')
        if(sessionStorage.getItem('token')) {
            setLogoutState(false)
        } else {
            setLogoutState(true)
        }
        
    },[])

    return(
        <div>
            {logoutState ? <h2>User logged out</h2> : <h2>Logging out..</h2>}
        </div>
    )
}