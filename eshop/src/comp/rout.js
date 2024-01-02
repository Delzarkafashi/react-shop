import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Cart from "../pages/cart";
import Contact from "../pages/contact";
import TV from "../pages/cate/tv";
import Laptop from "../pages/cate/laptop";
import Speaker from "../pages/cate/speaker";
import Phone from "../pages/cate/phone";
import Headphones from "../pages/cate/headphones";

const Rout = ({shop, Filter, allcateFilter, addtocart, cart, setCart}) =>{
    return (
        <>
        <Routes>
           <Route path="/" element={<Home addtocart={addtocart}/>}/>
           <Route path="/cart" element={<Cart cart={cart} setCart ={setCart}/>} />
           <Route path="shop" element={<Shop shop={shop} Filter={Filter} allcateFilter={allcateFilter} addtocart={addtocart}/>} />
           <Route path="/contact" element={<Contact />}/>
           <Route path="/tv" element={<TV shop={shop} addtocart={addtocart}/>}/>
           <Route path="/laptop" element={<Laptop shop={shop} addtocart={addtocart}/>}/>
           <Route path="/speaker" element={<Speaker shop={shop} addtocart={addtocart}/>}/>
           <Route path="/phone" element={<Phone shop={shop} addtocart={addtocart}/>}/>
           <Route path="/headphones" element={<Headphones shop={shop} addtocart={addtocart}/>}/>
        </Routes> 
        </>
    )
}


export default Rout