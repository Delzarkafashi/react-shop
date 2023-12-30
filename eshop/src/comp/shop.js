import React, { useState } from 'react';
import "./shop.css";
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import DetailPage from './components/DetailPage';

const Shop = ({ shop, Filter, allcateFilter, addtocart }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleDetail = (product) => {
        setSelectedProduct(product);
        setShowDetail(true);
    };

    const closedetail = () => {
        setShowDetail(false);
        setSelectedProduct(null);
    };

    return(
        <>
            {
                showDetail && selectedProduct &&
                <DetailPage product={selectedProduct} addtocart={addtocart} closeDetail={closedetail} />
            }
            <div className="shop">
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left_box">
                        <div className="category">
                            <div className="header">
                                <h3>All categories</h3>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={() => allcateFilter()}># All</li>
                                    <li onClick={() => Filter("tv")}># tv</li>
                                    <li onClick={() => Filter("laptop")}># laptop</li>
                                    <li onClick={() => Filter("watch")}># watch</li>
                                    <li onClick={() => Filter("speaker")}># speaker</li>
                                    <li onClick={() => Filter("electronics")}># electronics</li>
                                    <li onClick={() => Filter("headphone")}># headphone</li>
                                    <li onClick={() => Filter("phone")}># phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner">
                            <div className="img_box">
                                <img src="image/shop_left.avif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                <img src="image/shop_top.webp" alt="" />
                            </div>
                        </div>
                        <div className="product_box">
                            <h2>Shop product</h2>
                            <div className="product_container">
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <div key={curElm.Id} className="box">
                                                <div className="img_box">
                                                    <img src={curElm.image} alt="" />
                                                    <div className="icon">
                                                        <li><AiFillHeart /></li>
                                                        <li onClick={() => handleDetail(curElm)}><AiFillEye /></li>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>$ {curElm.price}:-</p>
                                                    <button onClick={() => addtocart(curElm)}>Add to cart</button>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;



// import React, { useState } from "react";
// import "./shop.css"
// import { AiFillEye, AiFillHeart, AiOutlineClose} from "react-icons/ai";

// const Shop = ({shop, Filter, allcateFilter, addtocart}) => {
//     //toggle producy detail
//     const [showDetail, setShowDetail] = useState(false)
//     //detail page data
//     const [detail, setDetail] =useState([])
//     //showing detail box
//     const detailpage = (product) =>
//     {
//         const detaildata = ([{product}])
//         const productdetail = detaildata[0]["product"]
//         // console.log(productdetail)
//         setDetail(productdetail)
//         setShowDetail(true)
//     }
  
//     //closs button for detail
//     const closedetail = () =>
//     {
//         setShowDetail(false)
//     }
//     return(
    
//         <>
//      {
//         showDetail ?
//         <>
//         <div className="product_detail">
//             <button className="close_btn" onClick={closedetail}><AiOutlineClose/></button>
//             <div className="container">
//                 <div className="img_box">
//                     <img src={detail.image} alt="" />
//                 </div>
//                 <div className="info">
//                     <h4># {detail.cat}</h4>
//                     <h2> {detail.Name}</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga facere in neque sapiente aliquId unde ipsum, atque accusamus laborum!</p>
//                     <h3>${detail.price}:-</h3>
//                     <button onClick={() => addtocart (detail)}>Add to cart</button>
//                 </div>
//             </div>
//         </div>
//         </>
//         : null
//      }
//         <div className="shop">
//             <h2># shop</h2>
//             <p>Home . shop</p>
//             <div className="container">
//                 <div className="left_box">
//                     <div className="category">
//                         <div className="header">
//                             <h3>All categories</h3>
//                         </div>
//                         <div className="box">
//                             <ul>
//                                 <li onClick={() => allcateFilter ()}># All</li>
//                                 <li onClick={() => Filter ("tv")}># tv</li>
//                                 <li onClick={() => Filter ("laptop")}># laptop</li>
//                                 <li onClick={() => Filter ("watch")}># watch</li>
//                                 <li onClick={() => Filter ("speaker")}># speaker</li>
//                                 <li onClick={() => Filter ("electronics")}># electronics</li>
//                                 <li onClick={() => Filter ("headphone")}># headphone</li>
//                                 <li onClick={() => Filter ("phone")}># phone</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="banner">
//                         <div className="img_box">
//                             <img src="image/shop_left.avif" alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="right_box">
//                     <div className="banner">
//                         <div className="img_box">
//                             <img src="image/shop_top.webp" alt="" />
//                         </div>
//                     </div>
//                     <div className="product_box">
//                         <h2>Shop product</h2>
//                         <div className="product_container">
//                             {
//                                 shop.map((curElm) =>
//                                 {
//                                     return(
//                                         <div key={curElm.Id} className="box">
//                                             <div className="img_box">
//                                                 <img src={curElm.image} alt="" />
//                                                 <div className="icon">
//                                                     <li><AiFillHeart /></li>
//                                                     <li onClick={() => detailpage (curElm)}><AiFillEye /></li>
//                                                 </div>
//                                             </div>
//                                             <div className="detail">
//                                                 <h3>{curElm.Name}</h3>
//                                                 <p>$ {curElm.price}:-</p>
//                                                 <button onClick={() => addtocart (curElm)}>Add to cart</button>
//                                             </div>
//                                         </div>
//                                     )
//                                 }) 
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Shop
