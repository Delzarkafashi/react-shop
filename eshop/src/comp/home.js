import React, { useEffect, useState } from "react";
import "./home.css"
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import DetailPage from "./components/DetailPage";
import ImageSlider from "./components/ImageSlider";
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
            <div><ImageSlider /></div>
            <div className="top_banner">
                  <dir className = "contant">
                  <h3>silver aluminum</h3>
                  <h2>Apple Watch</h2>
                  <p>30% off at your first odder</p>
                  <Link to="/shop" className="link">Shop Now</Link>
                </dir>
            </div>
            <div className="trending">
                <div className="container">
                    <div className="left_box">
                        <div className="header">
                            <div className="heading">
                                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                            </div>
                            <div className="cate">
                                <h3 onClick={() => filteracate ("new")}>New</h3>
                                <h3 onClick={() => filteracate ("featured")}>Featured</h3>
                                <h3 onClick={() => filteracate ("top")}>top selling</h3>
                            </div>
                        </div>
                        <div className="products">
                            <div className="container">
                                
                                    
                                    {trendingProduct.map((curElm, index) =>
                                     {
                                        return(
                                            <div key={index} className="box">
                                                <div className="img_box">
                                                    <img src={curElm.image} alt="" ></img>
                                                    <div className="icon">
                                                        <div className="icon_box">
                                                        <li onClick={() => handleDetail(curElm)}><AiFillEye /></li>
                                                        </div>
                                                        <div className="icon_box">
                                                        <AiFillHeart />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                        <h3>{curElm.Name}</h3>
                                                        <p>${curElm.price}</p>
                                                        <button className="btn" onClick={() => addtocart (curElm)}>Add to Cart</button>
                                                    </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                            <button>Show More</button>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="right_container">
                            <div className="testimonial">
                                <div className="head">
                                    <h3>our testimonial</h3>
                                </div>
                                <div className="detail">
                                    <div className="img_box">
                                        <img src="image/T1.avif" alt="testimonial"></img>
                                    </div>
                                    <div className="info">
                                        <h3>stephan robot</h3>
                                        <h4>web designer</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officia qui consequatur soluta delectus adipisci .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter">
                                <div className="head">
                                    <h3>newsletter</h3>
                                </div>
                                <div className="form">
                                    <p>join our malling list</p>
                                    <input type="email" placeholder="E-mail" autoComplete="off"></input>
                                    {/* <input 
                                    type="email" 
                                    value={email} // Antag att du lagrar e-postvärdet i en state-variabel
                                    onChange={(e) => setEmail(e.target.value)} // Uppdatera state när användaren skriver
                                    placeholder="E-mail" 
                                    autoComplete="off"
                                    /> */}

                                    <button>subscribe</button>
                                    <div className="icon_box">
                                        <div className="icon">
                                         <BiLogoFacebook />
                                        </div> 
                                        <div className="icon">
                                         <BiLogoTwitter />
                                        </div>    
                                        <div className="icon">
                                         <BiLogoInstagram />
                                        </div> 
                                        <div className="icon">
                                         <BiLogoYoutube />
                                        </div>               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banners">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <img src="image/Multi-Banner-1.avif" alt="banner" />
                        </div>
                        <div className="box">
                            <img src="image/Multi-Banner-2.avif" alt="banner" />
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="top">
                            <img src="image/Multi-Banner-3.webp" alt="" />
                            <img src="image/Multi-Banner-4.avif" alt="" />
                        </div>
                        <div className="bottom">
                          <img src="image/Multi-Banner-5.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                      <div className="header">
                        <h2>New Product</h2>
                      </div>
                        {newProduct.map((curElm, index) =>
                        {
                            return(
                                <div key={index} className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.image} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className="icon">
                                            <button onClick={() => handleDetail(curElm)}><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button  onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                       }
                    </div>
                    <div className="box">
                      <div className="header">
                        <h2>Featured Product</h2>
                      </div>
                      
                        {featuredProduct.map((curElm, index) =>
                        {
                            return(

                                <div key={index} className="productbox"> 
                                    <div className="img-box">
                                        <img src={curElm.image} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className="icon">
                                            <button onClick={() => handleDetail(curElm)}><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button  onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                      }
                    </div>      
                    <div className="box">
                      <div className="header">
                        <h2>Top Product</h2>
                      </div>
                      
                        {topProduct.map((curElm, index) =>  
                        {
                            return(

                                <div key={index} className="productbox"> 
                                    <div className="img-box">
                                        <img src={curElm.image} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h3>{curElm.Name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className="icon">
                                            <button onClick={() => handleDetail(curElm)}><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button  onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                      }
                    </div>   
                </div>
            </div>
        </div>
        </>
    )
}

export default Home