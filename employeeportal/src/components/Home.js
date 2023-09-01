import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Home = () => {
    let { userName } = useParams();
    const [count, setCount] = useState(0)

    // ComponentDidMount
    useEffect(() => {
        console.log("useEffect")
    },[])

    // on component load and on dependency update
    useEffect(()=>{
        console.log(count)
    }, [count])

    // unmount
    useEffect(() => {
        return () => {
            console.log("Unmount")
        }
    }, [])

    return (
        <div>
        <h1>Welcome to home page, user: {userName}</h1>
        <button onClick={() => setCount(count+1)}>Click</button>
        </div>

    )
}