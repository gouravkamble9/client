import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories,products,setProducts } = useContext(Context);
  useEffect(() => {
    getCtegories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((response) =>{
      // console.log(response.data[0].attributes.img.data[0].attributes.url)
     
      setProducts(response);
    }
    );
  };

  const getCtegories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((response) =>{
      // response.data.map((item)=>console.log(item))
      setCategories(response);
      console.log("cat",response)
  
    }
    );
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Products headingText="Popular Products" products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
