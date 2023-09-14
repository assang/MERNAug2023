import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MemoizedPage } from "./Page";

export const Home = () => {
    let { userName } = useParams();
    const [count, setCount] = useState(0)



    // useMemo return memoized value
    //const finalPrice = useMemo(() => 10 * 0.05 + 10, [])

    // useCallback
    //const finalPrice = useCallback(() => 10 * 0.05 + 10, [])

    // ComponentDidMount
    useEffect(() => {
        console.log("Home rendered")
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

    const onClick = useCallback(() => {
        console.log("content button clicked")
        setCount(count+1)
    }, [])

    return (
        <div>
        <h1>Welcome to home page, user: {userName} {count}</h1>
        {/* <button onClick={() => setCount(count+1)}>Click</button>
        <MemoizedPage onClick={onClick} /> */}
        {/* Price: {finalPrice()} */}
        </div>

    )
}

