import React from 'react'
import Css from "./Main.module.css"
import { Link } from 'react-router-dom'
export default function Main() {
    return (
        <div className={Css["main"]}>
            <div className={Css["createPost"]}>

              <Link id='btn'>Create Post</Link>
            </div>
            <div className={Css["showPost"]}>
            </div>
        </div>
    )
}
