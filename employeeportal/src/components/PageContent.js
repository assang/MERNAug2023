import { useEffect, useState } from "react"

export const PageContent = (props) => {
    

useEffect(() => {
    console.log("PageContent render")

},[])
return <div>
    <h2>Page contents</h2>
    <button onClick={() => props.onClick()}>Content Click</button>
    </div>
}