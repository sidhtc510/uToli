import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import s from './s.module.css'
import  CheckboxMy  from "../UI/CheckboxMy";
import { Context } from "../../context";


export default function Header({ ...props}) {
const {darkMode, setDarkmode} = React.useContext(Context)

    return (
        // <Box className={s.box_wrap} sx={{ flexGrow: 1 }} {...props}>
        //     <AppBar position="static">
        //         <Toolbar>

        //             <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
        //                 <Link to="/">uToli</Link>
        //             </Typography>

        //             <CheckboxMy checked={darkMode} onChange={()=>setDarkmode(!darkMode)} />
                    
        //             <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
        //                 <MenuIcon />
        //             </IconButton>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
        <div className={s.Header_wrap}  {...props}>
             <Link to="/">uToli</Link>
             <CheckboxMy checked={darkMode} onChange={()=>setDarkmode(!darkMode)} />
        </div>
    );
}
