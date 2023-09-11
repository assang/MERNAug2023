import React, { useEffect } from "react";
import { PageContent } from "./PageContent";

const Page = (props) => {
useEffect(() => {
    console.log("Page rendered")
}, [])
return <PageContent onClick={props.onClick}/>
}
export const MemoizedPage = React.memo(Page)