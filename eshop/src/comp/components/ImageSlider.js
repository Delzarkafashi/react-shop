import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.css"; // Se till att denna fil innehåller korrekt CSS
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Homeproduct from "../home_product";

const ImageSlider = ({ Filter, allcateFilter }) => {
    // Filtrera och omvandla data från produktlistan till önskat format för bildspelaren
    const sliderImages = Homeproduct.filter(product => product.type === "slider") // Byt ut 'slider' mot rätt värde för din filtrering
                                 .map(product => ({
                                     image: product.image,
                                     path: `/${product.cat}`,
                                     text: "För se mera, tryck här",
                                     info: product.info, // Lägger till 'info' fältet
                                     Name: product.Name, // Lägger till 'Name' fältet
                                     price: product.price 
                                 }));

    const [current, setCurrent] = useState(0);
    const length = sliderImages.length; // Använda längden på den filtrerade listan
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const handleSlideClick = (path) => {
        navigate(path);  // Navigera till angiven path
    };

    if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
        return null; // Om det inte finns några bilder, rendera ingenting
    }
    

    return (
        <div className="container">
        <section className="slider">
            <div className="left-arrow" onClick={prevSlide}>
                <MdOutlineKeyboardDoubleArrowLeft />
            </div>
            <div className="right-arrow" onClick={nextSlide}>
                <MdOutlineKeyboardDoubleArrowRight />
            
            </div>
            {sliderImages.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (
                            <>
                                <img src={slide.image} alt={`Slide ${index}`} className="image" onClick={() => handleSlideClick(slide.path)} />
                                <div className="slide-text" onClick={() => handleSlideClick(slide.path)}>
                                    {slide.text}
                                </div>
                                <div className="product-info-text">
                                    <h1>{slide.Name} </h1>

                                    <h2>${slide.price}:-</h2>
                                    <p>{slide.info}</p>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </section>
        </div>
    );
};

export default ImageSlider;
