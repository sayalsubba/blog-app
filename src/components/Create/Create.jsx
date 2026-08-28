import React from 'react'
import Css from "./Create.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { motion, scale } from "motion/react";
import { Button } from '@mui/material';
import { h1 } from 'motion/react-client';
export default function Create({
    title,
    author,
    description,
    setTitle,
    setAuthor,
    setDescription,
    post,
    setPost,
}) {
    const handleSave = () => {
        setAuthor("");
        setTitle("");
        setDescription("");
        if (!title || !author || !description) {
            alert("please enter something")
        }
        else {
            const newPost = {
                id: Date.now(),
                title: title,
                author: author,
                description: description,
            }
            setPost((prev) => {
                return [...prev, newPost]
            })
        }

    }
    console.log(post)
    return (
        <>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            ></Box>
            <div className={Css["main"]}>
                <div className={Css["mainPrt"]}>
                    <div className={Css["inputField"]}>

                        <label htmlFor="">Title:  </label>
                        <br />
                        <input type="text" value={title} onChange={(e) => {

                            setTitle(e.target.value)
                        }} />
                        <br />
                        <br />
                        <label htmlFor="">Author: </label>
                        <br />
                        <input type="text" value={author} onChange={(e) => {
                            setAuthor(e.target.value)
                        }} />
                        <br />
                        <br />
                        <label htmlFor="">Description:</label>
                        <br />
                        <br />
                        <TextField
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                        />
                        <br />
                        <br />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            handleSave()
                        }}
                    >Save</motion.button>

                </div>
            </div >
        </>
    )
}
