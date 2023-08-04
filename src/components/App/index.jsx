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
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Context } from "../../context";
import ModalWindow from "../UI/ModalWindow";

function App() {
    const categories = useSelector(({ categories }) => categories.list);
    const products = useSelector(({ products }) => products);
    const orderHistory = useSelector(({ orderHistory }) => orderHistory);
    const currentOrder = useSelector((state) => state.currentOrder.list);

    const [amountStr, setAmount] = useState(0);
    const amount = parseFloat(amountStr);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [darkMode, setDarkmode] = useLocalStorage("darkMode", false);

    const result = currentOrder.map((item) => {
        const product = products.find(({ id }) => id === item.id);
        return { ...product, ...item };
    });

    useEffect(() => {
        setAmount(result.reduce((acc, el) => acc + el.price * el.count, 0).toFixed(2));
    });

    return (
        <Context.Provider value={{ darkMode, setDarkmode, amount, setAmount, isModalOpen, setIsModalOpen }}>
            <ModalWindow className={isModalOpen ? "active" : ""} {...{ result }} />
            <Grid>
                <Header style={{ gridArea: "head" }} />
                <CategoryMenu categories={categories} style={{ gridArea: "menu" }} />
                <Content style={{ gridArea: "content" }}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/products_category/:category_title" element={<ProductsPage {...{ products, categories }} />} />
                    </Routes>
                </Content>
                <CurrentOrder style={{ gridArea: "current_order" }} {...{ result }} />
                <Amount style={{ gridArea: "amount" }} />
            </Grid>
        </Context.Provider>
    );
}

export default App;
