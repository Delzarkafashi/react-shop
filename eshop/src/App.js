import React, { useState } from "react";
import Nav from "./comp/nav";
import {BrowserRouter} from "react-router-dom"
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import Homeproduct from "./comp/home_product";

const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  // shop page procuct
  const [shop, setShop] = useState(Homeproduct)
  //shop search filter
  const [search, setSearch] = useState("")
  // shop category filter
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat === x
    }) 
    setShop(catefilter)
  }
  const allcateFilter = () =>
  {
    setShop(Homeproduct)
  }
  //shop search filter 
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
   if(searchlength)
   {
     alert ("Please search somthing")
     setShop(Homeproduct)
   }
   else
   {
    
      const searchfilter = Homeproduct.filter((x) =>
      {
        return x.cat === search
      })
      setShop(searchfilter)
    
   }
  }
  
  const addtocart = (product) =>
  {
    const exist = cart.find((x)=>{
      return x.Id === product.Id
    })
    if(exist)
    {
      alert("This product is alleardy add in cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("Added to cart")
    }
  }
   console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch= {setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcateFilter={allcateFilter}  addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App