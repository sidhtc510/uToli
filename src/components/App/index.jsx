import "../../App.css";
import { useSelector } from "react-redux";
import Header from "../Header";
import MainPage from "../Pages/MainPage";
import ProductsPage from "../Pages/ProductsPage";
import { Routes, Route } from "react-router-dom";
import CategoryMenu from "../CategoryMenu";
import Grid from "../UI/Grid";
import Content from "../UI/Content";
import CurrentOrder from "../CurrentOrder";
import Amount from "../Amount";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Context } from "../../context";

function App() {
    const categories = useSelector(({ categories }) => categories.list);
    const products = useSelector(({ products }) => products);
    const orderHistory = useSelector(({ orderHistory }) => orderHistory);
    const [amount, setAmount] = useState(0);
    const [darkMode, setDarkmode] = useLocalStorage("darkMode", false);

    // console.log("App - orderHistory state", orderHistory);
    return (
        <Context.Provider value={{ darkMode, setDarkmode, amount, setAmount }}>
            <Grid>
                <Header style={{ gridArea: "head" }} />
                <CategoryMenu categories={categories} style={{ gridArea: "menu" }} />
                <Content style={{ gridArea: "content" }}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/products_category/:category_title" element={<ProductsPage {...{ products, categories }} />} />
                    </Routes>
                </Content>
                <CurrentOrder style={{ gridArea: "current_order" }} />
                <Amount style={{ gridArea: "amount" }} />
            </Grid>
        </Context.Provider>
    );
}

export default App;
