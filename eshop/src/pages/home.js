import React, { useEffect, useState } from "react";
import "./home.css"
import { Link } from "react-router-dom";
import Homeproduct from "../comp/home_product";
import DetailPage from "../comp/components/DetailPage";
import ImageSlider from "../comp/components/ImageSlider";
import Newsletter from "../comp/components/Newsletter";
import WebDesignerDetail from "../comp/components/WebDesignerDetail";
import ReklamssBox from "../comp/components/ReklamssBox";
import TrendingProducts from "../comp/components/TrendingProducts";
const Home = ({addtocart,}) => {
    //product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturdProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])


  //här är det för AiFillEye
  // Tillstånd för detaljsida
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Hantera klick på öga-ikonen
  const handleDetail = (product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };
    //trednding product
    const [ trendingProduct, setTrendingProduct ] = useState(Homeproduct)

    //filter of tranding product
    const filteracate = (x) =>
    {
        const filterproduct = Homeproduct.filter((curElm) =>
        {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }

    //All trendoing Product
    const allTrendingProduct = () => 
    {
        setTrendingProduct(Homeproduct)
    }

    //product Type
    useEffect(() =>
    {
        productcategory()
    }, []);  //fixat här med    , []
    const productcategory = () =>
    {
        //new product
        const newcategory = Homeproduct.filter((x)  => 
        {
            return x.type === "new"
        })
        setNewProduct (newcategory)

        //featurd produc
        const featuredcategory = Homeproduct.filter((x)  => 
        {
            return x.type === "featured"
        })
        setFeaturdProduct (featuredcategory)
        //top product
        const topcategory = Homeproduct.filter((x)  => 
        {
            return x.type === "top"
        })
        setTopProduct (topcategory)
    } 
    return (
        <>

        {/* här är det för AiFillEye */}
        {showDetail && selectedProduct && (
        <DetailPage
          product={selectedProduct}
          addtocart={addtocart}
          closeDetail={() => {
            setShowDetail(false);
            setSelectedProduct(null);
          }}
        />
      )}



        <div className="home">
            <div><ImageSlider/></div>
            <div className="top_banner">
                  <div className = "contant">
                  <h3>silver aluminum</h3>
                  <h2>Apple Watch</h2>
                  <p>30% off at your first odder</p>
                  <Link to="/watch" className="link">Shop Now</Link>
                </div>
            </div>
            <div className="trending">
                <div className="container">
                    <div className="left_box">
                    <TrendingProducts
                trendingProduct={trendingProduct} 
                handleDetail={handleDetail} 
                addtocart={addtocart} 
                allTrendingProduct={allTrendingProduct}
                filteracate={filteracate}
            />
                    </div>
                    <div className="right_box">
                        <div className="right_container">
                            <div className="testimonial">
                                <div className="head">
                                    <h3>our testimonial</h3>
                                </div>
                                <WebDesignerDetail/>
                            </div>
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
                <ReklamssBox/>
        </div>
        </>
    )
}

export default Home