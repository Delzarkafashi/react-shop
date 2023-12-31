import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.css"; // Se till att denna fil innehåller korrekt CSS
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const images = [
    { image: "image/S-tv-img.jpg", path: "/tv", text: "För se mera av våra TV, tryck här" },
    { image: "image/S-speakers-img.jpg", path:  "/category1", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-phone-img.jpg", path:  "/category1", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-lap-img.png", path:  "/category1", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-headphones-img.jpg", path:  "/category2", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-ele-img.png", path:  "/category3", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-clock-img.jpg", path:  "/category4" , text: "För se mera av våra TV, tryck här" },
    { image: "image/S-all-img.png", path:  "/category5" , text: "För se mera av våra TV, tryck här" }
];

const ImageSlider = ({ Filter, allcateFilter }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;
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
    

    return (
        <section className="slider">
            <div className="left-arrow" onClick={prevSlide}>
                <MdOutlineKeyboardDoubleArrowLeft />
            </div>
            <div className="right-arrow" onClick={nextSlide}>
                <MdOutlineKeyboardDoubleArrowRight />
            </div>
            {images.map((slide, index) => {
             return (
             <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
                <>
                    <img src={slide.image} alt={`Slide ${index}`} className="image" />
                    <div className="slide-text" onClick={() => handleSlideClick(slide.path)}>
                        {slide.text}
                    </div>
                </>
            )}
        </div>
    );
})}
        </section>
    );
};


export default ImageSlider;
