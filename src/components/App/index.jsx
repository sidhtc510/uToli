import "../../App.css";
import { useSelector } from "react-redux";
import Header from "../Header";
import MainPage from "../Pages/MainPage";
import CategoryPage from "../Pages/CategoryPage";
import { Routes, Route } from "react-router-dom";
import CategoryMenu from "../CategoryMenu";
import Grid from "../UI/Grid";
import Content from "../UI/Content";

function App() {
    const categories = useSelector(({ categories }) => categories.list);
    const products = useSelector(({ products }) => products);

    return (
        <Grid>
            <Header style={{ gridArea: "head" }} />
            <CategoryMenu categories={categories} style={{ gridArea: "menu" }} />
            <Content style={{ gridArea: "content" }}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/category/:category_id" element={<CategoryPage />} />
                </Routes>
            </Content>
        </Grid>
    );
}

export default App;
