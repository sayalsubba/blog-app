import React from 'react'
import Css from "./post.module.css"
import { h1 } from 'motion/react-client'
import { motion } from 'motion/react'
export default function post({
    post,
    setPost
}) {
    return (
        <>
            <div className={Css["main"]}>

                {post.map((item) => (
                    <div className={Css["mainPrt"]}>
                        <div className={Css['mainPosts']}>
                            <h1>Title: {item.title}</h1>
                            <p>Author: {item.author}</p>
                            <p>Description:{item.description}</p>

                        </div>
                        <div className={Css["btn"]}>
                            <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                            >Edit</motion.button>
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}
