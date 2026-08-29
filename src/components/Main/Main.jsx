import React from 'react'
import Css from "./Main.module.css"
import { Link, Outlet } from 'react-router-dom'
import { h1 } from 'motion/react-client'
export default function Main(
    {
        post,
        setPost
    }
) {
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
