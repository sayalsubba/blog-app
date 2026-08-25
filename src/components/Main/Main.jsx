import React from 'react'
import Css from "./Main.module.css"
import { Link, Outlet } from 'react-router-dom'
export default function Main() {
    return (
        <>

            <div className={Css["main"]}>
                <div className={Css["createPost"]}>
                    <Link className={Css.home} to="/">Home</Link>
                    <Link className={Css.link} to="/create">Create Post</Link>
                </div>

                <div className={Css["showPost"]}>
                    <Outlet />
                </div>
            </div>

        </>
    )
}
