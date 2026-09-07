import React from 'react'
import Css from "./showEdit.module.css"
import { input } from 'motion/react-client'
import TextField from '@mui/material/TextField';

export default function showEdit(
    { onClose,
        selectedPost,
        title,
        setTitle,
        author,
        setAuthor,
        description,
        setDescription,
        setSelectedPost,
        edit,
        showEdit,
        post,
        setPost,
    }
) {
    const handleSave = () => {
        if (edit.id === post.id) {
            alert("hello")
        }
    }
    return (
        <>
            <div className={Css["main"]}>
                <div className={Css["mainPrt"]}>
                    <div className={Css["inpt"]}>
                        <label htmlFor="">Title:</label>
                        <input type="text" value={selectedPost.title} onChange={(e) => setSelectedPost(e.target.value)} />
                        <br />
                        <label htmlFor="">Author:</label>
                        <input type="text" value={selectedPost.author} onChange={(e) => setSelectedPost(e.target.value)} />
                        <br />
                        <label htmlFor="">Description:</label>
                        <br />
                        <br />
                        <TextField
                            value={selectedPost.description}
                            onChange={(e) => {
                                setSelectedPost(e.target.value)
                            }}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                        />
                    </div>
                    <div className={Css["mainPrtBtn"]}>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={() => { handleSave() }}>Save</button>
                    </div>
                </div>

            </div>

        </>
    )
}
