import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import { sortAction } from "../../store/slices/productsSlice";
import { useDispatch } from "react-redux";
import { sortOptions } from "../../data/sortOptions";
import s from './s.module.css'

export default function FiltersComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {searchUtoli, setSearchUtoli } = useContext(Context);

    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: "auto",
        },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 1),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            // transition: theme.transitions.create("width"),
            width: "20ch",
            // [theme.breakpoints.up("sm")]: {
            //     width: "12ch",
            //     "&:focus": {
            //         width: "20ch",
            //     },
            // },
        },
    }));

    const search = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                setSearchUtoli(e.target.value);
                navigate("/finded_products");
            }
        }
    };
    const sortHandle = (e) => {
        dispatch(sortAction(e.target.value));
    };

    return (
        <div>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase defaultValue={searchUtoli} placeholder="Search…" inputProps={{ "aria-label": "search" }} onKeyUp={search} />
            </Search>

            <select onChange={sortHandle} className={s.FiltersComponent_select}>
                {sortOptions.map((el) => (
                    <option value={el.value}>{el.title}</option>
                ))}
            </select>
        </div>
    );
}
