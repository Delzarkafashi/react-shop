import React from 'react';
import './Category.css';

const Category = ({ Filter, allcateFilter }) => {
    const categories = [
        { name: "All", filter: allcateFilter, image: "path/to/default.jpg" },
        { name: "tv", filter: () => Filter("tv"), image: "image/tv-category-image.jpg" },
        { name: "laptop", filter: () => Filter("laptop"), image: "image/laptop-category-image.jpg" },
        { name: "watch", filter: () => Filter("watch"), image: "image/watch-category-image.jpg" },
        { name: "speaker", filter: () => Filter("speaker"), image: "image/speaker-category-image.jpg" },
        // { name: "electronics", filter: () => Filter("electronics"), image: "image/electronics-category-image.jpg" },
        { name: "headphones", filter: () => Filter("headphones"), image: "image/headphones-category-image.jpg" },
        { name: "phone", filter: () => Filter("phone"), image: "image/phone-category-image.jpg" },
    
    ];

    return (
        <div className="category">
            <div className="header">
                <h3>All categories</h3>
            </div>
            <div className="boxes">
                {categories.map((category) => (
                    <div className="box" onClick={category.filter} key={category.name}>
                        <img src={category.image} alt={category.name} />
                        {/* <p>#{category.name}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
