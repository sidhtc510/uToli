import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
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
import { searchAction } from "../../store/slices/productsSlice";

function App() {
    const dispatch = useDispatch();

    const categories = useSelector(({ categories }) => categories.list);
    const products = useSelector(({ products }) => products);
    const [amountStr, setAmount] = useState(0);
    const amount = parseFloat(amountStr);

    let currentOrder = useSelector((state) => state.currentOrder);
    currentOrder = { ...currentOrder, orderAmount: amount };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [darkMode, setDarkmode] = useLocalStorage("darkMode", false);
    const [searchUtoli, setSearchUtoli] = useLocalStorage("searchUtoli", "");

    const result = currentOrder.list.map((item) => {
        const product = products.find(({ id }) => id === item.id);
        return { ...product, ...item };
    });

    useEffect(() => {
        setAmount(result.reduce((acc, el) => acc + el.price * el.count, 0).toFixed(2));
    });

    useEffect(() => {
        dispatch(searchAction(searchUtoli));
    }, [dispatch, searchUtoli, products]);

    // console.log("darkMode", darkMode);
    // console.log("isModalOpen",isModalOpen);

    return (
        <Context.Provider value={{ darkMode, setDarkmode, amount, setAmount, isModalOpen, setIsModalOpen, searchUtoli, setSearchUtoli }}>
            <ModalWindow className={isModalOpen ? "active" : ""} {...{ result }} />
            <Grid className={darkMode ? "dark" : ""}>
                <Header style={{ gridArea: "head" }} />
                <CategoryMenu categories={categories} style={{ gridArea: "menu" }} />
                <Content style={{ gridArea: "content" }}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/products_category/:category_title" element={<ProductsPage {...{ products, categories }} />} />
                        <Route path="/finded_products" element={<ProductsPage {...{ products }} />} />
                    </Routes>
                </Content>
                <CurrentOrder style={{ gridArea: "current_order" }} {...{ result }} />
                <Amount style={{ gridArea: "amount" }} />
            </Grid>
        </Context.Provider>
    );
}

export default App;
