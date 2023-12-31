import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.css"; // Se till att denna fil innehåller korrekt CSS
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const images = [
    { image: "image/S-tv-img.jpg", filter: "tv", text: "För se mera av våra TV, tryck här" },
    { image: "image/S-speakers-img.jpg", filter:  "/category1", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-phone-img.jpg", filter:  "/category1", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-lap-img.png", filter:  "/category1", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-headphones-img.jpg", filter:  "/category2", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-ele-img.png", filter:  "/category3", text: "För se mera av våra TV, tryck här"  },
    { image: "image/S-clock-img.jpg", filter:  "/category4" , text: "För se mera av våra TV, tryck här" },
    { image: "image/S-all-img.png", filter:  "/category5" , text: "För se mera av våra TV, tryck här" }
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

    const handleSlideClick = (filter) => {
        if(filter === "all") {
            allcateFilter();
        } else {
            Filter(filter);
        }
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
                                <div className="slide-text" onClick={() => handleSlideClick(slide.filter)}>
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
