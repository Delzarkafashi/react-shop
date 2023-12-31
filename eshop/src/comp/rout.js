import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";
import Contact from "./contact";
import TV from "./cata.js/tv";

const Rout = ({shop, Filter, allcateFilter, addtocart, cart, setCart}) =>{
    return (
        <>
        <Routes>
           <Route path="/" element={<Home addtocart={addtocart}/>}/>
           <Route path="/cart" element={<Cart cart={cart} setCart ={setCart}/>} />
           <Route path="shop" element={<Shop shop={shop} Filter ={Filter} allcateFilter={allcateFilter} addtocart={addtocart}/>} />
           <Route path="/contact" element={<Contact />}/>

           <Route path="/tv" element={<TV shop={shop} handleDetail={handleDetail} addtocart={addtocart}/>}/>
        </Routes> 
        </>
    )
}

export default Rout