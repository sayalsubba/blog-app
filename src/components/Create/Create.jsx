import React from 'react'
import Css from "./Create.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function Create() {
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

                        <input type="text" />
                        <br />
                        <br />
                        <label htmlFor="">Content: </label>
                        <br />

                        <input type="text" />
                        <br />
                        <br />
                        <label htmlFor="">Description:</label>
                        <br />
                        <br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}

                        />
                        <br />
                        <br />
                    </div>
                    <Button>Save </Button>
                </div>
            </div>
        </>
    )
}
