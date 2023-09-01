import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

export const Profile = () => {
    const [profileData, setProfiledata] = useState()
    const {id} = useParams()

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        .then((res) => {
            if(res) {
                setProfiledata(res.data)
            }
        })
    }, [])

    
    return(
        <div>
            <h2>Employee profile {id}</h2>
            {profileData ? 
            <div>
                <p>Username: {profileData.username} </p>
                <p>Name: {profileData.name}</p> </div> :
            "Loading"}
            
        </div>
    )
}