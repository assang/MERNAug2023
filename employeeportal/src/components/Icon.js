import "./icon.css"
export const Icon = (props) => {
    const init = props.value[0]
    return <div><h2 className="icon">{init}</h2></div>
}