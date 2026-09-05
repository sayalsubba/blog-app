import React from 'react'
import Css from "./post.module.css"
import { motion } from 'motion/react'
import { Outlet } from 'react-router-dom'
import ShowEdit from "../ShowEdit/showEdit"
export default function post({
    title,
    author,
    description,
    setTitle,
    setAuthor,
    setDescription,
    post,
    setPost,
    edit,
    setEdit,
    showEdit,
    setShowEdit,
    selectedPost,
    setSelectedPost
}) {
    const handleEdit = (id) => {
        const postItem = post.find((post) => post.id === id)
        setTitle(postItem.title);
        setAuthor(postItem.author);
        setDescription(postItem.description);
        setEdit(id);
        setShowEdit(true);

    }
    console.log(edit);
    return (

        <>
            <div className={Css["main"]}>

                {post.map((item) => (
                    <div key={item} className={Css["mainPrt"]}>
                        <div className={Css['mainPosts']}>
                            <p>Id: {item.id}</p>
                            <h1>Title: {item.title}</h1>
                            <p>Author: {item.author}</p>
                            <p>Description:{item.description}</p>

                        </div>
                        <div className={Css["btn"]}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    handleEdit(item.id)
                                }}
                            >Edit</motion.button>
                        </div>
                    </div>

                ))}
                {showEdit && (
                    <ShowEdit
                        onClose={() => (
                            setShowEdit(false)
                        )}
                    />

                )
                }
            </div>

        </>
    )
}
