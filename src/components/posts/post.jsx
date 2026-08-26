import React from 'react'
import Css from "./post.module.css"
import { h1 } from 'motion/react-client'
export default function post({
    post,
    setPost
}) {
    return (
        <>
            <div className={Css["main"]}>
                <div >
                    {post.map((item) => (
                       <div className={Css['mainPosts']}>
                        <h1>Title: {item.title}</h1>
                        <p>Author: {item.author}</p>
                        <p>Description:{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
