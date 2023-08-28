import { useContext } from "react"
import './Address.css'
import { ThemeContext } from "./ThemeContext"

export const Footer = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <footer className={theme}><a href="">Privacy policy</a></footer>
    )
}